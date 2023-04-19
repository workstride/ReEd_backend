package com.works.reed.domain.repository;

import com.works.reed.domain.dto.Member;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.assertj.core.api.Assertions.*;

public class MemberRepositoryTest {
    MemberRepository memberRepository = new MemberRepository();

    @AfterEach
    void afterEach() {
        memberRepository.clearStore();
    }

    @Test
    void save() {
        Member member = new Member("qaqa", "qaqa0", "최현호", "010-4467-4003", "qaqqa@gmail.com", "");
        Member saveMember = memberRepository.save(member);
        Member findMember = memberRepository.findById(member.getMemberNo());

        assertThat(findMember).isEqualTo(saveMember);
    }

    @Test
    void findAll() {
        Member member01 = new Member("qaqa1", "qaqa1", "최현호1", "010-4467-40403", "qaqqa@gmail.com", "");
        Member member02 = new Member("qaqa2", "qaqa2", "최현호2", "010-4467-42003", "qaqqa@gmail.com", "");

        memberRepository.save(member01);
        memberRepository.save(member02);

        List<Member> result = memberRepository.findAll();

        assertThat(result.size()).isEqualTo(2);
        assertThat(result).contains(member01, member02);
    }
}
