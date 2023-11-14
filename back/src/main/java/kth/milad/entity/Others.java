package kth.milad.entity;

import jakarta.persistence.*;

import java.util.List;

@Entity
//@Table(name = "other")
public class Others {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int othersId;
    private String name;


    @OneToMany(mappedBy = "others")
    private List<Encounter> encounters;

    public Others() {}

    public Others(int othersId, String name,  List<Encounter> encounters) {
        this.othersId = othersId;
        this.name = name;
        this.encounters = encounters;
    }

    public int getOthersId() {
        return othersId;
    }

    public void setOthersId(int othersId) {
        this.othersId = othersId;
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
                "otherId=" + othersId +
                ", name='" + name + '\'' +
                ", encounters=" + encounters +
                '}';
    }
}
