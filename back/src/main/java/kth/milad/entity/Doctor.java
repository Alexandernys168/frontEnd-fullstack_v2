package kth.milad.entity;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Doctor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    //    @OneToMany(mappedBy = "doctor")
//    private List<Msg> messages;
//
//    @OneToMany(mappedBy = "doctor")
//    private List<Encounter> encounters;
    public Doctor() {}

    public Doctor(int id, String name) {
        this.id = id;
        this.name = name;

    }
//    public Doctor(int id, String name,  List<Msg> messages, List<Encounter> encounters) {
//        this.id = id;
//        this.name = name;
//        this.messages = messages;
//        this.encounters = encounters;
//    }

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
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }
}
