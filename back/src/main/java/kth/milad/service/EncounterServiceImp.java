package kth.milad.service;

import kth.milad.entity.Encounter;
import kth.milad.entity.Msg;
import kth.milad.entity.Observation;
import kth.milad.repository.EncounterRepository;
import kth.milad.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class EncounterServiceImp implements IService<Encounter>{

    @Autowired
    private EncounterRepository encounterRepository;


    @Override
    public List<Encounter> getAll() {
        return encounterRepository.findAll();
    }

    @Override
    public Encounter getById(int entity) {
        return null;
    }

    @Override
    public void create(Encounter entity) {
        encounterRepository.save(entity);
    }

    public List<Encounter> getAllEncountersByPatientId(int patientId) {
        return encounterRepository.findAllByPatientId(patientId);
    }


    public void addObservationByPatientId(int patientId, Observation observation) {
        Encounter encounter = encounterRepository.findEncounterByPatientId(patientId);

        if (encounter != null) {

            observation.setEncounter(encounter); // Associate the observation with the encounter

            if (encounter.getObservations() == null) {
                encounter.setObservations(new ArrayList<>());
            }

            encounter.getObservations().add(observation);

            encounterRepository.save(encounter);
        } else {
            System.out.println("Observation couldn't be added because encounter is null: " + patientId);
        }
    }
}
