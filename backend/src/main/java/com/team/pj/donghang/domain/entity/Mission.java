package com.team.pj.donghang.domain.entity;
import javax.persistence.*;

import lombok.*;

import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Entity
@Builder
@ToString
@Table(name="mission")

public class Mission implements Serializable {
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
