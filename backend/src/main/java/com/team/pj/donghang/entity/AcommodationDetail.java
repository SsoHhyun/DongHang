package com.team.pj.donghang.entity;

import lombok.*;

import javax.persistence.*;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class AcommodationDetail {
    @Id
    @OneToOne(cascade = CascadeType.ALL)
    @MapsId
    @JoinColumn(name = "common_no")
    private PlaceCommon common;

    @Column(name = "size")
    private String size;

    @Column(name = "count")
    private String count;

    @Column(name = "base_count")
    private String baseCount;

    @Column(name = "max_count")
    private String maxCount;

    @Column(name = "bath_facility")
    private String bathFacility;

    @Column(name = "bath")
    private String bath;

    @Column(name = "home_theater")
    private String homeTheater;

    @Column(name = "air_condition")
    private String airCondition;

    @Column(name = "tv")
    private String tv;

    @Column(name = "pc")
    private String pc;

    @Column(name = "cable")
    private String cable;

    @Column(name = "internet")
    private String internet;

    @Column(name = "refrigerator")
    private String refrigerator;

    @Column(name = "toiletries")
    private String toiletries;

    @Column(name = "sofa")
    private String sofa;

    @Column(name = "cook")
    private String cook;

    @Column(name = "table")
    private String table;

    @Column(name = "hairdryer")
    private String hairdryer;

    @Column(name = "sauna")
    private String sauna;

    @Column(name = "accom_count")
    private String accomCount;

    @Column(name = "chk_cooking")
    private String chkCooking;

    @Column(name = "pickup")
    private String pickup;

    @Column(name = "scale")
    private String scale;

    @Column(name = "barbecue")
    private String barbecue;

    @Column(name = "beauty")
    private String beauty;

    @Column(name = "beverage")
    private String  beverage;

    @Column(name = "campfire")
    private String campfire;

    @Column(name = "fitness")
    private String fitness;

    @Column(name = "karaoke")
    private String karaoke;

    @Column(name = "public_bath")
    private String publicBath;

    @Column(name = "reservation")
    private String reservation;

    @Column(name = "reservation_url")
    private String reservationURL;

    @Column(name = "parking")
    private String parking;


}
