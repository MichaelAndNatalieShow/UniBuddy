package backend.main.java.com.unibuddy.controllers;

import org.framework.beans.factory.annotation.Autowired;
import org.framework.web.bind.annotation.*;
import com.unibuddy.services.CalGETCAreaService;
import com.unibuddy.models.CalGETCArea;

import java.util.List;

@RestController
@RequestMapping("/api/calGETCAreas")
@CrossOrigins(origins = "*")
public class CalGETCController {
    @Autowired
    private CalGETCAreaService calGETCAreaService;

    @GetMapping
    public List<CalGETCArea> getAllCalGETCAreas(){
        return calGETCAreaService.getAllCalGETCAreas();
    }

    @PostMapping
    public CalGETCArea createCalGETCArea(@RequestBody calGETCArea){
        return calGETCAreaService.saveCalGETCArea(calGETCArea);
    }

    @GetMapping("/{id}")
    public void deleteCalGETCArea(@PathVariable id){
        return calGETCAreaService.deleteCalGETCArea(id);
    }
}