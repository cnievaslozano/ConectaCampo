package es.conectacampo.springboot.service;

import es.conectacampo.springboot.exception.ResourceNotFoundException;
import es.conectacampo.springboot.model.Location;
import es.conectacampo.springboot.model.Product;
import es.conectacampo.springboot.repository.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
public class LocationService {

    @Autowired
    private LocationRepository locationRepository;

    // get all locations
    public List<Location> getAllLocations() {
        return locationRepository.findAll();
    }

    // get one location
    public Optional<Location> getLocationById(Long id) {
        Location location = locationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Location not found for this id -> " + id));
        return Optional.ofNullable(location);
    }

    // get Locations by Province
    public List<Location> getLocationsByProvince(Long provinceId) {
        return locationRepository.findByProvinceId(provinceId);
    }

}
