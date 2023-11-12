package kth.milad.entity;

import jakarta.persistence.*;

import java.util.List;

@Entity
//@Table(name = "other")
public class Others {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;


    @OneToMany(mappedBy = "others")
    private List<Encounter> encounters;

    public Others() {}

    public Others(int id, String name,  List<Encounter> encounters) {
        this.id = id;
        this.name = name;
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



    public List<Encounter> getEncounters() {
        return encounters;
    }

    public void setEncounters(List<Encounter> encounters) {
        this.encounters = encounters;
    }

    @Override
    public String toString() {
        return "Others{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", encounters=" + encounters +
                '}';
    }
}
