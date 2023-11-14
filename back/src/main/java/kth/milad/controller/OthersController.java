package kth.milad.controller;

import kth.milad.entity.Others;
import kth.milad.repository.OthersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/others")
public class OthersController {

    private final OthersRepository othersRepository;


    public OthersController(OthersRepository othersRepository) {
        this.othersRepository = othersRepository;
    }

    @GetMapping
    public List<Others> findAll() {
        return othersRepository.findAll();
    }

    @GetMapping("/{id}")
    public Optional<Others> getOthersById(@PathVariable int id) {
        return othersRepository.findByOthersId(id);
    }
    @GetMapping("/name/{name}")
    public Optional<Others> getOthersByName(@PathVariable String name) {
        return othersRepository.findByName(name);
    }

    @PostMapping("/create")
    public ResponseEntity<Others> createOthers(@RequestBody Others others) {
        // Validate the Others, for example, check if required fields are present
        if (others.getName() == null) {
            return ResponseEntity.badRequest().build();
        }

        // Additional business logic if needed

        // Save the Others to the repository
        Others savedOthers = othersRepository.save(others);

        // You might want to return the saved Others or a confirmation
        return ResponseEntity.ok(savedOthers);
    }
}