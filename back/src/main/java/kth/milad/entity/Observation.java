package kth.milad.entity;


import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
//@Table(name = "observation")
public class Observation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String msg = "";
    private LocalDateTime timeStamp;

    @OneToOne
    private Encounter encounter;

    public Observation() {}

    public Observation(int id, String msg, LocalDateTime timeStamp, Encounter encounter) {
        this.id = id;
        this.msg = msg;
        this.timeStamp = timeStamp;
        this.encounter = encounter;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    public LocalDateTime getTimeStamp() {
        return timeStamp;
    }

    public void setTimeStamp(LocalDateTime timeStamp) {
        this.timeStamp = timeStamp;
    }

    public Encounter getEncounter() {
        return encounter;
    }

    public void setEncounter(Encounter encounter) {
        this.encounter = encounter;
    }

    @Override
    public String toString() {
        return "Observation{" +
                "id=" + id +
                ", msg='" + msg + '\'' +
                ", timeStamp=" + timeStamp +
                ", encounter=" + encounter +
                '}';
    }
}
