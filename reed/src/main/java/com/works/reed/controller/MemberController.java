package com.works.reed.controller;

import com.works.reed.dto.MemberDTO;
import com.works.reed.dto.PageRequestDTO;
import com.works.reed.dto.PageResultDTO;
import com.works.reed.entity.Member;
import com.works.reed.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/member/*")
@Slf4j
public class MemberController {

    private final MemberService memberService;

    /**
     * 회원가입 후 멤버 정보 등록
     *
     * @param member
     * @return
     */
    @PostMapping("/register")
    public MemberDTO insertMember(@RequestBody MemberDTO member) {
        return memberService.register(member);
    }

    @GetMapping("/list")
    public PageResultDTO<MemberDTO, Member> getAllMembers(PageRequestDTO pageRequestDTO) {
        log.debug("========================= list");
        return memberService.getList(pageRequestDTO);
    }


    @PutMapping("/{memberId}")
    public void updateMemberPassword(@PathVariable String memberId, @RequestBody MemberDTO member) {
//        memberId, member
        memberService.modify(member);
    }

    @DeleteMapping("/{memberId}")
    public void deleteMember(@PathVariable String memberId) {
        //  memberService.remove(memberId);
    }

}
