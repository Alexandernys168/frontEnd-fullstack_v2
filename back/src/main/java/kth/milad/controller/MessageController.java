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

    @GetMapping("/bySender/{sender}")
    public List<Msg> getMessagesBySender(@PathVariable int sender) {
        return messageRepository.findBySender(sender);
    }

    @GetMapping("/byReceiver/{receiver}")
    public List<Msg> getMessagesByReceiver(@PathVariable int receiver) {
        return messageRepository.findByReceiver(receiver);
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
