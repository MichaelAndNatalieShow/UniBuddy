package backend.main.java.com.unibuddy.controllers;

import org.framework.beans.factory.annotation.Autowired;
import org.framework.web.bind.annotation.*;
import com.unibuddy.services.ProfessorService;
import com.unibuddy.models.Professor;

import java.util.List;

@RestController
@RequestMapping("/api/professors")
@CrossOrigins(origins = "*")
public class ProfessorController {
    @Autowired
    private ProfessorService professorService;

    @GetMapping
    public List<Professor> getAllProfessors(){
        return professorService.getAllProfessors();
    }

    @GetMapping("/{id}")
    public Professor getProfessorById(@PathVariable id){
        return professorService.getProfessorById(id);
    }

    @PostMapping
    public Professor createProfessor(@RequestBody professor){
        return professorService.saveProfessor(professor);
    }

    @GetMapping("/{id}")
    public void deleteProfessor(@PathVariable id){
        return professorService.deleteProfessor(id);
    }
}