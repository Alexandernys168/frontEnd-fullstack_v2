package kth.milad.entity;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
//@Table(name = "Msg")
public class Msg {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String content = "";
    private LocalDateTime timeStamp;
    //todo två variblbar en sender en reciver
    int sender; //här ska man lägga id för avsändaren som kan va en patient eller vad somhelst
    int receiver; //samma här men för reciver


    public Msg() {}

    public Msg(int id, String content, int sender,int receiver) {
        this.id = id;
        this.content = content;
        this.timeStamp = LocalDateTime.now();
        this.sender = sender;
        this.receiver = receiver;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public LocalDateTime getTimeStamp() {
        return timeStamp;
    }

    public void setTimeStamp(LocalDateTime timeStamp) {
        this.timeStamp = timeStamp;
    }

    public int getSender() {
        return sender;
    }

    public void setSender(int sender) {
        this.sender = sender;
    }

    public int getReceiver() {
        return receiver;
    }

    public void setReceiver(int receiver) {
        this.receiver = receiver;
    }

    @Override
    public String toString() {
        return "Msg{" +
                "id=" + id +
                ", content='" + content + '\'' +
                ", timeStamp=" + timeStamp +
                ", sender=" + sender +
                ", receiver=" + receiver +
                '}';
    }
}
