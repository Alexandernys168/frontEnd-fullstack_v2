package kth.milad.service;

import kth.milad.entity.*;
import kth.milad.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Service
public class DataInitializationService {

    private final DoctorRepository doctorRepository;
    private final PatientRepository patientRepository;
    private final OthersRepository othersRepository;
    private final EncounterRepository encounterRepository;
    private final ObservationRepository observationRepository;

    @Autowired
    public DataInitializationService(DoctorRepository doctorRepository, PatientRepository patientRepository, OthersRepository othersRepository, EncounterRepository encounterRepository, ObservationRepository observationRepository) {
        this.doctorRepository = doctorRepository;
        this.patientRepository = patientRepository;
        this.othersRepository = othersRepository;
        this.encounterRepository = encounterRepository;
        this.observationRepository = observationRepository;
    }

    public void initializeData() {
        createSampleDoctors();
        createSamplePatients();
        createSampleOthers();
        //createSampleEncountersAndObservations();
        //createSampleEncounters();
        //createSampleObservations();
    }

    private void createSampleDoctors() {
        // Add logic to create sample doctors and save them using doctorRepository
        Doctor doctor1 = new Doctor(1, "Dr. Smith");
        doctorRepository.save(doctor1);

        Doctor doctor2 = new Doctor(2, "Dr. Johnson");
        doctorRepository.save(doctor2);
    }

    private void createSamplePatients() {
        Patient patient1 = new Patient(1, "John Doe");
        patientRepository.save(patient1);

        Patient patient2 = new Patient(2, "Jane Smith");
        patientRepository.save(patient2);
        // Add logic to create sample patients and save them using patientRepository
    }

    private void createSampleOthers() {
        Others others1 = new Others(1, "Staff A", null);
        othersRepository.save(others1);

        Others others2 = new Others(2, "Staff B", null);
        othersRepository.save(others2);
        // Add logic to create sample others and save them using othersRepository
    }

    private void createSampleEncountersAndObservations() {


        Encounter encounter1 = new Encounter();
        Observation observation1 = new Observation(1, "Hello first", LocalDateTime.now(), 1);

        encounter1.setObservation(observation1); // Establish the association between Encounter and Observation
        observation1.setEncounterId(encounter1.getId()); // Set the encounterId in Observation
        observationRepository.save(observation1);
        encounterRepository.save(encounter1); // Save Encounter which should cascade and save Observation

        Encounter encounter2 = new Encounter();
        Observation observation2 = new Observation(2, "Hello second", LocalDateTime.now(), 2);

        encounter2.setObservation(observation2); // Establish the association between Encounter and Observation
        observation2.setEncounterId(encounter2.getId()); // Set the encounterId in Observation
        observationRepository.save(observation2);
        encounterRepository.save(encounter2); // Save Encounter which should cascade and save Observation


        Encounter encounter3 = new Encounter();
        Observation observation3 = new Observation(3, "Hello first", LocalDateTime.now(), 3);

        encounter3.setObservation(observation3); // Establish the association between Encounter and Observation
        observation3.setEncounterId(encounter3.getId()); // Set the encounterId in Observation
        observationRepository.save(observation3);
        encounterRepository.save(encounter3); // Save Encounter which should cascade and save Observation

/*
        Observation observation1 = new Observation(1, "Hello first", LocalDateTime.now(), 1);
        Encounter encounter1 = new Encounter(1, observation1);
        observationRepository.save(observation1);
        encounterRepository.save(encounter1);

        Observation observation2 = new Observation(2, "Hello second", LocalDateTime.now(), 1);
        Encounter encounter2 = new Encounter(2, observation2);
        observationRepository.save(observation2);
        encounterRepository.save(encounter2);

*/

    }


/*
    private void createSampleObservations() {
        Observation observation1 = new Observation(1, "Hello first", LocalDateTime.now());
        observationRepository.save(observation1);

        Observation observation2 = new Observation(2, "Hello second", LocalDateTime.now());
        observationRepository.save(observation2);

    }

 */


    private static <T> T getRandomItem(List<T> list) {
        int index = (int) (Math.random() * list.size());
        return list.get(index);
    }

}

