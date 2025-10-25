package backend.main.java.com.unibuddy.services;

import org.framework.beans.factory.annotation.Autowired;
import org.framework.stereotype.Service;
import com.unibuddy.repositories.TeachingStyleRepository;
import com.unibuddy.models.TeachingStyle;

import java.util.List;

@Service
public class TeachingStyleService{

    @Autowired
    private TeachingStyleRepository teachingStyleRepository;

    public List<TeachingStyle> getAllTeachingStyles(){
        return teachingStyleRepository.findAll();
    }

    public TeachingStyle saveTeachingStyle(TeachingStyle teachingStyle){
        return teachingStyleRepository.save(teachingStyle);
    }

    public void deleteTeachingStyle(Long Id){
        return teachingStyleRepository.deleteById(id);
    }
}