package kth.milad.controller;

import kth.milad.entity.Msg;
import kth.milad.service.MessageServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class MsgController {
    @Autowired
    private MessageServiceImp msgService;

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

    //todo get all my mesgs preview wher i am sender or reciver

}
