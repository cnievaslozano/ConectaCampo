package es.conectacampo.springboot.service;

import es.conectacampo.springboot.model.Location;
import es.conectacampo.springboot.repository.LocationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.List;

@Service
public class LocationService {

    @Autowired
    private LocationRepository locationRepository;

    public List<Location> getLocationsByProvince(Long provinceId) {
        return locationRepository.findByProvinceId(provinceId);
    }
}
