package es.conectacampo.springboot.controller;

import es.conectacampo.springboot.model.Location;
import es.conectacampo.springboot.service.LocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/v1/locations")
public class LocationController {

    @Autowired
    private LocationService locationService;

    // get all locations
    @GetMapping("/all")
    public List<Location> getAllLocations() {
        return locationService.getAllLocations();
    }

    // get one location
    @GetMapping("/{id}")
    public Optional<Location> getLocationById(@PathVariable Long id) {
        return locationService.getLocationById(id);
    }

    // get Locations by Province
    @GetMapping("/province/{provinceId}")
    public List<Location> getLocationsByProvince(@PathVariable Long provinceId) {
        return locationService.getLocationsByProvince(provinceId);
    }
}
