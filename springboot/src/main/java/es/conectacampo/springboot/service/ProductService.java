package es.conectacampo.springboot.service;

import es.conectacampo.springboot.dto.CreateProductDTO;
import es.conectacampo.springboot.dto.ProductDTO;
import es.conectacampo.springboot.dto.UpdateProductDTO;
import es.conectacampo.springboot.exception.ResourceNotFoundException;
import es.conectacampo.springboot.model.Category;
import es.conectacampo.springboot.model.Product;
import es.conectacampo.springboot.model.User;
import es.conectacampo.springboot.repository.CategoryRepository;
import es.conectacampo.springboot.repository.ProductRepository;
import es.conectacampo.springboot.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CategoryRepository categoryRepository;

    private ProductDTO convertToDTO(Product product) {
        return ProductDTO.builder()
                .id(product.getId())
                .userId(product.getUserId())  // Incluye el userId
                .categories(product.getCategories())
                .publications(product.getPublications())
                .name(product.getName())
                .description(product.getDescription())
                .price(product.getPrice())
                .quantity(product.getQuantity())
                .build();
    }

    // CRUD PRODUCTS
    public List<ProductDTO> getAllProducts() {
        List<Product> products = productRepository.findAll();
        return products.stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public Optional<Product> getProductById(Long id){
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found for this id -> " + id));
        return Optional.ofNullable(product);
    }

    @Transactional
    public Product createProduct (CreateProductDTO createProductDTO) {
        User user = userRepository.findById(createProductDTO.getUserId())
                .orElseThrow(() -> new ResourceNotFoundException("User not found for this id -> " + createProductDTO.getUserId()));

        List<Category> categories = (categoryRepository.findAllById(createProductDTO.getCategoryIds()));

        Product product = Product.builder()
                .user(user)
                .categories(categories)
                .name(createProductDTO.getName())
                .description(createProductDTO.getDescription())
                .price(createProductDTO.getPrice())
                .quantity(createProductDTO.getQuantity())
                .build();

        return productRepository.save(product);
    }

    @Transactional
    public Product updateProduct(Long id, UpdateProductDTO updateProductDTO) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found for this id :: " + id));

        product.setName(updateProductDTO.getName());
        product.setDescription(updateProductDTO.getDescription());
        product.setPrice(updateProductDTO.getPrice());
        product.setQuantity(updateProductDTO.getQuantity());

        return productRepository.save(product);
    }

    // delete product
    public void deleteProduct(Long id) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found for this id :: " + id));
        productRepository.delete(product);
    }
}
