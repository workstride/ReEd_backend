package com.works.reed.entity;


import com.works.reed.dto.MemberDTO;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@Entity
@Getter @Setter
@Table(name = "membel_table")
public class MemberEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "memberId")
    private Long memberId;

    @Column(name = "memberEmail", length = 50, unique = true)
    private String memberEmail;

    @Column(name = "memberPassword", length = 20)
    private String memberPassword;

    @Column(name = "memberTel", length = 20)
    private String memberTel;

    public static MemberEntity toSaveEntity(MemberDTO memberDTO){
        MemberEntity memberEntity = new MemberEntity();
        memberEntity.setMemberEmail(memberDTO.getMemberEmaill());
        memberEntity.setMemberPassword(memberDTO.getMemberPassword());
        memberEntity.setMemberId(memberDTO.getId());
        memberEntity.setMemberTel(memberDTO.getMemberTel());
        return memberEntity;
    }
}
