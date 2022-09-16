package com.team.pj.donghang.entity;

import javax.persistence.*;

import com.sun.istack.NotNull;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Entity
@Builder
public class Badge {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "badge_no")
    private Long badgeNo;

    @NotNull
    @Column(unique = true)
    private String description;

    @NotNull
    @Column(name="badge_name", unique = true, length = 50)
    private String badgeName;

    // 뱃지 파트 1, 2, 3으로 차별 둘지 다 다른 디자인으로 할지 프론트 내부 상의 필요
    @NotNull
    private Long parts1;
    private Long parts2;
    private Long parts3;

    // enum으로 서버에서 들고 있기로 함
    @NotNull
    @Column(name="badge_category_no")
    private Long badgeCategoryNo;

}
