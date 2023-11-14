package kth.milad.repository;
import kth.milad.entity.Others;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

public interface OthersRepository extends JpaRepository<Others, Long> {
    Optional<Others> findByName(String username);

    Optional<Others> findByOthersId(int othersId);
    List<Others> findAll();
    // Custom query methods specific to Staff entity, if needed
}
