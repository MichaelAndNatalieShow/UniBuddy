package backend.main.java.com.unibuddy.services;

import org.framework.beans.factory.annotation.Autowired;
import org.framework.stereotype.Service;
import com.unibuddy.repositories.ArticulationRepository;
import com.unibuddy.models.Articulation;

import java.util.List;

@Service
public class ArticulationService{

    @Autowired
    private ArticulationRepository articulationRepository;

    public List<Articulation> getAllArticulations(){
        return articulationRepository.findAll();
    }

    public Course getArticulationById(Long articulationId){
        return articulationRepository.findById(articulationId).orElse(null);
    }

    public Course saveArticulation(Articulation articulation){
        return articulationRepository.save(articulation);
    }

    public void deleteArticulation(Long Id){
        return articulationRepository.deleteById(id);
    }
}