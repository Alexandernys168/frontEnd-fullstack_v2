package kth.milad.controller;

import kth.milad.entity.Doctor;
import kth.milad.repository.DoctorRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/doctors")
public class DoctorController {

    private final DoctorRepository doctorRepository;

    public DoctorController(DoctorRepository doctorRepository) {
        this.doctorRepository = doctorRepository;
    }

    @GetMapping
    public List<Doctor> findAllDoctors() {
        return doctorRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Doctor> getDoctorById(@PathVariable int id) {
        return doctorRepository.findByDoctorId(id);
    }
    @GetMapping("/name/{name}")
    public Optional<Doctor> getDoctorByName(@PathVariable String name) {
        return doctorRepository.findByName(name);
    }

    @PostMapping("/create")
    public ResponseEntity<Doctor> createDoctor(@RequestBody Doctor doctor) {
        // Validate the Doctor, for example, check if required fields are present
        if (doctor.getName() == null ) {
            return ResponseEntity.badRequest().build();
        }


        // Additional business logic if needed

        // Save the Doctor to the repository
        Doctor savedDoctor = doctorRepository.save(doctor);

        // You might want to return the saved Doctor or a confirmation
        return ResponseEntity.ok(savedDoctor);
    }
}
