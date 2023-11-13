package kth.milad.demo.infrastructure;
import kth.milad.demo.domain.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;

public interface PatientRepository extends JpaRepository<Patient, Long> {
    Optional<Patient> findByUsername(String username);
    // Custom query methods specific to Patient entity, if needed
}