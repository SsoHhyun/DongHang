package com.team.pj.donghang.entity;

import lombok.*;

import javax.persistence.*;
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
public class TripMission {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "trip_mission_no")
    private Long tripMissionNo;

    @ManyToOne
    @Column(name = "trip_no")
    private Trip trip;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "trip_mission", cascade = CascadeType.ALL, orphanRemoval = true)
    @Column(name = "mission_no")
    private List<Mission> missions = new LinkedList<>();

    @OneToOne
    @JoinColumn(name = "user_badge_no")
    private UserBadge userBadge;


}


