package es.conectacampo.springboot.repository;

import es.conectacampo.springboot.model.PublicationProduct;
import es.conectacampo.springboot.model.PublicationProductId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface PublicationProductRepository extends JpaRepository<PublicationProduct, Long> {
    Optional<PublicationProduct> findById(PublicationProductId publicationProductId);


}
