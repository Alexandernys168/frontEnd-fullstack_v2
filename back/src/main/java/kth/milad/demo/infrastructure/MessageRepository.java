package kth.milad.demo.infrastructure;
import kth.milad.demo.domain.Msg;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
public interface MessageRepository extends JpaRepository<Msg, Long> {
    // Find messages sent by a specific user (Doctor, Patient, Staff)
    List<Msg> findBySenderUsername(String senderUsername);

    // Find messages received by a specific user (Doctor, Patient, Staff)
    List<Msg> findByReceiverUsername(String receiverUsername);

    // Find all messages related to a specific patient
    List<Msg> findByPatientId(Long patientId);

    // Find all messages related to a specific doctor
    List<Msg> findByDoctorId(Long doctorId);

    // Find all messages related to a specific staff
    List<Msg> findByStaffId(Long staffId);

    // Find all messages related to a specific user (Doctor, Patient, Staff)
    List<Msg> findBySenderUsernameAndReceiverUsername(String senderUsername, String receiverUsername);
    // Custom query methods specific to Message entity, if needed
}