package com.works.reed.controller;

import com.works.reed.dto.MemberDTO;
import com.works.reed.entity.MemberEntity;
import com.works.reed.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/members")
public class MemberController {

    private final MemberService memberService;

    @GetMapping("/register")
    public String registerForm() {
        return "/save";
    }

    @PostMapping("/register")
    public void insertMember(@RequestBody MemberDTO member) {
        memberService.register(member);
    }

    @GetMapping("")
    public List<MemberEntity> getAllMembers() {
        return memberService.getAllMembers();
    }

    @GetMapping("/{memberId}")
    public MemberDTO getMemberByMemberId(@PathVariable String memberId) {
        return memberService.read(memberId);
    }

    @PutMapping("/{memberId}")
    public void updateMemberPassword(@PathVariable String memberId, @RequestBody MemberDTO member) {
//        memberId, member
        memberService.modify(member);
    }

    @DeleteMapping("/delete/{memberId}")
    public void deleteMember(@PathVariable String memberId) {
        memberService.remove(memberId);
    }
}
