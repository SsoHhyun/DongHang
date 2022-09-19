package com.team.pj.donghang.domain.entity;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Entity
@Builder
@ToString
@Table(name="visited")
// 지역 코드 관련 의논 후 수정 예정
public class Visited {
    @Id
    private Long id;
    @OneToOne(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @MapsId
    @JoinColumn(name = "user_no")
    private User user;

    @Column(name = "seoul")
    private Long Seoul;

    @Column(name = "kyeonggi")
    private Long Kyeonggi;

    @Column(name = "daejeon")
    private Long Daejeon;

    @Column(name = "busan")
    private Long Busan;

    @Column(name = "ulsan")
    private Long Ulsan;

    @Column(name = "daegu")
    private Long Daegu;

    @Column(name = "gwangju")
    private Long Gwangju;

    @Column(name = "incheon")
    private Long Incheon;

    @Column(name = "jeju")
    private Long Jeju;

    @Column(name = "kyeong_buk")
    private Long Kyeong_buk;

    @Column(name = "kyeong_nam")
    private Long kyeong_nam;

    @Column(name = "jeon_nam")
    private Long Jeon_nam;

    @Column(name = "jeon_buk")
    private Long Jeon_buk;

    @Column(name = "kangwon")
    private Long Kangwon;

    @Column(name = "chung_buk")
    private Long Chung_buk;

    @Column(name = "chung_nam")
    private Long Chung_nam;



}
