package com.works.reed.repository;

import com.works.reed.dto.MemberDTO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;

@Repository
public class MemberRepository {
    static public ArrayList<MemberDTO> members;

    static {
        members = new ArrayList<>();
        members.add(new MemberDTO("qaqa", "1234", "qaqa@gmail.com", "홍길동", "010-1234-1234"));
        members.add(new MemberDTO("eruri", "1234", "wish@gmail.com", "이루리", "010-1111-2222"));
        members.add(new MemberDTO("winter1", "1234", "winter@gmail.com", "한겨울", "010-4567-8901"));
    }

    public  MemberDTO insertMember(MemberDTO member) {
        members.add(member);
        return member;
    }

    public List<MemberDTO> getAllMembers() {
        return members;
    }

    public MemberDTO getMemberByMemberId(String memberId) {
        return members.stream()
                .filter(memberDTO -> memberDTO.getMemberId().equals(memberId))
                .findAny()
                .orElse(new MemberDTO("", "", "", "", ""));
    }

    public void updateMemberPassword(String memberId, MemberDTO member) {
        members.stream()
                .filter(memberDTO -> memberDTO.getMemberId().equals(memberId))
                .findAny()
                .orElse(new MemberDTO("", "", "", "", ""))
                .setMemberPassword(member.getMemberPassword());
    }

    public void deleteMember(String memberId) {
        members.removeIf(memberDTO -> memberDTO.getMemberId().equals(memberId));
    }
}