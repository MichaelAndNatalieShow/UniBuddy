package com.unibuddy.models;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TransferArticulation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "community_college_id", nullable = false)
    private CommunityCollege communityCollege;

    @ManyToOne
    @JoinColumn(name = "major_articulation_id", nullable = false)
    private MajorArticulation majorArticulation;

    private String majorCode;
    private String degree;
    private boolean tagEligible;
}
