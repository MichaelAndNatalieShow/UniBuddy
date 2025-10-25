package backend.main.java.com.unibuddy.controllers;

import org.framework.beans.factory.annotation.Autowired;
import org.framework.web.bind.annotation.*;
import com.unibuddy.services.CommunityCollegeService;
import com.unibuddy.models.CommunityCollege;

import java.util.List;

@RestController
@RequestMapping("/api/communitycolleges")
@CrossOrigins(origins = "*")
public class CommunityCollegeController {
    @Autowired
    private CommunityCollegeService communityCollegeService;

    @GetMapping
    public List<CommunityCollege> getAllCommunityColleges(){
        return communityCollegeService.getAllCommunityColleges();
    }

    @GetMapping("/{id}")
    public CommunityCollege getCommunityCollegeById(@PathVariable id){
        return communityCollegeService.getCommunityCollegeById(id);
    }

    @PostMapping
    public CommunityCollege createCommunityCollege(@RequestBody communityCollege){
        return communityCollegeService.saveCommunityCollege(communityCollege);
    }

    @GetMapping("/{id}")
    public void deleteCommunityCollege(@PathVariable id){
        return communityCollegeService.deleteCommunityCollege(id);
    }
}