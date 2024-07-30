package es.conectacampo.springboot.controller;

import es.conectacampo.springboot.model.Publication;
import es.conectacampo.springboot.service.PublicationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping(path = "/api/v1/publication")
public class PublicationController {

    @Autowired
    private PublicationService publicationService;

    // get all publications
    @GetMapping("/all")
    public List<Publication> getAllPublications() {
        return publicationService.getAllPublications();
    }

    // get one publication
    @GetMapping("/{id}")
    public ResponseEntity<Publication> getPublicationId(@PathVariable Long id) {
        Optional<Publication> publication = publicationService.getPublicationById(id);
        return publication.map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.notFound().build());
    }

    // create publication
    @PostMapping
    public Publication createPublication (@RequestBody Publication publication) {
        return publicationService.createPublication(publication);
    }

    // update publication
    @PutMapping("/{id}")
    public ResponseEntity<Publication> updatePublication(@PathVariable Long id, @RequestBody Publication publicationDetails) {
        return ResponseEntity.ok(publicationService.updatePublication(id, publicationDetails));
    }

    // delete publication
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePublication(@PathVariable Long id) {
        publicationService.deletePublication(id);
        return ResponseEntity.noContent().build();
    }


}
