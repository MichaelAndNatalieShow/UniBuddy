package backend.main.java.com.unibuddy.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.unibuddy.services.MajorService;
import com.unibuddy.models.Major;

import java.util.List;

@RestController
@RequestMapping("/api/majors")
@CrossOrigin(origins = "*")
public class MajorController {

    @Autowired
    private MajorService majorService;

    @GetMapping
    public List<Major> getAllMajors() {
        return majorService.getAllMajors();
    }

    @GetMapping("/{id}")
    public Major getMajorById(@PathVariable Long id) {
        return majorService.getMajorById(id);
    }

    @PostMapping
    public Major createMajor(@RequestBody Major major) {
        return majorService.saveMajor(major);
    }

    @PutMapping("/{id}")
    public Major updateMajor(@PathVariable Long id, @RequestBody Major updatedMajor) {
        Major existing = majorService.getMajorById(id);
        if (existing == null) {
            throw new RuntimeException("Major not found with id " + id);
        }
        updatedMajor.setId(id);
        return majorService.saveMajor(updatedMajor);
    }

    @DeleteMapping("/{id}")
    public void deleteMajor(@PathVariable Long id) {
        majorService.deleteMajor(id);
    }
}
