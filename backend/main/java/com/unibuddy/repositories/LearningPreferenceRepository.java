package backend.main.java.com.unibuddy.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.unibuddy.models.LearningPreference;
public interface LearningPreferenceRepository extends JpaRepository(LearningPreference, Long){
        }