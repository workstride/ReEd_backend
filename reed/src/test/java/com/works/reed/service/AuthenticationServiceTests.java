package com.works.reed.service;

import com.works.reed.dto.MemberDTO;
import com.works.reed.entity.Member;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
public class AuthenticationServiceTests {

    @Autowired
    private AuthenticationService authenticationService;

    @Test
    public void testRegister(){
        MemberDTO member = MemberDTO.builder()
                .memberId("test")
                .memberPassword("1234")
                .memberName("테스터")
                .memberEmail("test2@dgsw.ac.kr")
                .memberTel("01012341234")
                .roles(List.of("STUDENT", "PARENT", "TEACHER", "HEAD_TEACHER", "ADMIN", "MANAGER"))
                .build();
        System.out.println(member);
        System.out.println(authenticationService.register(member));
    }

}
