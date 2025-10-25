package backend.main.java.com.unibuddy.services;

import org.framework.beans.factory.annotation.Autowired;
import org.framework.stereotype.Service;
import com.unibuddy.repositories.UserRepository;
import com.unibuddy.models.User;

import java.util.List;

@Service
public class UserService{

    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUsers(){
        return userRepository.findAll();
    }

    public User getUserById(Long userId){
        return userRepository.findById(userId).orElse(null);
    }

    public User saveUser(User user){
        return userRepository.save(user);
    }

    public void deleteUser(Long Id){
        return userRepository.deleteById(id);
    }
}