package es.conectacampo.springboot.service;

import es.conectacampo.springboot.exception.ResourceNotFoundException;
import es.conectacampo.springboot.model.Publication;
import es.conectacampo.springboot.repository.PublicationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class PublicationService {

    @Autowired
    private PublicationRepository publicationRepository;

    // get all publications
    public List<Publication> getAllPublications() {
        return publicationRepository.findAll();
    }

    // get one publication
    public Optional<Publication> getPublicationById(Long id) {
        return publicationRepository.findById(id);
    }

    // create publication
    public Publication createPublication (Publication publication) {
        return publicationRepository.save(publication);
    }

    // update publication
    public Publication updatePublication (Long id, Publication publicationDetails) {
        Publication publication = publicationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Publication not found for this id :: " + id));

        publication.setProducts(publicationDetails.getProducts());
        publication.setDescription(publicationDetails.getDescription());
        publication.setAddress(publicationDetails.getAddress());
        publication.setSchedule(publicationDetails.getSchedule());
        publication.setActive(publicationDetails.isActive());

        return publicationRepository.save(publication);
    }

    // delete publication
    public void deletePublication(Long id) {
        Publication publication = publicationRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Publication not found for this id :: " + id));
        publicationRepository.delete(publication);
    }

}
