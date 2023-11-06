package kth.milad.demo;

import jakarta.persistence.*;

import java.util.List;


@Entity
@Table(name = "doctor")
public class Doctor {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;

    @OneToMany(mappedBy = "doctor")
    private List<Patient> patients;

    /*
    @OneToMany(mappedBy = "doctor")
    private List<Msg> messages;

    @OneToMany(mappedBy = "doctor")
    private List<Encounter> encounters;*/

    public Doctor() {}

    public Doctor(int id, String name) {
        this.id = id;
        this.name = name;
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


    @Override
    public String toString() {
        return "Doctor{" +
                "id=" + id +
                ", name='" + name + '\'' +
                '}';
    }
}
