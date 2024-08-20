package es.conectacampo.springboot.controller;

import es.conectacampo.springboot.dto.CreatePublicationDTO;
import es.conectacampo.springboot.dto.UpdatePublicationDTO;
import es.conectacampo.springboot.model.Publication;
import es.conectacampo.springboot.response.ApiResponse;
import es.conectacampo.springboot.service.LikeService;
import es.conectacampo.springboot.service.PublicationService;
import jakarta.validation.Valid;
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
    private LikeService likeService;

    @Autowired
    private PublicationService publicationService;

    // Like endpoints
    @PostMapping("/{publicationId}/like")
    public ResponseEntity<String> likePublication(@PathVariable Long publicationId, @RequestParam Long userId) {
        likeService.likePublication(userId, publicationId);
        return ResponseEntity.ok("Publication liked successfully.");
    }

    @PostMapping("/{publicationId}/unlike")
    public ResponseEntity<String> unlikePublication(@PathVariable Long publicationId, @RequestParam Long userId) {
        likeService.unlikePublication(userId, publicationId);
        return ResponseEntity.ok("Publication unliked successfully.");
    }

    @GetMapping("/{publicationId}/likeCount")
    public ResponseEntity<Integer> getLikeCount(@PathVariable Long publicationId) {
        int likeCount = likeService.getPublicationLikeCount(publicationId);
        return ResponseEntity.ok(likeCount);
    }

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
    public ResponseEntity<ApiResponse> createPublication (@Valid @RequestBody CreatePublicationDTO createPublicationDTO) {
        try {
            publicationService.createPublication(createPublicationDTO);
            return ResponseEntity.ok(new ApiResponse("success", "Publication created successfully"));
        }catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body(new ApiResponse("error", "Error creating publication: " + e.getMessage()));
        }
    }

    // Update publication
    @PutMapping("/{id}")
    public ResponseEntity<ApiResponse> updatePublication(@PathVariable Long id, @RequestBody UpdatePublicationDTO updatePublicationDTO) {
        try {
            publicationService.updatePublication(id, updatePublicationDTO);
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
