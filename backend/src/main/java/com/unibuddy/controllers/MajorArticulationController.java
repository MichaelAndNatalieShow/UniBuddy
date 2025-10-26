package com.unibuddy.controllers;

//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//import com.unibuddy.services.MajorArticulationService;
//import com.unibuddy.models.MajorArticulation;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/majors")
//@CrossOrigin(origins = "*")
public class MajorArticulationController {
//
//    @Autowired
//    private MajorArticulationService majorArticulationService;
//
//    @GetMapping
//    public List<MajorArticulation> getAllMajors() {
//        return majorArticulationService.getAllMajors();
//    }
//
//    @GetMapping("/{id}")
//    public MajorArticulation getMajorById(@PathVariable Long id) {
//        return majorArticulationService.getMajorById(id).orElseThrow(() -> new RuntimeException("Major not found"));
//    }
//
//    @PostMapping
//    public MajorArticulation createMajor(@RequestBody MajorArticulation majorArticulation) {
//        return majorArticulationService.saveMajor(majorArticulation);
//    }
//
//    @PutMapping("/{id}")
//    public MajorArticulation updateMajor(@PathVariable Long id, @RequestBody MajorArticulation updatedMajor) {
//        MajorArticulation existing = majorArticulationService.getMajorById(id).orElseThrow(() -> new RuntimeException("Major not found"));
//        updatedMajor.setId(id);
//        return majorArticulationService.saveMajor(updatedMajor);
//    }
//
//    @DeleteMapping("/{id}")
//    public void deleteMajor(@PathVariable Long id) {
//        majorArticulationService.deleteMajor(id);
//    }
}
