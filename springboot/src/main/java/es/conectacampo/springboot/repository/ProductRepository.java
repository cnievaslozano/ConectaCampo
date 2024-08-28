package es.conectacampo.springboot.repository;

import es.conectacampo.springboot.model.Product;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long>  {
    @EntityGraph(attributePaths = {"publicationProducts.publication"})
    List<Product> findAll();
}
