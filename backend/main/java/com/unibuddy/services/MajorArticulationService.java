package backend.main.java.com.unibuddy.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.unibuddy.repositories.MajorArticulationRepository;
import com.unibuddy.models.MajorArticulation;

import java.util.List;
import java.util.Optional;

@Service
public class MajorArticulationService {

    @Autowired
    private MajorArticulationRepository majorArticulationRepository;

    public List<MajorArticulation> getAllMajors() {
        return majorArticulationRepository.findAll();
    }

    public Optional<MajorArticulation> getMajorById(Long id) {
        return majorArticulationRepository.findById(id);
    }

    public MajorArticulation saveMajor(MajorArticulation majorArticulation) {
        return majorArticulationRepository.save(major);
    }

    public void deleteMajor(Long id) {
        majorArticulationRepository.deleteById(id);
    }
}
