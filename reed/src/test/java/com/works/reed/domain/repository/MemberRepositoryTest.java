package com.works.reed.domain.repository;


import com.works.reed.repository.MemberRepository;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.assertj.core.api.Assertions.*;

@SpringBootTest
public class MemberRepositoryTest {
    @Autowired
    MemberRepository memberRepository;


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
