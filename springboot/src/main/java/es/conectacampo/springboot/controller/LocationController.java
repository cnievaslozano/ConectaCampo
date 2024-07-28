package es.conectacampo.springboot.controller;

import es.conectacampo.springboot.model.Location;
import es.conectacampo.springboot.service.LocationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
@RestController
@RequestMapping("/api/v1/locations")
public class LocationController {

    @Autowired
    private LocationService locationService;

    @GetMapping("/province/{provinceId}")
    public List<Location> getLocationsByProvince(@PathVariable Long provinceId) {
        return locationService.getLocationsByProvince(provinceId);
    }
}
