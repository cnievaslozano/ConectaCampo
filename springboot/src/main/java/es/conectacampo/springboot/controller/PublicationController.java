package es.conectacampo.springboot.controller;

import es.conectacampo.springboot.model.Publication;
import es.conectacampo.springboot.response.ApiResponse;
import es.conectacampo.springboot.service.PublicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/api/v1/publication")
public class PublicationController {

    @Autowired
    private PublicationService publicationService;

    // Get all publications
    @GetMapping("/all")
    public List<Publication> getAllPublications() {
        return publicationService.getAllPublications();
    }

    // Get one publication
    @GetMapping("/{id}")
    public Optional<Publication> getPublicationById(@PathVariable Long id) {
        return publicationService.getPublicationById(id);
    }

    // Create publication
    @PostMapping
    public ResponseEntity<ApiResponse> createPublication (@RequestBody Publication publication) {
        try {
            publicationService.createPublication(publication);
            return ResponseEntity.ok(new ApiResponse("success", "Publication created successfully"));
        }catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ApiResponse("error", "Error creating publication: " + e.getMessage()));
        }
    }

    // Update publication
    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse> updatePublication(@PathVariable Long id, @RequestBody Publication publicationDetails) {
        try {
            publicationService.updatePublication(id, publicationDetails);
            return ResponseEntity.ok(new ApiResponse("success", "Publication updated successfully"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ApiResponse("error","Error updating publication " + e.getMessage()));
        }

    }

    // Delete publication
    @DeleteMapping("/{id}")
    public ResponseEntity<ApiResponse> deletePublication(@PathVariable Long id) {
        try {
            publicationService.deletePublication(id);
            return ResponseEntity.ok(new ApiResponse("success", "Publication deleted successfully"));
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ApiResponse("error", "Error deleting publication: " + e.getMessage()));
        }
    }


}
