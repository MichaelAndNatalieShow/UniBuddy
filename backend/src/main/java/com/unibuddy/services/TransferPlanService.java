package com.unibuddy.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.unibuddy.repositories.TransferPlanRepository;
import com.unibuddy.models.TransferPlan;

import java.util.List;
import java.util.Optional;

@Service
public class TransferPlanService {

    @Autowired
    private TransferPlanRepository transferPlanRepository;

    public List<TransferPlan> getAllTransferPlans() {
        return transferPlanRepository.findAll();
    }

    public Optional<TransferPlan> getTransferPlanById(Long transferPlanId) {
        return transferPlanRepository.findById(transferPlanId);
    }

    public TransferPlan saveTransferPlan(TransferPlan transferPlan) {
        return transferPlanRepository.save(transferPlan);
    }

    public void deleteTransferPlan(Long id) {
        transferPlanRepository.deleteById(id);
    }
}
