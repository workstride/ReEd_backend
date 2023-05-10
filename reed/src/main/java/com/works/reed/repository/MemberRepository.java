package com.works.reed.repository;

import com.works.reed.dto.MemberDto;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class MemberRepository {
    static public ArrayList<MemberDto> members;

    static {
        members = new ArrayList<>();
        members.add(new MemberDto("qaqa", "1234", "qaqa@gmail.com", "홍길동", "010-1234-1234", 0));
        members.add(new MemberDto("eruri", "1234", "wish@gmail.com", "이루리", "010-1111-2222", 0));
        members.add(new MemberDto("winter1", "1234", "winter@gmail.com", "한겨울", "010-4567-8901", 1));
    }

    public MemberDto insertMember(MemberDto member) {
        members.add(member);
        return member;
    }

    public List<MemberDto> getAllMembers() {
        return members;
    }

    public MemberDto getMemberByMemberId(String memberId) {
        return members.stream()
                .filter(memberDTO -> memberDTO.getMemberId().equals(memberId))
                .findAny()
                .orElse(new MemberDto("", "", "", "", "", 0));
    }

    public void updateMemberPassword(String memberId, MemberDto member) {
        members.stream()
                .filter(memberDTO -> memberDTO.getMemberId().equals(memberId))
                .findAny()
                .orElse(new MemberDto("", "", "", "", "", 0))
                .setMemberPassword(member.getMemberPassword());
    }

    public void deleteMember(String memberId) {
        members.removeIf(memberDTO -> memberDTO.getMemberId().equals(memberId));
    }
}