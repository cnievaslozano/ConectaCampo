package es.conectacampo.springboot.controller;

import es.conectacampo.springboot.model.Location;
import es.conectacampo.springboot.model.Province;
import es.conectacampo.springboot.service.ProvinceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "api/v1/provinces")
public class ProvinceController {

    @Autowired
    private ProvinceService provinceService;

    // Get all Provinces
    @GetMapping(path = ("/all"))
    public List<Province> getAllProvinces() {
        return provinceService.getAllProvinces();
    }

    // Get one Province
    @GetMapping("/{id}")
    public Optional<Province> getProvinceById(@PathVariable Long id) {
        return provinceService.getProvinceById(id);
    }

}
