package com.works.reed.controller;

import com.works.reed.domain.dto.Member;
import com.works.reed.domain.repository.MemberRepository;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping("/member")
@RequiredArgsConstructor
public class MemberController {

    private final MemberRepository memberRepository;

    @GetMapping("/")
    public String members(Model model) {
        List<Member> members = memberRepository.findAll();
        model.addAttribute("members", members);
        return "/html/members.html";
    }

    @PostConstruct
    public void init() {
        memberRepository.save(new Member("qaqa1", "qaqa1", "최현호", "010-4467-4003", "qaqqa@gmail.com", ""));
        memberRepository.save(new Member("qaqa2", "qaqa2", "최현호", "010-4467-4003", "qaqqa@gmail.com", ""));
    }

    @GetMapping("/register")
    public String register() {
        return "/html/save.html";
    }
}
