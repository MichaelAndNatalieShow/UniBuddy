package backend.main.java.com.unibuddy.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.unibuddy.models.User;
public interface UserRepository extends JpaRepository(User, Long){
    User findByUserId(String id);
}