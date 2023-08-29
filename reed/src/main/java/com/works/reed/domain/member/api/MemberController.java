package com.works.reed.domain.member.api;

import com.works.reed.domain.member.application.MemberService;
import com.works.reed.domain.member.application.querydsl.MemberQueryService;
import com.works.reed.domain.member.dto.request.MemberPageRequest;
import com.works.reed.global.common.dto.response.PageResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "회원", description = "회원")
@SecurityRequirement(name = "BearerAuthentication")

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/member")
public class MemberController {

    private final MemberService memberService;
    private final MemberQueryService memberQueryService;

    @Operation(summary = "회원 조회", description = "회원 조회")
    @GetMapping("/list")
    public PageResponse findMembers(@ModelAttribute MemberPageRequest request) {
        return memberQueryService.findMembers(request);
    }

}
