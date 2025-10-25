package backend.main.java.com.unibuddy.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.unibuddy.services.ProfessorService;
import com.unibuddy.models.Professor;

import java.util.List;

@RestController
@RequestMapping("/api/professors")
@CrossOrigin(origins = "*")
public class ProfessorController {

    @Autowired
    private ProfessorService professorService;

    @GetMapping
    public List<Professor> getAllProfessors() {
        return professorService.getAllProfessors();
    }

    @GetMapping("/{id}")
    public Professor getProfessorById(@PathVariable Long id) {
        return professorService.getProfessorById(id);
    }

    @PostMapping
    public Professor createProfessor(@RequestBody Professor professor) {
        return professorService.saveProfessor(professor);
    }

    @PutMapping("/{id}")
    public Professor updateProfessor(@PathVariable Long id, @RequestBody Professor updatedProfessor) {
        Professor existing = professorService.getProfessorById(id);
        if (existing == null) {
            throw new RuntimeException("Professor not found with id " + id);
        }
        updatedProfessor.setId(id);
        return professorService.saveProfessor(updatedProfessor);
    }

    @DeleteMapping("/{id}")
    public void deleteProfessor(@PathVariable Long id) {
        professorService.deleteProfessor(id);
    }
}
