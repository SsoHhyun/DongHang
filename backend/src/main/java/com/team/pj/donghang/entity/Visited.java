package com.team.pj.donghang.entity;

import lombok.*;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Entity
@Builder
@ToString
// 지역 코드 관련 의논 후 수정 예정
public class Visited {
    @Id
    @OneToOne(cascade = CascadeType.ALL)
    @MapsId
    @JoinColumn(name = "user_no")
    private User user;

    private Long Seoul;

    private Long Busan;
    private Long Daegu;
    private Long Gwangju;
    private Long Incheon;
    private Long Daejeon;
    private Long Ulsan;
    private Long Gyeonggi;
    private Long Gangwon;
    private Long Chungcheongnam_do;
    private Long Chungcheongbuk_do;
    private Long Jeollanam_do;
    private Long Jeollabuk_do;
    private Long Gyeongsangnam_do;
    private Long Gyeongsangbuk_do;
    private Long Jeju;
}
