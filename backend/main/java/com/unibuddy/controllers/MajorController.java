package backend.main.java.com.unibuddy.controllers;

import org.framework.beans.factory.annotation.Autowired;
import org.framework.web.bind.annotation.*;
import com.unibuddy.services.MajorService;
import com.unibuddy.models.Major;

import java.util.List;

@RestController
@RequestMapping("/api/majors")
@CrossOrigins(origins = "*")
public class MajorController {
    @Autowired
    private MajorService majorService;

    @GetMapping
    public List<Major> getAllMajors(){
        return majorService.getAllMajors();
    }

    @PostMapping
    public Major createMajor(@RequestBody major){
        return majorService.saveMajor(major);
    }

    @GetMapping("/{id}")
    public void deleteMajor(@PathVariable id){
        return majorService.deleteMajor(id);
    }
}