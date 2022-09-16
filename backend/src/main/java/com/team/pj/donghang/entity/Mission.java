package com.team.pj.donghang.entity;
import javax.persistence.*;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Entity
@Builder
@ToString
public class Mission {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "mission_no")
    private Long missionNo;

    @ManyToOne
    @JoinColumn(name = "user_no")
    private User user;

    private String content;
    private String season;

    @Column(name = "mission_category_no")
    private Long missionCategoryNo;
}
