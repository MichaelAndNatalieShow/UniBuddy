package backend.main.java.com.unibuddy.services;

import org.framework.beans.factory.annotation.Autowired;
import org.framework.stereotype.Service;
import com.unibuddy.repositories.CalGETCAreaRepository;
import com.unibuddy.models.CalGETCArea;

import java.util.List;

@Service
public class CalGETCService{

    @Autowired
    private CalGETCAreaRepository calGETCAreaRepository;

    public List<CalGETCArea> getAllCalGETCAreas(){
        return calGETCRepository.findAll();
    }

    public Course saveCalGETC(CalGETC calGETC){
        return calGETCRepository.save(calGETC);
    }

    public void deleteCalGETCArea(Long Id){
        return calGETCAreaRepository.deleteById(id);
    }
}