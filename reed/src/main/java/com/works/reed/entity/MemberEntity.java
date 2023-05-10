package com.works.reed.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "member")
@NoArgsConstructor
class MemberEntity {
    @Id
    @Column(name = "memberId", unique = true, nullable = false)
    private String memberId;

    @Column(name = "memberPassword", length = 50, nullable = false)
    private String memberPassword;

    @Column(name = "memberEmail", nullable = false)
    private String memberEmail;

    @Column(name = "memberName", nullable = false)
    private String memberName;

    @Column(name = "memberTel", nullable = false)
    private String memberTel;

    @Column(name = "memberType", nullable = false)
    private Integer memberType;
}