package kth.milad.repository;

import kth.milad.entity.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;



public interface PatientRepository extends JpaRepository<Patient, Long> {
    Optional<Patient> findByName(String name);

    Optional<Patient> findByPatientId(int patientId);
    // Custom query methods specific to Patient entity, if needed
}