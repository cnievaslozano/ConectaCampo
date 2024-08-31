package es.conectacampo.springboot.repository;

import es.conectacampo.springboot.model.Follow;
import es.conectacampo.springboot.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface FollowRepository extends JpaRepository<Follow, Long> {
    Optional<Follow> findByFollowerAndFollowed(User follower, User followed);

    List<Follow> findByFollowed(User followed);

    List<Follow> findByFollower(User follower);

    List<Follow> findByFollowerId(Long followerId);
    List<Follow> findByFollowedId(Long followedId);
}

