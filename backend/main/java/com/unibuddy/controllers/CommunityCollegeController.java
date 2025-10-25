package backend.main.java.com.unibuddy.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.unibuddy.services.CommunityCollegeService;
import com.unibuddy.models.CommunityCollege;

import java.util.List;

@RestController
@RequestMapping("/api/communitycolleges")
@CrossOrigin(origins = "*")
public class CommunityCollegeController {

    @Autowired
    private CommunityCollegeService communityCollegeService;

    @GetMapping
    public List<CommunityCollege> getAllCommunityColleges() {
        return communityCollegeService.getAllCommunityColleges();
    }

    @GetMapping("/{id}")
    public CommunityCollege getCommunityCollegeById(@PathVariable Long id) {
        return communityCollegeService.getCommunityCollegeById(id);
    }

    @PostMapping
    public CommunityCollege createCommunityCollege(@RequestBody CommunityCollege communityCollege) {
        return communityCollegeService.saveCommunityCollege(communityCollege);
    }

    @PutMapping("/{id}")
    public CommunityCollege updateCommunityCollege(@PathVariable Long id, @RequestBody CommunityCollege updatedCollege) {
        CommunityCollege existing = communityCollegeService.getCommunityCollegeById(id);
        if (existing == null) {
            throw new RuntimeException("Community college not found with id " + id);
        }
        updatedCollege.setId(id);
        return communityCollegeService.saveCommunityCollege(updatedCollege);
    }

    @DeleteMapping("/{id}")
    public void deleteCommunityCollege(@PathVariable Long id) {
        communityCollegeService.deleteCommunityCollege(id);
    }
}
