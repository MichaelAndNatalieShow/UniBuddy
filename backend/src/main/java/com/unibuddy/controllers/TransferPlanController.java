package com.unibuddy.controllers;

//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.*;
//import com.unibuddy.services.TransferPlanService;
//import com.unibuddy.models.TransferPlan;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/api/transferplans")
//@CrossOrigin(origins = "*")
public class TransferPlanController {
//
//    @Autowired
//    private TransferPlanService transferPlanService;
//
//    @GetMapping
//    public List<TransferPlan> getAllTransferPlans() {
//        return transferPlanService.getAllTransferPlans();
//    }
//
//    @GetMapping("/{id}")
//    public TransferPlan getTransferPlanById(@PathVariable Long id) {
//        return transferPlanService.getTransferPlanById(id).orElseThrow(() -> new RuntimeException("Plan not found"));
//    }
//
//    @PostMapping
//    public TransferPlan createTransferPlan(@RequestBody TransferPlan transferPlan) {
//        return transferPlanService.saveTransferPlan(transferPlan);
//    }
//
//    @PutMapping("/{id}")
//    public TransferPlan updateTransferPlan(@PathVariable Long id, @RequestBody TransferPlan updatedTransferPlan) {
//        TransferPlan existing = transferPlanService.getTransferPlanById(id).orElseThrow(() -> new RuntimeException("Plan not found"));
//        updatedTransferPlan.setId(id);
//        return transferPlanService.saveTransferPlan(updatedTransferPlan);
//    }
//
//    @DeleteMapping("/{id}")
//    public void deleteTransferPlan(@PathVariable Long id) {
//        transferPlanService.deleteTransferPlan(id);
//    }
}
