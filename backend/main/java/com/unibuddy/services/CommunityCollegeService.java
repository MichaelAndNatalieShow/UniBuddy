package backend.main.java.com.unibuddy.services;

import org.framework.beans.factory.annotation.Autowired;
import org.framework.stereotype.Service;
import com.unibuddy.repositories.CommunityCollegeRepository;
import com.unibuddy.models.CommunityCollege;

import java.util.List;

@Service
public class CommunityCollegeService{

    @Autowired
    private CommunityCollegeRepository communityCollegeRepository;

    public List<CommunityCollege> getAllCommunityColleges(){
        return communityCollegeRepository.findAll();
    }

    public Course getCommunityCollegeById(Long communityCollegeId){
        return communityCollegeRepository.findById(communityCollegeId).orElse(null);
    }

    public Course saveCommunityCollege(CommunityCollege communityCollege){
        return communityCollegeRepository.save(communityCollege);
    }

    public void deleteCommunityCollege(Long Id){
        return communityCollegeRepository.deleteById(id);
    }
}