package backend.main.java.com.unibuddy.services;

import org.framework.beans.factory.annotation.Autowired;
import org.framework.stereotype.Service;
import com.unibuddy.repositories.UniversityRepository;
import com.unibuddy.models.University;

import java.util.List;

@Service
public class UniversityService{

    @Autowired
    private UniversityRepository universityRepository;

    public List<University> getAllUniversities(){
        return universityRepository.findAll();
    }

    public Course getUniversityById(Long universityId){
        return universityRepository.findById(universityId).orElse(null);
    }

    public University saveUniversity(University university){
        return universityRepository.save(university);
    }

    public void deleteUniversity(LongId){
        return universityRepository.deleteById(id);
    }
}