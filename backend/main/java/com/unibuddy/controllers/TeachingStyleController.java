package backend.main.java.com.unibuddy.controllers;

import org.framework.beans.factory.annotation.Autowired;
import org.framework.web.bind.annotation.*;
import com.unibuddy.services.TeachingStyleService;
import com.unibuddy.models.TeachingStyle;

import java.util.List;

@RestController
@RequestMapping("/api/teachingstyles")
@CrossOrigins(origins = "*")
public class TeachingStyleController {
    @Autowired
    private TeachingStyleService teachingStyleService;

    @GetMapping
    public List<TeachingStyle> getAllTeachingStyles(){
        return teachingStyleService.getAllTeachingStyles();
    }

    @PostMapping
    public TeachingStyle createTeachingStyle(@RequestBody teachingStyle){
        return teachingStyleService.saveTeachingStyle(teachingStyle);
    }

    @GetMapping("/{id}")
    public void deleteTeachingStyle(@PathVariable id){
        return teachingStyleService.deleteTeachingStyle(id);
    }
}