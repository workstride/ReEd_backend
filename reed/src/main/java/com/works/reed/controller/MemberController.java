package com.works.reed.controller;

import com.works.reed.dto.MemberDTO;
import com.works.reed.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

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
    public MemberDTO insertMember(@RequestBody MemberDTO member) {
        return memberService.register(member);
    }

    @GetMapping("/{memberId}")
    public MemberDTO getMemberByMemberId(@PathVariable String memberId) {
        return memberService.read(memberId);
    }

    @PutMapping("/{memberId}")
    public void updateMemberPassword(@PathVariable String memberId, @RequestBody MemberDTO member) {
        memberService.modify(member);
    }

    @DeleteMapping("/delete/{memberId}")
    public void deleteMember(@PathVariable String memberId) {
        memberService.remove(memberId);
    }
}
