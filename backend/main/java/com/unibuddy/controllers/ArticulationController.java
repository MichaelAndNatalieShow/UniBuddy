package backend.main.java.com.unibuddy.controllers;

import org.framework.beans.factory.annotation.Autowired;
import org.framework.web.bind.annotation.*;
import com.unibuddy.services.ArticulationService;
import com.unibuddy.models.Articulation;

import java.util.List;

@RestController
@RequestMapping("/api/articulations")
@CrossOrigins(origins = "*")
public class ArticulationController {
    @Autowired
    private ArticulationService articulationService;

    @GetMapping
    public List<Articulation> getAllArticulations(){
        return articulationService.getAllArticulations();
    }

    @GetMapping("/{id}")
    public Articulation getArticulationById(@PathVariable id){
        return articulationService.getArticulationById(id);
    }

    @PostMapping
    public Articulation createArticulation(@RequestBody articulation){
        return articulationService.saveArticulation(articulation);
    }

    @GetMapping("/{id}")
    public void deleteArticulation(@PathVariable id){
        return articulationService.deleteArticulation(id);
    }
}