package backend.main.java.com.unibuddy.services;

import org.framework.beans.factory.annotation.Autowired;
import org.framework.stereotype.Service;
import com.unibuddy.repositories.MajorRepository;
import com.unibuddy.models.Major;

import java.util.List;

@Service
public class MajorService{

    @Autowired
    private MajorRepository majorRepository;

    public List<Major> getAllMajors(){
        return majorRepository.findAll();
    }

    public Major saveMajor(Major major){
        return majorRepository.save(major);
    }

    public void deleteMajor(Long Id){
        return majorRepository.deleteById(id);
    }
}