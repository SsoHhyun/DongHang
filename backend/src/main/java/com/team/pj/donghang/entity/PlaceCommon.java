package com.team.pj.donghang.entity;

import lombok.*;


import javax.persistence.*;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class PlaceCommon {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="common_no")
    private Long id;

    @Column(name="content_id")
    private String contentId;

    @Column(name="content_type_id")
    private String contentTypeId;

    private String tel;

    private String title;

    @Column(name="first_image1")
    private String firstImage1;

    @Column(name="first_image2")
    private String firstImage2;

    private String cat1;
    private String cat2;
    private String cat3;
    private String addr1;
    private String addr2;
    private String mapx;
    private String mapy;
    private String mlevel;
    private String areacode;

//    @OneToOne(mappedBy = "common",cascade = CascadeType.ALL,fetch = FetchType.LAZY)
//    ShoppingDetail shoppingDetail;



}
