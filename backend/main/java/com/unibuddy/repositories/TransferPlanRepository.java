package backend.main.java.com.unibuddy.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.unibuddy.models.TransferPlan;
public interface TransferPlanRepository extends JpaRepository(TransferPlan, Long){
    TransferPlan findByTransferPlanId(String id);
}