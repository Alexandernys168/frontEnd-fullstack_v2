package kth.milad.repository;
import kth.milad.entity.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

public interface DoctorRepository extends JpaRepository<Doctor, Long> {
    Optional<Doctor> findByName(String name);
    Optional<Doctor> findByDoctorId(int doctorId);

    List<Doctor> findAll();
    // Custom query methods specific to Doctor entity, if needed
}