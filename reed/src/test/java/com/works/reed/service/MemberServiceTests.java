package com.works.reed.service;

import com.works.reed.dto.MemberDTO;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class MemberServiceTests {
    @Autowired
    private MemberService memberService;

    @Test
    public void testRegister(){
        MemberDTO memberDTO = MemberDTO.builder().memberId("kkk12").memberPassword("1234").memberName("test")
                .memberEmail("yyy@naver.com").memberTel("010-1234-1234").memberType(1).build();
        memberService.register(memberDTO);
    }
}
