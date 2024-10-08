package es.conectacampo.springboot.controller;

import es.conectacampo.springboot.dto.CreateProductDTO;
import es.conectacampo.springboot.dto.ProductDTO;
import es.conectacampo.springboot.dto.UpdateProductDTO;
import es.conectacampo.springboot.model.Product;
import es.conectacampo.springboot.response.ApiResponse;
import es.conectacampo.springboot.service.ProductService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/api/v1/product")
public class ProductController {

    @Autowired
    private ProductService productService;

    // Get all Products
    @GetMapping("/all")
    public ResponseEntity<List<ProductDTO>> getAllProducts() {
        List<ProductDTO> products = productService.getAllProducts();
        return ResponseEntity.ok(products);
    }

    // Get one Product
    @GetMapping("/{id}")
    public Optional<Product> getProductById(@PathVariable Long id) {
        return productService.getProductById(id);
    }

    // Create Product
    @PostMapping
    public ResponseEntity<ApiResponse> createPublication(@Valid @RequestBody CreateProductDTO createProductDTO) {
        try {
            productService.createProduct(createProductDTO);
            return ResponseEntity.ok(new ApiResponse("success", "Product created successfully"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ApiResponse("error", "Error creating product: " + e.getMessage()));
        }
    }

    // Update Product
    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse> updateProduct(@PathVariable Long id, @RequestBody UpdateProductDTO updateProductDTO) {
        try {
            productService.updateProduct(id, updateProductDTO);
            return ResponseEntity.ok(new ApiResponse("success", "Product updated successfully"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ApiResponse("error", "Error updating product: " + e.getMessage()));
        }
    }

    // Delete Product
    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse> deleteProduct(@PathVariable Long id) {
        try {
            productService.deleteProduct(id);
            return ResponseEntity.ok(new ApiResponse("success", "Product deleted successfully"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ApiResponse("error", "Error deleting product: " + e.getMessage()));
        }
    }

}
