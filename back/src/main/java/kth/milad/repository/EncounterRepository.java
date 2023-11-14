package kth.milad.repository;

import kth.milad.entity.Encounter;
import kth.milad.entity.Observation;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface EncounterRepository extends JpaRepository<Encounter, Long> {
    Optional<Encounter> findById(int id);
    List<Encounter> findAll();
}
