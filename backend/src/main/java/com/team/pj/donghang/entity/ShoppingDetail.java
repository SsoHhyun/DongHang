package com.team.pj.donghang.entity;

import javax.persistence.*;

/**
 * common _no : a뭐뭐다?
 */
public class ShoppingDetail {
    @Id
    @OneToOne(cascade = CascadeType.ALL)
    @MapsId
    @JoinColumn(name = "common_no")
    private PlaceCommon common;

    @Column(name="chk_babycarriage")
    private String checkBabyCarriage;

    @Column(name="chk_credit_card")
    private String checkCreditCard;

    @Column(name="chk_pet")
    private String checkPet;

    @Column(name="culture_center")
    private String cultureCenter;

    @Column(name="fair_day")
    private String fairDay;

    @Column(name = "info_center")
    private String infoCenter;


}
