package es.conectacampo.springboot.controller;

import es.conectacampo.springboot.model.Category;
import es.conectacampo.springboot.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "/api/v1/category")
public class CategoryController {

    @Autowired
    private CategoryRepository categoryRepository;

    // Get all Categories
    @GetMapping("/all")
    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }
}
