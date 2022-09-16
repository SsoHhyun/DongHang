package com.team.pj.donghang.entity;


import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class TripPlace {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "trip_place_no")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "common_no")
    private PlaceCommon common;
}
