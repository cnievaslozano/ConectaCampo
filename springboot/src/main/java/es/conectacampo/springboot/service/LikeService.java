package es.conectacampo.springboot.service;

import es.conectacampo.springboot.exception.ResourceNotFoundException;
import es.conectacampo.springboot.model.Like;
import es.conectacampo.springboot.model.Publication;
import es.conectacampo.springboot.model.User;
import es.conectacampo.springboot.repository.LikeRepository;
import es.conectacampo.springboot.repository.PublicationRepository;
import es.conectacampo.springboot.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LikeService {
    @Autowired
    private LikeRepository likeRepository;

    @Autowired
    private PublicationRepository publicationRepository;

    @Autowired
    private UserRepository userRepository;

    @Transactional
    public void likePublication(Long userId, Long publicationId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found for this id -> " + userId));
        Publication publication = publicationRepository.findById(publicationId)
                .orElseThrow(() -> new ResourceNotFoundException("Publication not found for this id -> " + publicationId));

        if (likeRepository.findByUserAndPublication(user, publication).isPresent()) {
            throw new IllegalStateException("User has already liked this publication");
        }

        Like like = new Like(user, publication);
        publication.addLike(like);
        likeRepository.save(like);
    }

    @Transactional
    public void unlikePublication(Long userId, Long publicationId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found for this id -> " + userId));
        Publication publication = publicationRepository.findById(publicationId)
                .orElseThrow(() -> new ResourceNotFoundException("Publication not found for this id -> " + publicationId));

        Like like = likeRepository.findByUserAndPublication(user, publication)
                .orElseThrow(() -> new ResourceNotFoundException("Like not found for this user and publication"));

        publication.removeLike(like);
        likeRepository.delete(like);
    }

    public int getPublicationLikeCount(Long publicationId) {
        Publication publication = publicationRepository.findById(publicationId)
                .orElseThrow(() -> new ResourceNotFoundException("Publication not found for this id -> " + publicationId));

        return publication.getLikeCount();
    }
}
