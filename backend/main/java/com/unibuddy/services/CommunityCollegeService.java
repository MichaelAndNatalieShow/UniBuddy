package backend.main.java.com.unibuddy.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.unibuddy.repositories.CommunityCollegeRepository;
import com.unibuddy.models.CommunityCollege;

import java.util.List;
import java.util.Optional;

@Service
public class CommunityCollegeService {

    @Autowired
    private CommunityCollegeRepository communityCollegeRepository;

    public List<CommunityCollege> getAllCommunityColleges() {
        return communityCollegeRepository.findAll();
    }

    public Optional<CommunityCollege> getCommunityCollegeById(Long communityCollegeId) {
        return communityCollegeRepository.findById(communityCollegeId);
    }

    public CommunityCollege saveCommunityCollege(CommunityCollege communityCollege) {
        return communityCollegeRepository.save(communityCollege);
    }

    public void deleteCommunityCollege(Long id) {
        communityCollegeRepository.deleteById(id);
    }
}
