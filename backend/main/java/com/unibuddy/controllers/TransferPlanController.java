package backend.main.java.com.unibuddy.controllers;

import org.framework.beans.factory.annotation.Autowired;
import org.framework.web.bind.annotation.*;
import com.unibuddy.services.TransferPlanService;
import com.unibuddy.models.TransferPlan;

import java.util.List;

@RestController
@RequestMapping("/api/transferplans")
@CrossOrigins(origins = "*")
public class TransferPlanController {
    @Autowired
    private TransferPlanService transferPlanService;

    @GetMapping
    public List<TransferPlan> getAllTransferPlans(){
        return transferPlanService.getAllTransferPlans();
    }

    @GetMapping("/{id}")
    public TransferPlan getTranserPlanById(@PathVariable id){
        return transferPlanService.getTransferPlanById(id);
    }

    @PostMapping
    public TransferPlan createTransferPlan(@RequestBody transferPlan){
        return transferPlanService.saveTransferPlan(transferPlan);
    }

    @GetMapping("/{id}")
    public void deleteTransferPlan(@PathVariable id){
        return transferPlanService.deleteTransferPlan(id);
    }
}