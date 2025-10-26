package com.unibuddy.controllers;

//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//import com.unibuddy.services.UniversityService;
//import com.unibuddy.models.University;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/universities")
//@CrossOrigin(origins = "*")
public class UniversityController {
//
//    @Autowired
//    private UniversityService universityService;
//
//    @GetMapping
//    public List<University> getAllUniversities() {
//        return universityService.getAllUniversities();
//    }
//
//    @GetMapping("/{id}")
//    public University getUniversityById(@PathVariable Long id) {
//        return universityService.getUniversityById(id).orElseThrow(() -> new RuntimeException("University not found"));
//    }
//
//    @PostMapping
//    public University createUniversity(@RequestBody University university) {
//        return universityService.saveUniversity(university);
//    }
//
//    @PutMapping("/{id}")
//    public University updateUniversity(@PathVariable Long id, @RequestBody University updatedUniversity) {
//        University existing = universityService.getUniversityById(id).orElseThrow(() -> new RuntimeException("University not found"));
//        updatedUniversity.setId(id);
//        return universityService.saveUniversity(updatedUniversity);
//    }
//
//    @DeleteMapping("/{id}")
//    public void deleteUniversity(@PathVariable Long id) {
//        universityService.deleteUniversity(id);
//    }
}
