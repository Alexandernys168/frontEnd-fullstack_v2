package kth.milad.controller;

import kth.milad.ViewModels.UserVm;
import kth.milad.entity.Doctor;
import kth.milad.entity.Others;
import kth.milad.entity.Patient;
import kth.milad.service.IService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

@RestController
@CrossOrigin
public class UserController {

    @Autowired
    private IService<Doctor> doctorService;
    @Autowired
    private IService<Others> othersService;
    @Autowired
    private IService<Patient> patientService;


    @PostMapping("/register")
    public void RegisterUser(@RequestBody UserVm userVm){
        switch (userVm.getUserType()){
            case "DOCTOR": doctorService.create(new Doctor(userVm.getId(), userVm.getName(), userVm.getEmail(), userVm.getPassword()));
                System.out.println(userVm.getEmail());break;
            case "OTHERS": othersService.create(new Others(userVm.getId(), userVm.getName(), userVm.getEmail(), userVm.getPassword()));break;
            case "PATIENT": patientService.create(new Patient(userVm.getId(), userVm.getName(), userVm.getEmail(), userVm.getPassword()));break;
        }
        //todo return userVm
    }

    @PostMapping("/login")
    public UserVm loggInUser(@RequestBody UserVm userVm){
        List<UserVm> userVms = new ArrayList<>();
        List<Doctor> doctors = doctorService.getAll();
        for (Doctor d:doctors) {
            userVms.add(new UserVm(d.getId(),d.getName(),"DOCTOR",d.getEmail(),d.getPassword()));
        }

        List<Others> others = othersService.getAll();
        for (Others o:others) {
            userVms.add(new UserVm(o.getId(),o.getName(),"OTHERS",o.getEmail(),o.getPassword()));
        }


        for (UserVm u:userVms) {
            if (u.getEmail() == null || userVm.getEmail() == null) {
                UserVm errorNoUser = new UserVm();
                errorNoUser.setName("NO USER FOUND");
                continue;
            }
            if (u.getEmail().equals(userVm.getEmail()) && u.getPassword().equals(userVm.getPassword())){
                return u;
            }
        }
        UserVm errorNoUser = new UserVm();
        errorNoUser.setName("NO USER FOUND");
        return errorNoUser;

    }
    @GetMapping("/users")
    public List<UserVm> getAllUsers(){
        List<UserVm> userVms = new ArrayList<>();
        List<Doctor> doctors = doctorService.getAll();
        for (Doctor d:doctors) {
            userVms.add(new UserVm(d.getId(),d.getName(),"DOCTOR",d.getEmail(),"HIDDEN"));
        }

        List<Others> others = othersService.getAll();
        for (Others o:others) {
            userVms.add(new UserVm(o.getId(),o.getName(),"OTHERS",o.getEmail(),"HIDDEN"));
        }

        List<Patient> patients = patientService.getAll();
        for (Patient p:patients) {
            userVms.add(new UserVm(p.getId(), p.getName(), "PATIENT", p.getEmail(),"HIDDEN"));
        }
        System.out.println("userVms = " + userVms);
        return userVms;
    }
}
