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

    @Column(name = "encounter_id")
    private int encounterId;

    @OneToOne
    @JoinColumn(name = "encounter_id", referencedColumnName = "id", insertable = false, updatable = false)
    private Encounter encounter;

    public Observation() {}

    public Observation(int id, String msg, LocalDateTime timeStamp, int encounterId) {
        this.id = id;
        this.msg = msg;
        this.timeStamp = timeStamp;
        this.encounterId = encounterId;
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
    public int getEncounterId() {
        return encounterId;
    }

    public void setEncounterId(int encounterId) {
        this.encounterId = encounterId;
    }



    @Override
    public String toString() {
        return "Observation{" +
                "id=" + id +
                ", msg='" + msg + '\'' +
                ", timeStamp=" + timeStamp +
                ", encounter_id=" + encounterId +
                '}';
    }
}
