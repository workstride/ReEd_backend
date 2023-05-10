package com.works.reed.controller;

import com.works.reed.dto.MemberDTO;
import com.works.reed.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/members")
public class MemberController {

    private final MemberService memberService;

    /**
     * 회원가입 후 멤버 정보 등록
     * @param member
     * @return
     */
    @PostMapping("/register")
    public MemberDTO insertMember(@RequestBody MemberDTO member) {
        return memberService.register(member);
    }

//    @GetMapping("")
//    public List<MemberDTO> getAllMembers() {
//        return memberService.getAllMembers();
//    }

    @GetMapping("/{memberId}")
    public MemberDTO getMemberByMemberId(@PathVariable String memberId) {
        return memberService.read(memberId);
    }

    @PutMapping("/{memberId}")
    public void updateMemberPassword(@PathVariable String memberId, @RequestBody MemberDTO member) {
//        memberId, member
        memberService.modify(member);
    }

    @DeleteMapping("/{memberId}")
    public void deleteMember(@PathVariable String memberId) {
        memberService.remove(memberId);
    }
}
