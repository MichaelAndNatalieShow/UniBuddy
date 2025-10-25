package backend.main.java.com.unibuddy.controllers;

import org.framework.beans.factory.annotation.Autowired;
import org.framework.web.bind.annotation.*;
import com.unibuddy.services.UserService;
import com.unibuddy.models.User;

import java.util.List;

@RestController
@RequestMapping("/api/users")
@CrossOrigins(origins = "*")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping
    public List<User> getAllUsers(){
        return userService.getAllUsers();
    }

    @GetMapping("/{id}")
    public User getUserById(@PathVariable id){
        return userService.getUserById(id);
    }

    @PostMapping
    public User createUser(@RequestBody user){
        return userService.saveUser(user);
    }

    @GetMapping("/{id}")
    public void deleteUser(@PathVariable id){
        return userService.deleteUser(id);
    }
}