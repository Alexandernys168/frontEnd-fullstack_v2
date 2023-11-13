package kth.milad.demo.infrastructure;
import kth.milad.demo.domain.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;

public interface DoctorRepository extends JpaRepository<Doctor, Long> {
    Optional<Doctor> findByUsername(String username);
    // Custom query methods specific to Doctor entity, if needed
}