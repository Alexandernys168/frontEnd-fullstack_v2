package kth.milad.demo.domain;

import jakarta.persistence.*;

import java.util.List;

@Entity
//@Table(name = "doctor")
public class Patient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;

    @ManyToOne
    @JoinColumn(name = "other_id")
    private Others others;

    @ManyToOne
    @JoinColumn(name = "doctor_id")
    private Doctor doctor;

    @OneToMany(mappedBy = "patient")
    private List<Msg> messages;

    @OneToMany(mappedBy = "patient")
    private List<Encounter> encounters;

    public Patient() {}

    public Patient(int id, String name, Others others, Doctor doctor, List<Msg> messages, List<Encounter> encounters) {
        this.id = id;
        this.name = name;
        this.others = others;
        this.doctor = doctor;
        this.messages = messages;
        this.encounters = encounters;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Others getOthers() {
        return others;
    }

    public void setOthers(Others others) {
        this.others = others;
    }

    public Doctor getDoctor() {
        return doctor;
    }

    public void setDoctor(Doctor doctor) {
        this.doctor = doctor;
    }

    public List<Msg> getMessages() {
        return messages;
    }

    public void setMessages(List<Msg> messages) {
        this.messages = messages;
    }

    public List<Encounter> getEncounters() {
        return encounters;
    }

    public void setEncounters(List<Encounter> encounters) {
        this.encounters = encounters;
    }

    @Override
    public String toString() {
        return "Patient{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", others=" + others +
                ", doctor=" + doctor +
                ", messages=" + messages +
                ", encounters=" + encounters +
                '}';
    }
}
