package com.works.reed.service;

import com.works.reed.dto.MemberDTO;
import com.works.reed.repository.MemberRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class  MemberService {

    @Autowired
    MemberRepository memberRepository;

    public MemberDTO insertMember(MemberDTO member) {
        return memberRepository.insertMember(member);
    }

    public List<MemberDTO> getAllMembers() {
        return memberRepository.getAllMembers();
    }

    public MemberDTO getMemberByMemberId(String memberId) {
        return memberRepository.getMemberByMemberId(memberId);
    }

    public void updateMemberPassword(String memberId, MemberDTO member) {
        memberRepository.updateMemberPassword(memberId, member);
    }

    public void deleteMember(String memberId) {
        memberRepository.deleteMember(memberId);
    }
}
