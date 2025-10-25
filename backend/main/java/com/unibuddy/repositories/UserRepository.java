package backend.main.java.com.unibuddy.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.unibuddy.models.User;
import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByUserId(Long id);

    Optional<User> findByUserName(String userName);

    List<User> findByUserMajor(String userMajor);

    List<User> findByTargetCollege(String targetCollege);

    List<User> findByUserSocial(String userSocial);
}
