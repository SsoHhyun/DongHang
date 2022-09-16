package com.team.pj.donghang.entity;

import javax.persistence.*;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@Entity
@Builder
@ToString
@Table(name="user_badge")
public class UserBadge {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_badge_no")
    private Long userBadgeNo;

    @ManyToOne
    @JoinColumn(name = "badge_no")
    private Badge badge;

    @ManyToOne
    @JoinColumn(name = "user_no")
    private User user;

    private boolean condition;

    }

