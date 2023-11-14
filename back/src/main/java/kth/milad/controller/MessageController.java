package kth.milad.controller;

import kth.milad.entity.Msg;
import kth.milad.repository.MessageRepository;
import kth.milad.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/messages")
public class MessageController {

    private final MessageRepository messageRepository;

    @Autowired
    public MessageController(MessageRepository messageRepository) {
        this.messageRepository = messageRepository;
    }

    @GetMapping("/bySender/{senderUsername}")
    public List<Msg> getMessagesBySender(@PathVariable String senderUsername) {
        return messageRepository.findBySenderUsername(senderUsername);
    }

    @GetMapping("/byReceiver/{receiverUsername}")
    public List<Msg> getMessagesByReceiver(@PathVariable String receiverUsername) {
        return messageRepository.findByReceiverUsername(receiverUsername);
    }

    // Find all messages related to a specific patient
    @GetMapping("/byPatient/{patientId}")
    public List<Msg> getMessagesByPatient(@PathVariable Long patientId) {
        return messageRepository.findByPatientId(patientId);
    }

    // Find all messages related to a specific doctor
    @GetMapping("/byDoctor/{doctorId}")
    public List<Msg> getMessagesByDoctor(@PathVariable Long doctorId) {
        return messageRepository.findByDoctorId(doctorId);
    }

    // Find all messages related to a specific staff
    @GetMapping("/byStaff/{staffId}")
    public List<Msg> getMessagesByStaff(@PathVariable Long staffId) {
        return messageRepository.findByStaffId(staffId);
    }

    // Find all messages related to a specific user (Doctor, Patient, Staff)
    @GetMapping("/bySenderAndReceiver/{sender}/{receiver}")
    public List<Msg> getMessagesBySenderAndReceiver(
            @PathVariable String sender, @PathVariable String receiver) {
        return messageRepository.findBySenderUsernameAndReceiverUsername(sender, receiver);
    }

    @PostMapping("/create")
    public ResponseEntity<Msg> createMessage(@RequestBody Msg msg) {
        // Validate the message, for example, check if required fields are present
        if (msg.getContent() == null || msg.getTimeStamp() == null) {
            return ResponseEntity.badRequest().build();
        }

        // Additional business logic if needed

        // Save the message to the repository
        Msg savedMsg = messageRepository.save(msg);

        // You might want to return the saved message or a confirmation
        return ResponseEntity.ok(savedMsg);
    }
    /*
    @Autowired
    private MessageService msgService;

    @GetMapping("/msgs")
    public List<Msg> getAll(){
        List<Msg> list = msgService.getAll();
        return list;
    }

    @PostMapping("/msg")
    @ResponseStatus(HttpStatus.CREATED)
    public void create(@RequestBody Msg msg){
        msgService.create(msg);
    }


     */
}
