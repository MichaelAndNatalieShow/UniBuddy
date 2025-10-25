package backend.main.java.com.unibuddy.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.unibuddy.services.CalGETCService;
import com.unibuddy.models.CalGETCArea;

import java.util.List;

@RestController
@RequestMapping("/api/calgetc")
@CrossOrigin(origins = "*")
public class CalGETCController {

    @Autowired
    private CalGETCService calGETCService;

    @GetMapping
    public List<CalGETCArea> getAllCalGETCAreas() {
        return calGETCService.getAllCalGETCAreas();
    }

    @GetMapping("/{id}")
    public CalGETCArea getCalGETCAreaById(@PathVariable Long id) {
        return calGETCService.getCalGETCAreaById(id);
    }

    @PostMapping
    public CalGETCArea createCalGETCArea(@RequestBody CalGETCArea calGETCArea) {
        return calGETCService.saveCalGETCArea(calGETCArea);
    }

    @PutMapping("/{id}")
    public CalGETCArea updateCalGETCArea(@PathVariable Long id, @RequestBody CalGETCArea calGETCArea) {
        CalGETCArea existing = calGETCService.getCalGETCAreaById(id);
        if (existing == null) {
            throw new RuntimeException("CalGETC Area not found with id " + id);
        }
        calGETCArea.setId(id);
        return calGETCService.saveCalGETCArea(calGETCArea);
    }

    @DeleteMapping("/{id}")
    public void deleteCalGETCArea(@PathVariable Long id) {
        calGETCService.deleteCalGETCArea(id);
    }
}
