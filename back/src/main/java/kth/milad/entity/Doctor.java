package kth.milad.entity;

import jakarta.persistence.*;
import kth.milad.repository.Sender;

import java.util.List;

@Entity
public class Doctor implements Sender {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int doctorId;
    private String name;
    //    @OneToMany(mappedBy = "doctor")
//    private List<Msg> messages;
//
//    @OneToMany(mappedBy = "doctor")
//    private List<Encounter> encounters;
    public Doctor() {}

    public Doctor(int doctorId, String name) {
        this.doctorId = doctorId;
        this.name = name;

    }
//    public Doctor(int doctorId, String name,  List<Msg> messages, List<Encounter> encounters) {
//        this.doctorId = doctorId;
//        this.name = name;
//        this.messages = messages;
//        this.encounters = encounters;
//    }

    @Override
    public int getId() {
        return doctorId;
    }

    public void setId(int doctorId) {
        this.doctorId = doctorId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


//
//    public List<Msg> getMessages() {
//        return messages;
//    }
//
//    public void setMessages(List<Msg> messages) {
//        this.messages = messages;
//    }
//
//    public List<Encounter> getEncounters() {
//        return encounters;
//    }
//
//    public void setEncounters(List<Encounter> encounters) {
//        this.encounters = encounters;
//    }

    @Override
    public String toString() {
        return "Doctor{" +
                "doctorId=" + doctorId +
                ", name='" + name + '\'' +
                '}';
    }
}
