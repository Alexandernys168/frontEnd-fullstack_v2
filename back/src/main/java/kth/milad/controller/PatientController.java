package kth.milad.controller;

import kth.milad.entity.Patient;
import kth.milad.service.IService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/patients")
public class PatientController {
    private IService<Patient> patientService;


    @Autowired
    public PatientController(IService<Patient> patientService) {
        this.patientService = patientService;
    }

    @GetMapping
    public List<Patient> fetchPatientList(){
        System.out.println("get petienst called");
        List<Patient> list = patientService.getAll();
        return list;
    }

    @GetMapping("/{id}")
    public Patient getPatientById(@PathVariable int id) {
        Patient patient =  patientService.getById(id);
       return  patient;
    }

    @PostMapping("/create")
    @ResponseStatus(HttpStatus.CREATED)
    public void createPatient(@RequestBody Patient patient){
        System.out.println("patient = " + patient);
        patientService.create(patient);
    }
}
