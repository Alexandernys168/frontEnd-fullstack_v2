package kth.milad.controller;


import kth.milad.entity.Encounter;
import kth.milad.repository.EncounterRepository;
import kth.milad.repository.EncounterRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/encounters")
public class EncounterController {


    private final EncounterRepository encounterRepository;

    public EncounterController(EncounterRepository encounterRepository) {
        this.encounterRepository = encounterRepository;
    }

    @GetMapping
    public List<Encounter> findAllEncounters() {
        return encounterRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Encounter> getEncounterById(@PathVariable int id) {
        return encounterRepository.findById(id);
    }

}
