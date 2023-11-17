package kth.milad.controller;

import kth.milad.entity.Encounter;
import kth.milad.entity.Observation;
import kth.milad.entity.Patient;
import kth.milad.service.EncounterServiceImp;
import kth.milad.service.IService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
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
        public void createEncounter(@RequestBody Encounter encounter) {
            encounterService.create(encounter);
        }


        @GetMapping("/patient/{patientId}")
        public List<Encounter> getAllEncountersByPatientId(@PathVariable int patientId) {
            return encounterServiceImp.getAllEncountersByPatientId(patientId);
        }

        @PostMapping("/patient/{patientId}/observation")
        public void addObservationByPatientId(@PathVariable int patientId, @RequestBody Observation observation) {
            encounterServiceImp.addObservationByPatientId(patientId, observation);
        }

    }


