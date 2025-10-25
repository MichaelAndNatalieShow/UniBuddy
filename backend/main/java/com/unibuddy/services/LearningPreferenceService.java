package backend.main.java.com.unibuddy.services;

import org.framework.beans.factory.annotation.Autowired;
import org.framework.stereotype.Service;
import com.unibuddy.repositories.LearningPreferenceRepository;
import com.unibuddy.models.LearningPreference;

import java.util.List;

@Service
public class LearningPreferenceService{

    @Autowired
    private LearningPreferenceRepository learningPreferenceRepository;

    public List<LearningPreference> getAllLearningPreference(){
        return learningPreferenceRepository.findAll();
    }

    public Course saveLearningPreference(LearningPrefernce learningPreference){
        return learningPreferenceRepository.save(learningPreference);
    }

    public void deleteLearningPreference(Long Id){
        return learningPreferenceRepository.deleteById(id);
    }
}