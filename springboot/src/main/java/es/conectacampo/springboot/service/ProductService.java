package es.conectacampo.springboot.service;

import es.conectacampo.springboot.dto.CreateProductDTO;
import es.conectacampo.springboot.dto.ProductDTO;
import es.conectacampo.springboot.dto.PublicationProductDTO;
import es.conectacampo.springboot.dto.UpdateProductDTO;
import es.conectacampo.springboot.exception.ResourceNotFoundException;
import es.conectacampo.springboot.model.*;
import es.conectacampo.springboot.repository.*;
import io.micrometer.common.util.internal.logging.InternalLogger;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
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
    @Autowired
    private PublicationProductRepository publicationProductRepository;

    @Autowired
    PublicationProductRepository publicationRepository;

    private ProductDTO convertToDTO(Product product) {
        // Extraer pathPublicationImages de las publicaciones asociadas

        return ProductDTO.builder()
                .id(product.getId())
                .userId(product.getUserId())  // Incluye el userId
                .categories(product.getCategories().stream().collect(Collectors.toList()))
                .name(product.getName())
                .description(product.getDescription())
                .price(product.getPrice())
                .publicationId(product.getId())
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


    public Product createProduct(CreateProductDTO createProductDTO) {
        try {
            // Buscar usuario por ID
            User user = userRepository.findById(createProductDTO.getUserId())
                    .orElseThrow(() -> new ResourceNotFoundException("User not found for this id -> " + createProductDTO.getUserId()));

            // Buscar categorías por IDs
            List<Category> categories = categoryRepository.findAllById(createProductDTO.getCategoryIds());

            // Crear el producto preliminarmente para obtener el productId
            Product product = Product.builder()
                    .user(user)
                    .categories(categories)
                    .name(createProductDTO.getName())
                    .description(createProductDTO.getDescription())
                    .price(createProductDTO.getPrice())
                    .quantity(createProductDTO.getQuantity())
                    .build();

            // Guardar temporalmente el producto para obtener su ID generado
            productRepository.save(product);

            // Buscar la publicación por ID proporcionado
            /*Publication publication = publicationRepository.findById(product.getId()) // me pedia un PublicationProductId no un Long
                    .orElseThrow(() -> new ResourceNotFoundException("Publication not found for this id -> " + createProductDTO.getPublicationId())).getPublication();

            // Crear un PublicationProductId usando el ID del producto y el ID de la publicación
             PublicationProductId publicationProductId = new PublicationProductId(
                    product.getId(), // ID del producto
                    publication.getId() // ID de la publicación
            );

            Crear y configurar el PublicationProduct correctamente
            PublicationProduct newPublicationProduct = new PublicationProduct();
            newPublicationProduct.setId(publicationProductId);
            newPublicationProduct.setProduct(product);
            newPublicationProduct.setPublication(publication);

            // Guardar el nuevo PublicationProduct
            publicationProductRepository.save(newPublicationProduct);

            // Asignar publicaciones al producto y guardarlo definitivamente
            product.setPublications(Collections.singleton(newPublicationProduct));
            return productRepository.save(product);*/

        } catch (Exception e) {
            // Manejar cualquier otra excepción no controlada
            throw new RuntimeException("An unexpected error occurred while creating the product: " + e);
        }
        return null;
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
