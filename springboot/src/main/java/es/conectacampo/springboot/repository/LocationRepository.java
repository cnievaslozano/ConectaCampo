package es.conectacampo.springboot.repository;

import es.conectacampo.springboot.model.Location;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LocationRepository extends JpaRepository<Location, Long> {
    List<Location> findByProvinceId(Long provinceId);
}
