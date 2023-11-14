package kth.milad.repository;

import kth.milad.entity.Observation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface ObservationRepository extends JpaRepository<Observation, Long> {
    Optional<Observation> findById(int id);
    List<Observation> findAll();
}
