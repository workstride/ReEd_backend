package com.works.reed.controller;

import com.works.reed.dto.MemberDTO;
import com.works.reed.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
@RequiredArgsConstructor
@RequestMapping("/member")
public class MemberController {
    private final MemberService memberService;

    @GetMapping("save-form")
    public String saveForm(){
        return "memberPages/save";
    }

    @GetMapping("login-form")
    public String loginForm(){
        return "memberPages/login";
    }

    @PostMapping("/save")
    public String save(@ModelAttribute MemberDTO memberDTO){
        memberService.save(memberDTO);
        return "memberPages/login";
    }

    @PostMapping("/login")
    public  String login(@ModelAttribute MemberDTO memberDTO){
        boolean loginResult = memberService.login(memberDTO);
        if (loginResult){
            return "memberPages"
        }
    }

}
