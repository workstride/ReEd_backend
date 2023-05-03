package com.works.reed.controller;

import com.works.reed.dto.MemberDTO;
import com.works.reed.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/members")
public class MemberController {

    @Autowired
    MemberService memberService;

    @PostMapping("")
    public MemberDTO insertMember(@RequestBody MemberDTO member) {
        return memberService.insertMember(member);
    }

    @GetMapping("")
    public List<MemberDTO> getAllMembers() {
        return memberService.getAllMembers();
    }

    @GetMapping("/{memberId}")
    public MemberDTO getMemberByMemberId(@PathVariable String memberId) {
        return memberService.getMemberByMemberId(memberId);
    }

    @PutMapping("/{memberId}")
    public void updateMemberPassword(@PathVariable String memberId, @RequestBody MemberDTO member) {
        memberService.updateMemberPassword(memberId, member);
    }

    @DeleteMapping("/{memberId}")
    public void deleteMember(@PathVariable String memberId) {
        memberService.deleteMember(memberId);
    }
}
