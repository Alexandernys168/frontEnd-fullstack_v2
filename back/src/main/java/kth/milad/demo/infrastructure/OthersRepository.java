package kth.milad.demo.infrastructure;
import kth.milad.demo.domain.Others;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;

public interface OthersRepository extends JpaRepository<Others, Long> {
    Optional<Others> findByUsername(String username);
    // Custom query methods specific to Staff entity, if needed
}
