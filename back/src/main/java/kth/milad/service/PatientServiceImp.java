package kth.milad.service;

import kth.milad.entity.Patient;
import kth.milad.repository.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PatientServiceImp implements IService<Patient>{

    @Autowired
    private PatientRepository patientRepository;

    @Override
    public List<Patient> getAll() {
        List<Patient> list =  patientRepository.findAll();
        System.out.println("patientList = in service imp " + list);
        return list;
    }

    @Override
    public Patient getById(int entity) {
        return patientRepository.findById(entity).get();
    }

    public Patient create(Patient entity){
        System.out.println("in service");
        return patientRepository.save(entity);
    }
}
