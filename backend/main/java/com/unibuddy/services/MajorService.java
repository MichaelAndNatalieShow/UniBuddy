package backend.main.java.com.unibuddy.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.unibuddy.repositories.MajorRepository;
import com.unibuddy.models.Major;

import java.util.List;
import java.util.Optional;

@Service
public class MajorService {

    @Autowired
    private MajorRepository majorRepository;

    public List<Major> getAllMajors() {
        return majorRepository.findAll();
    }

    public Optional<Major> getMajorById(Long id) {
        return majorRepository.findById(id);
    }

    public Major saveMajor(Major major) {
        return majorRepository.save(major);
    }

    public void deleteMajor(Long id) {
        majorRepository.deleteById(id);
    }
}
