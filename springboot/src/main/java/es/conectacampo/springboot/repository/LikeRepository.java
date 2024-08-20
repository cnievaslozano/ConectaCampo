package es.conectacampo.springboot.repository;

import es.conectacampo.springboot.model.Like;
import es.conectacampo.springboot.model.Publication;
import es.conectacampo.springboot.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface LikeRepository extends JpaRepository<Like, Long> {

    Optional<Like> findByUserAndPublication(User user, Publication publication);
}
