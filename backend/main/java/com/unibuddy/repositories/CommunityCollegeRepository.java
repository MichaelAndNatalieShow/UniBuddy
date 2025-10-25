package backend.main.java.com.unibuddy.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.unibuddy.models.CommunityCollege;
public interface CommunityCollegeRepository extends JpaRepository(CommunityCollege, Long){
    CommunityCollege findByCommunityCollegeId(String id);
}