package es.conectacampo.springboot.service;

import es.conectacampo.springboot.model.Location;
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
        return locationRepository.findById(id);
    }

    // get Locations by Province
    public List<Location> getLocationsByProvince(Long provinceId) {
        return locationRepository.findByProvinceId(provinceId);
    }

}
