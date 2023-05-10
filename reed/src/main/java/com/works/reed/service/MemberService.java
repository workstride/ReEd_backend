package com.works.reed.service;

import com.works.reed.dto.MemberDto;
import com.works.reed.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class  MemberService {

    @Autowired
    MemberRepository memberRepository;

    public MemberDto insertMember(MemberDto member) {
        return memberRepository.insertMember(member);
    }

    public List<MemberDto> getAllMembers() {
        return memberRepository.getAllMembers();
    }

    public MemberDto getMemberByMemberId(String memberId) {
        return memberRepository.getMemberByMemberId(memberId);
    }

    public void updateMemberPassword(String memberId, MemberDto member) {
        memberRepository.updateMemberPassword(memberId, member);
    }

    public void deleteMember(String memberId) {
        memberRepository.deleteMember(memberId);
    }
}
