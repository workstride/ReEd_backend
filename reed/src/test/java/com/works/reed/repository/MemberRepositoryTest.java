package com.works.reed.repository;


import com.works.reed.entity.Member;
import com.works.reed.entity.MemberRole;
import com.works.reed.repository.MemberRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.List;
import java.util.stream.IntStream;

import static org.assertj.core.api.Assertions.*;

@SpringBootTest
public class MemberRepositoryTest {
    @Autowired
    private MemberRepository memberRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Test
    public void insertDummies(){
        IntStream.rangeClosed(1,10).forEach(i -> {
            Member member = Member.builder()
                    .memberId("user" + i)
                    .memberPassword(passwordEncoder.encode("1111"))
                    .memberName("사용자" + i)
                    .memberEmail("user" + i + "@dgsw.ac.kr")
                    .memberTel("01000000000")
                    .build();

//            member.addMemberRole(MemberRole.USER);
            if(i == 1) {
                member.addMemberRole(MemberRole.MANAGER);
                member.addMemberRole(MemberRole.ADMIN);
            }
            memberRepository.save(member);
        });
    }



//
//    @Test
//    void save() {
//
//        MemberDTO member = MemberDTO.builder().memberId("qaqa").memberPassword("qaqa0").memberName("최현호").memberTel("010-4467-4003").memberEmail("qaqqa@gmail.com").build();
////        member.saveMember = memberRepository.save(member);
//        memberRepository.save(member);
////        Member findMember = memberRepository.findById(member.getMemberNo());
////
////        assertThat(findMember).isEqualTo(saveMember);
//    }
//
//    @Test
//    void findAll() {
//        Member member01 = new Member(1L, "qaqa1", "qaqa1", "최현호1", "010-4467-40403", "qaqqa@gmail.com", "");
//        Member member02 = new Member(2L, "qaqa2", "qaqa2", "최현호2", "010-4467-42003", "qaqqa@gmail.com", "");
//
//        memberRepository.save(member01);
//        memberRepository.save(member02);
//
//        List<Member> result = memberRepository.findAll();
//
//        assertThat(result.size()).isEqualTo(2);
//        assertThat(result).contains(member01, member02);
//    }
}
