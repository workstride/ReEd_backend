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
        MemberDTO memberDTO = MemberDTO.builder()
                .memberId("qwer1243")
                .memberPassword("1234")
                .memberName("김이박")
                .memberTel("010-1234-1234")
                .memberType(1)
                .build();
        memberService.register(memberDTO);
    }
}
