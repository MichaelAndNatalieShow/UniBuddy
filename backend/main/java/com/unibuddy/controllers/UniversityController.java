package backend.main.java.com.unibuddy.controllers;

import org.framework.beans.factory.annotation.Autowired;
import org.framework.web.bind.annotation.*;
import com.unibuddy.services.UniversityService;
import com.unibuddy.models.University;

import java.util.List;

@RestController
@RequestMapping("/api/universities")
@CrossOrigins(origins = "*")
public class UniversityController {
    @Autowired
    private UniversityService universityService;

    @GetMapping
    public List<University> getAllUniversities(){
        return universityService.getAllUniversities();
    }

    @GetMapping("/{id}")
    public University getUniversityById(@PathVariable id){
        return universityService.getUniversityById(id);
    }

    @PostMapping
    public University createUniversity(@RequestBody university){
        return universityService.saveUniversity(university);
    }

    @GetMapping("/{id}")
    public void deleteUniversity(@PathVariable id){
        return universityService.deleteUniversity(id);
    }
}