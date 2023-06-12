package com.works.reed.controller;

import com.works.reed.dto.MemberDTO;
import com.works.reed.dto.PageRequestDTO;
import com.works.reed.dto.PageResultDTO;
import com.works.reed.entity.Member;
import com.works.reed.service.MemberService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Tag(name = "회원", description = "회원 API")
@SecurityRequirement(name = "BearerAuthentication")
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
    @Operation(summary = "회원 가입", description = "선생님, 학부모, 학생 등등 작업!!")
    @PostMapping("/register")
    public MemberDTO insertMember(@RequestBody MemberDTO member) {
        return memberService.register(member);
    }

    @Operation(summary = "회원 목록", description = "...")
    @GetMapping("/list")
    public PageResultDTO<MemberDTO, Member> getAllMembers(PageRequestDTO pageRequestDTO) {
        log.debug("========================= list");
        return memberService.getList(pageRequestDTO);
    }

    @Operation(summary = "회원 수정", description = "...")
    @PutMapping("/{memberId}")
    public void updateMemberPassword(@PathVariable String memberId, @RequestBody MemberDTO member) {
//        memberId, member
        memberService.modify(member);
    }
    @Operation(summary = "회원 삭제", description = "...")
    @DeleteMapping("/{memberId}")
    public void deleteMember(@PathVariable String memberId) {
        //  memberService.remove(memberId);
    }

}
