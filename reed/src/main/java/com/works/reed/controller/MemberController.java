package com.works.reed.controller;

import com.works.reed.dto.MemberDto;
import com.works.reed.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/members")
public class MemberController {

    @Autowired
    MemberService memberService;

    /**
     * 회원가입 후 멤버 정보 등록
     * @param member
     * @return
     */
    @PostMapping("")
    public MemberDto insertMember(@RequestBody MemberDto member) {
        return memberService.insertMember(member);
    }

    @GetMapping("")
    public List<MemberDto> getAllMembers() {
        return memberService.getAllMembers();
    }

    @GetMapping("/{memberId}")
    public MemberDto getMemberByMemberId(@PathVariable String memberId) {
        return memberService.getMemberByMemberId(memberId);
    }

    @PutMapping("/{memberId}")
    public void updateMemberPassword(@PathVariable String memberId, @RequestBody MemberDto member) {
        memberService.updateMemberPassword(memberId, member);
    }

    @DeleteMapping("/{memberId}")
    public void deleteMember(@PathVariable String memberId) {
        memberService.deleteMember(memberId);
    }
}
