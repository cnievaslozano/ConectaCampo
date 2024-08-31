package es.conectacampo.springboot.service;

import es.conectacampo.springboot.dto.CreatePublicationDTO;
import es.conectacampo.springboot.dto.UpdatePublicationDTO;
import es.conectacampo.springboot.exception.ResourceNotFoundException;
import es.conectacampo.springboot.model.Publication;
import es.conectacampo.springboot.model.User;
import es.conectacampo.springboot.repository.PublicationRepository;
import es.conectacampo.springboot.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.lang.module.ResolutionException;
import java.util.List;
import java.util.Optional;


@Service
public class PublicationService {

    @Autowired
    private PublicationRepository publicationRepository;

    @Autowired
    private UserRepository userRepository;

    // CRUD PUBLICATION
    public List<Publication> getAllPublications() {
        return publicationRepository.findAll();
    }

    public Optional<Publication> getPublicationById(Long id) {
        Publication publication = publicationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Publication not found for this id -> " + id));
        return Optional.ofNullable(publication);
    }

    @Transactional
    public Publication createPublication(CreatePublicationDTO createPublicationDTO) throws IOException {
        User user = userRepository.findById(createPublicationDTO.getUserId())
                .orElseThrow(() -> new ResolutionException("User not found for this id ->" + createPublicationDTO.getUserId()));

        Publication publication = Publication.builder()
                .user(user)
                .description(createPublicationDTO.getDescription())
                .address(createPublicationDTO.getAddress())
                .schedule(createPublicationDTO.getSchedule())
                .pathPublicationImage(createPublicationDTO.getPathPublicationImage())
                .build();

        return publicationRepository.save(publication);
    }

    @Transactional
    public Publication updatePublication(Long id, UpdatePublicationDTO updatePublicationDTO) {
        Publication publication = publicationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Publication not found for this id :: " + id));

        publication.setDescription(updatePublicationDTO.getDescription());
        publication.setAddress(updatePublicationDTO.getAddress());
        publication.setSchedule(updatePublicationDTO.getSchedule());
        publication.setPathPublicationImage(updatePublicationDTO.getPathPublicationImage());

        return publicationRepository.save(publication);
    }


    public void deletePublication(Long id) {
        Publication publication = publicationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Publication not found for this id :: " + id));
        publicationRepository.delete(publication);
    }

}
