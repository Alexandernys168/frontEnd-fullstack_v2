package kth.milad.controller;

import kth.milad.entity.Doctor;
import kth.milad.entity.Observation;
import kth.milad.repository.DoctorRepository;
import kth.milad.repository.ObservationRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/observations")
public class ObservationController {


    private final ObservationRepository observationRepository;

    public ObservationController(ObservationRepository observationRepository) {
        this.observationRepository = observationRepository;
    }

    @GetMapping
    public List<Observation> findAllObservations() {
        return observationRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Observation> getObservationById(@PathVariable int id) {
        return observationRepository.findById(id);
    }

}
