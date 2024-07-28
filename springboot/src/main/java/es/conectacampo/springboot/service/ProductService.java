package es.conectacampo.springboot.service;

import es.conectacampo.springboot.exception.ResourceNotFoundException;
import es.conectacampo.springboot.model.Product;
import es.conectacampo.springboot.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    // get all products
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    // get one product
    public Optional<Product> getProductById(Long id){
        return productRepository.findById(id);
    }

    // create product
    public Product createProduct (Product product) {
        return productRepository.save(product);
    }

    // update product
    public Product updateProduct(Long id, Product productDetails) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found for this id :: " + id));

        product.setName(productDetails.getName());
        product.setDescription(productDetails.getDescription());
        product.setPrice(productDetails.getPrice());
        product.setQuantity(productDetails.getQuantity());
        product.setUser(productDetails.getUser()); // Asegúrate de que el usuario esté presente

        return productRepository.save(product);
    }

    // delete product
    public void deleteProduct(Long id) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found for this id :: " + id));
        productRepository.delete(product);
    }
}
