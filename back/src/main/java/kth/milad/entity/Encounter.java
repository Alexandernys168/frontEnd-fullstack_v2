package kth.milad.entity;

import jakarta.persistence.*;

@Entity
//@Table(name = "encounter")
public class Encounter {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "doctor_id")
    private Doctor doctor;

    @ManyToOne
    @JoinColumn(name = "patient_id")
    private Patient patient;

    @ManyToOne
    @JoinColumn(name = "other_id")
    private Others others;

    @OneToOne(mappedBy = "encounter", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(name = "observation_id")
    private Observation observation;//todo list of observation

    public Encounter() {}

    public Encounter(int id, Observation observation) {
        this.id = id;
        setObservation(observation);
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Doctor getDoctor() {
        return doctor;
    }

    public void setDoctor(Doctor doctor) {
        this.doctor = doctor;
    }

    public Patient getPatient() {
        return patient;
    }

    public void setPatient(Patient patient) {
        this.patient = patient;
    }

    public Others getOthers() {
        return others;
    }

    public void setOthers(Others others) {
        this.others = others;
    }

    public Observation getObservation() {
        return observation;
    }

    public void setObservation(Observation observation) {
        this.observation = observation;
    }

    @Override
    public String toString() {
        return "Encounter{" +
                "id=" + id +
                ", doctor=" + doctor +
                ", patient=" + patient +
                ", others=" + others +
                ", observation=" + observation +
                '}';
    }
}
