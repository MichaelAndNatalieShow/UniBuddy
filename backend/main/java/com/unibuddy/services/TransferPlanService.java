package backend.main.java.com.unibuddy.services;

import org.framework.beans.factory.annotation.Autowired;
import org.framework.stereotype.Service;
import com.unibuddy.repositories.TransferPlanRepository;
import com.unibuddy.models.TransferPlan;

import java.util.List;

@Service
public class TransferPlanService{

    @Autowired
    private TransferPlanRepository transferPlanRepository;

    public List<TransferPlan> getAllCourses(){
        return transferPlanRepository.findAll();
    }

    public TransferPlan getTransferPlanById(Long transferPlanId){
        return transferPlanRepository.findById(transferPlanId).orElse(null);
    }

    public TransferPlan saveTransferPlan(TransferPlan transferPlan){
        return transferPlanRepository.save(transferPlan);
    }

    public void deleteTransferPlan(LongId){
        return transferPlanRepository.deleteById(id);
    }
}