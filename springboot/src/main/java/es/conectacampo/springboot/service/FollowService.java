package es.conectacampo.springboot.service;

import es.conectacampo.springboot.model.Follow;
import es.conectacampo.springboot.model.User;
import es.conectacampo.springboot.repository.FollowRepository;
import es.conectacampo.springboot.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class FollowService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private FollowRepository followRepository;

    // Follow
    @Transactional
    public void follow(Long userId, Long followUserId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        User followUser = userRepository.findById(followUserId).orElseThrow(() -> new RuntimeException("User to follow not found"));

        Follow follow = new Follow();
        follow.setFollower(user);
        follow.setFollowed(followUser);

        followRepository.save(follow);
    }

    // Unfollow
    @Transactional
    public void unfollow(Long userId, Long followUserId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        User followUser = userRepository.findById(followUserId).orElseThrow(() -> new RuntimeException("User to unfollow not found"));

        Follow follow = followRepository.findByFollowerAndFollowed(user, followUser)
                .orElseThrow(() -> new RuntimeException("Follow relationship not found"));

        followRepository.delete(follow);
    }
}

