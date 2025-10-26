package com.unibuddy.controllers;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//import com.unibuddy.services.StyleProfileService;
//import com.unibuddy.models.StyleProfile;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/styleprofiles")
//@CrossOrigin(origins = "*")
public class StyleProfileController {
//
//    @Autowired
//    private StyleProfileService styleProfileService;
//
//    @GetMapping
//    public List<StyleProfile> getAllStyleProfiles() {
//        return styleProfileService.getAllStyleProfiles();
//    }
//
//    @GetMapping("/{id}")
//    public StyleProfile getStyleProfileById(@PathVariable Long id) {
//        return styleProfileService.getStyleProfileById(id).orElseThrow(() -> new RuntimeException("Style profile not found"));
//    }
//
//    @PostMapping
//    public StyleProfile createStyleProfile(@RequestBody StyleProfile styleProfile) {
//        return styleProfileService.saveStyleProfile(styleProfile);
//    }
//
//    @PutMapping("/{id}")
//    public StyleProfile updateStyleProfile(@PathVariable Long id, @RequestBody StyleProfile updatedProfile) {
//        StyleProfile existing = styleProfileService.getStyleProfileById(id).orElseThrow(() -> new RuntimeException("Style profile not found"));
//        updatedProfile.setId(id);
//        return styleProfileService.saveStyleProfile(updatedProfile);
//    }
//
//    @DeleteMapping("/{id}")
//    public void deleteStyleProfile(@PathVariable Long id) {
//        styleProfileService.deleteStyleProfile(id);
//    }
}
