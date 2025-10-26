package com.unibuddy.models;

import jakarta.persistence.*;
import lombok.*;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username;
    private String email;
    private String profilePictureUrl;
    private String socialHandle;

    private String currentMajor;

    @ManyToOne
    @JoinColumn(name = "community_college_id")
    private CommunityCollege currentCollege;

    @ManyToOne
    @JoinColumn(name = "target_university_id")
    private University targetUniversity;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "style_profile_id", referencedColumnName = "id")
    private StyleProfile styleProfile;

    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<TransferPlan> transferPlans;
}
