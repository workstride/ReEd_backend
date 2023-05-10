package com.works.reed.entity;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "member")
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
public class MemberEntity extends BaseEntity{
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