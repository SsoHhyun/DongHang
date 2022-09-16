package com.team.pj.donghang.domain.entity;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.util.LinkedList;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Entity
@Builder
@ToString
@Table(name="trip_mission")
public class TripMission implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "trip_mission_no")
    private Long tripMissionNo;

    @ManyToOne
    @JoinColumn(name = "trip_no")
    private Trip trip;

    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL, orphanRemoval = true)
    @Column(name = "mission_no")
    private List<Mission> mission = new LinkedList<>();

    @OneToOne
    @JoinColumn(name = "user_badge_no")
    private UserBadge userBadge;


}


