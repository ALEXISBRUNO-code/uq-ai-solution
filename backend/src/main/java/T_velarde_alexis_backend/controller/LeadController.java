package T_velarde_alexis_backend.controller;

import T_velarde_alexis_backend.entity.Lead;
import T_velarde_alexis_backend.repository.LeadRepository;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/leads")
@RequiredArgsConstructor
public class LeadController {

    private final LeadRepository leadRepo;

    @PostMapping
    public ResponseEntity<Lead> create(@Valid @RequestBody Lead lead) {
        return ResponseEntity.ok(leadRepo.save(lead));
    }

    @GetMapping
    public ResponseEntity<List<Lead>> getAll() {
        return ResponseEntity.ok(leadRepo.findAll());
    }
}