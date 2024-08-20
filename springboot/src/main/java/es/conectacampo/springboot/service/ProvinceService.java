package es.conectacampo.springboot.service;

import es.conectacampo.springboot.exception.ResourceNotFoundException;
import es.conectacampo.springboot.model.Product;
import es.conectacampo.springboot.model.Province;
import es.conectacampo.springboot.repository.ProvinceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProvinceService {
    @Autowired
    private ProvinceRepository provinceRepository;

    // get all provinces
    public List<Province> getAllProvinces() {
        return provinceRepository.findAll();
    }

    // get one province
    public Optional<Province> getProvinceById(Long id){
        Province province = provinceRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Province not found for this id -> " + id));
        return Optional.ofNullable(province);
    }
}
