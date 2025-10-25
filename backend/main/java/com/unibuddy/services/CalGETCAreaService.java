package backend.main.java.com.unibuddy.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.unibuddy.repositories.CalGETCAreaRepository;
import com.unibuddy.models.CalGETCArea;

import java.util.List;
import java.util.Optional;

@Service
public class CalGETCAreaService {

    @Autowired
    private CalGETCAreaRepository calGETCAreaRepository;

    public List<CalGETCArea> getAllCalGETCAreas() {
        return calGETCAreaRepository.findAll();
    }

    public Optional<CalGETCArea> getCalGETCAreaById(Long id) {
        return calGETCAreaRepository.findById(id);
    }

    public CalGETCArea saveCalGETCArea(CalGETCArea calGETCArea) {
        return calGETCAreaRepository.save(calGETCArea);
    }

    public void deleteCalGETCArea(Long id) {
        calGETCAreaRepository.deleteById(id);
    }
}
