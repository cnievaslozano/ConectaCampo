package es.conectacampo.springboot.service;

import es.conectacampo.springboot.model.Follow;
import es.conectacampo.springboot.model.User;
import es.conectacampo.springboot.repository.FollowRepository;
import es.conectacampo.springboot.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class FollowService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private FollowRepository followRepository;

    // Obtener seguidores de un usuario
    public List<Follow> getFollowers(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
        return followRepository.findByFollowed(user);
    }

    // Obtener personas a las que sigue un usuario
    public List<Follow> getFollowing(Long userId) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
        return followRepository.findByFollower(user);
    }


    public List<Follow> getAllFollows() {
        return followRepository.findAll();
    }

    public List<Follow> getFollowsByFollower(Long followerId) {
        return followRepository.findByFollowerId(followerId);
    }

    public List<Follow> getFollowsByFollowed(Long followedId) {
        return followRepository.findByFollowedId(followedId);
    }

    // Follow
    @Transactional
    public void follow(Long userId, Long followUserId) {
        User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
        User followUser = userRepository.findById(followUserId).orElseThrow(() -> new RuntimeException("User to follow not found"));

        Follow follow = new Follow();
        follow.setFollowed(user);
        follow.setFollower(followUser);

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

