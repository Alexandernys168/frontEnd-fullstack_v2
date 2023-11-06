package kth.milad.demo;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "patient")
public class Patient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) // generera primärnyckelvärdet automatiskt vid insättning av en ny rad i databastabellen.
    private int id;
    private String name;

    /*@ManyToOne
    @JoinColumn(name = "other_id")
    private Others others;
*/
    @ManyToOne
    @JoinColumn(name = "doctor_id")
    private Doctor doctor;
/*
    @OneToMany(mappedBy = "patient")
    private List<Msg> messages;

    @OneToMany(mappedBy = "patient")
    private List<Encounter> encounters;
*/
    public Patient() {}

    public Patient(int id, String name,Doctor doctor) {
        this.id = id;
        this.name = name;
        this.doctor = doctor;
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


    public Doctor getDoctor() {
        return doctor;
    }

    public void setDoctor(Doctor doctor) {
        this.doctor = doctor;
    }


    @Override
    public String toString() {
        return "Patient{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", doctor=" + doctor +
                '}';
    }
}
