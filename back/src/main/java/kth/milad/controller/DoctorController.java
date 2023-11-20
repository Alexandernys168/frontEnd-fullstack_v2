package kth.milad.controller;

import kth.milad.entity.Doctor;
import kth.milad.entity.Patient;
import kth.milad.service.IService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.print.Doc;
import java.util.List;

@RestController
@CrossOrigin
public class DoctorController {

    private IService<Doctor> doctorService;

    @Autowired
    public DoctorController(IService<Doctor> doctorService) {
        this.doctorService = doctorService;
    }

    @GetMapping("/doctors")
    public List<Doctor> fetchDoctorList(){
        System.out.println("get doctor called");
        List<Doctor> list = doctorService.getAll();
        return list;
    }

    @GetMapping("/doctors/{id}")
    public Doctor getDoctorById(@PathVariable int id) {
        Doctor doctor =  doctorService.getById(id);
        return doctor;
    }

    @PostMapping("doctor")
    @ResponseStatus(HttpStatus.CREATED)
    public void createDoctor(@RequestBody Doctor doctor){
        System.out.println("doctor = " + doctor);
        doctorService.create(doctor);
    }

}
