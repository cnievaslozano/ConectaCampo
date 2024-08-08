package es.conectacampo.springboot.repository;

import es.conectacampo.springboot.model.Follow;
import es.conectacampo.springboot.model.Location;
import es.conectacampo.springboot.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FollowRepository extends JpaRepository<Follow, Long> {
    Optional<Follow> findByFollowerAndFollowed(User follower, User followed);

}
