package kth.milad.service;

import kth.milad.entity.Msg;
import kth.milad.repository.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MessageService implements IService<Msg> {
    @Autowired
    MessageRepository messageRepository;

    @Override
    public List<Msg> getAll() {
        return messageRepository.findAll();
    }

    @Override
    public Msg getById(int entity) {
        return null;
    }

    @Override
    public void create(Msg entity) {
        messageRepository.save(entity);
    }
}
