package kth.milad.entity;

import jakarta.persistence.*;

import java.util.ArrayList;
import java.util.List;

@Entity
//@Table(name = "doctor")
public class Patient {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int patientId;
    private String name;

    public Patient() {}

    public Patient(int patientId, String name) {
        this.patientId = patientId;
        this.name = name;
    }

    public int getId() {
        return patientId;
    }

    public void setId(int patientId) {
        this.patientId = patientId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return "Patient{" +
                "patientId=" + patientId +
                ", name='" + name + '\'' +
                '}';
    }
}
