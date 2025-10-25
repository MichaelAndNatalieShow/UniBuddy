package backend.main.java.com.unibuddy.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.unibuddy.repositories.StyleProfileRepository;
import com.unibuddy.models.StyleProfile;

import java.util.List;
import java.util.Optional;

@Service
public class StyleProfileService {

    @Autowired
    private StyleProfileRepository styleProfileRepository;

    public List<StyleProfile> getAllStyleProfiles() {
        return styleProfileRepository.findAll();
    }

    public Optional<StyleProfile> getStyleProfileById(Long id) {
        return styleProfileRepository.findById(id);
    }

    public StyleProfile saveStyleProfile(StyleProfile styleProfile) {
        return styleProfileRepository.save(styleProfile);
    }

    public void deleteStyleProfile(Long id) {
        styleProfileRepository.deleteById(id);
    }
}
