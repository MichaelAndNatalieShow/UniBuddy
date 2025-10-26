package com.unibuddy.models;

import jakarta.persistence.*;
import lombok.*;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TransferPlan {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "major_articulation_id", nullable = false)
    private MajorArticulation majorArticulation;

    @ManyToOne
    @JoinColumn(name = "community_college_id", nullable = false)
    private CommunityCollege communityCollege;

    @ManyToMany
    @JoinTable(
            name = "transfer_plan_courses",
            joinColumns = @JoinColumn(name = "transfer_plan_id"),
            inverseJoinColumns = @JoinColumn(name = "course_id")
    )

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany
    @JoinColumn(name = "transfer_plan_id")
    private List<Course> courses;

}
