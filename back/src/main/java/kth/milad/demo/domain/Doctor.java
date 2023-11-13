package kth.milad.demo.domain;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Doctor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;

    @OneToMany(mappedBy = "doctor")
    private List<Patient> patients;

    @OneToMany(mappedBy = "doctor")
    private List<Msg> messages;

    @OneToMany(mappedBy = "doctor")
    private List<Encounter> encounters;

    public Doctor() {}

    public Doctor(int id, String name, List<Patient> patients, List<Msg> messages, List<Encounter> encounters) {
        this.id = id;
        this.name = name;
        this.patients = patients;
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

    public List<Patient> getPatients() {
        return patients;
    }

    public void setPatients(List<Patient> patients) {
        this.patients = patients;
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
        return "Doctor{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", patients=" + patients +
                ", messages=" + messages +
                ", encounters=" + encounters +
                '}';
    }
}
