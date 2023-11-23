package kth.milad.controller;

import kth.milad.entity.Encounter;
import kth.milad.entity.Observation;
import kth.milad.entity.Patient;
import kth.milad.service.EncounterServiceImp;
import kth.milad.service.IService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class EncounterController {

    private IService<Encounter> encounterService;
    private EncounterServiceImp encounterServiceImp;

    @Autowired
    public EncounterController(IService<Encounter> encounterService, EncounterServiceImp encounterServiceImp) {
        this.encounterService = encounterService;
        this.encounterServiceImp = encounterServiceImp;
    }


    @PostMapping("encounter")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseEntity<Integer> createEncounter(@RequestBody Encounter encounter) {
        Encounter createdEncounter = encounterService.create(encounter);
        if (createdEncounter != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body(createdEncounter.getId());
        } else {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/encounter/patient/{patientId}")
    public List<Encounter> getAllEncountersByPatientId(@PathVariable int patientId) {
        return encounterServiceImp.getAllEncountersByPatientId(patientId);
    }

    @PostMapping("/patient/{patientId}/observation")
    public void addObservationByPatientId(@PathVariable int patientId, @RequestBody Observation observation) {
        encounterServiceImp.addObservationByPatientId(patientId, observation);
    }

    @PostMapping("/encounter/{encounterId}/observation")
    public ResponseEntity<String> addObservationToEncounter(
            @PathVariable int encounterId,
            @RequestBody Observation observation) {

        try {
            encounterServiceImp.addObservationToEncounter(encounterId, observation);
            return ResponseEntity.ok("Observation added to encounter successfully");
        } catch (Exception e) {
            return ResponseEntity.notFound().build(); // Handle encounter not found
        }
    }

}


