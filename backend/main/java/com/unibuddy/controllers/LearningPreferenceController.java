package backend.main.java.com.unibuddy.controllers;

import org.framework.beans.factory.annotation.Autowired;
import org.framework.web.bind.annotation.*;
import com.unibuddy.services.LearningPreferenceService;
import com.unibuddy.models.LearningPreference;

import java.util.List;

@RestController
@RequestMapping("/api/learningpreferences")
@CrossOrigins(origins = "*")
public class LearningPreferenceController {
    @Autowired
    private LearningPreferenceService learningPreferenceService;

    @GetMapping
    public List<LearningPreference> getAllLearningPreferences(){
        return learningPreferenceService.getAllLearningPreferences();
    }

    @PostMapping
    public LearningPreference createLearningPreference(@RequestBody learningPreference){
        return learningPreferenceService.saveLearningPreference(learningPreference);
    }

    @GetMapping("/{id}")
    public void deleteLearningPreference(@PathVariable id){
        return learningPreferenceService.deleteLearningPreference(id);
    }
}