package com.works.reed.service;

import com.works.reed.dto.MemberDTO;
import com.works.reed.dto.PageRequestDTO;
import com.works.reed.dto.PageResultDTO;
import com.works.reed.entity.Member;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

@SpringBootTest
public class MemberServiceTests {
    @Autowired
    private MemberService memberService;

    @Test
    public void testRegister(){
        MemberDTO memberDTO = MemberDTO.builder().memberId("kkk12").memberPassword("1234").memberName("test")
                .memberEmail("yyy@naver.com").memberTel("010-1234-1234").build();
        memberService.register(memberDTO);
    }

    @Test
    public void testList(){
        PageRequestDTO requestDTO = PageRequestDTO.builder().page(1).size(10).build();
        PageResultDTO<MemberDTO, Member> list = memberService.getList(requestDTO);
        list.getDtoList().stream().forEach(m -> System.out.println(m));
    }
}
