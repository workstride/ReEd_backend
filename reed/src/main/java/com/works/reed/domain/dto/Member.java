package com.works.reed.domain.dto;

import jakarta.persistence.*;

@Entity
@Table(name = "member")
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long MemberNo;
    @Column(name = "MemberId")
    private String MemberId;
    private String MemberPassword;
    private String MemberName;
    private String MemberTel;
    private String MemberEamil;
    private String image;
    private String createdAt;

    public Member(Long memberNo, String memberId, String memberPassword, String memberName, String memberTel, String memberEamil, String image, String createdAt) {

    }

    public Member(Long MemberNo, String memberId, String memberPassword, String memberName, String memberTel, String memberEamil, String image) {
        this.MemberNo = MemberNo;
        this.MemberId = memberId;
        this.MemberPassword = memberPassword;
        this.MemberName = memberName;
        this.MemberTel = memberTel;
        this.MemberEamil = memberEamil;
        this.image = image;
    }

    public long getMemberNo() {
        return MemberNo;
    }

    public void setMemberNo(Long memberNo) {
        MemberNo = memberNo;
    }

    public String getMemberId() {
        return MemberId;
    }

    public void setMemberId(String memberId) {
        MemberId = memberId;
    }

    public String getMemberPassword() {
        return MemberPassword;
    }

    public void setMemberPassword(String memberPassword) {
        MemberPassword = memberPassword;
    }

    public String getMemberName() {
        return MemberName;
    }

    public void setMemberName(String memberName) {
        MemberName = memberName;
    }

    public String getMemberTel() {
        return MemberTel;
    }

    public void setMemberTel(String memberTel) {
        MemberTel = memberTel;
    }

    public String getMemberEamil() {
        return MemberEamil;
    }

    public void setMemberEamil(String memberEamil) {
        MemberEamil = memberEamil;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(String createdAt) {
        this.createdAt = createdAt;
    }
}
