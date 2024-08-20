package es.conectacampo.springboot.repository;

import es.conectacampo.springboot.model.Province;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProvinceRepository extends JpaRepository<Province, Long> {
}
