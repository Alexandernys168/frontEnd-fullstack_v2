package kth.milad.repository;

import kth.milad.entity.Msg;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface MessageRepository extends JpaRepository<Msg, Long> {
    // Find messages sent by a specific user (Doctor, Patient, Staff)
    List<Msg> findBySender(int sender);

    // Find messages received by a specific user (Doctor, Patient, Staff)
    List<Msg> findByReceiver(int receiver);


    // Custom query methods specific to Message entity, if needed
}