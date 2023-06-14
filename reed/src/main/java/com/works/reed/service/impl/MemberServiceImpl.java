package com.works.reed.service.impl;

import com.works.reed.dto.Member;
import com.works.reed.entity.MemberEntity;
import com.works.reed.repository.MemberRepository;
import com.works.reed.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MemberServiceImpl implements MemberService {

    private final MemberRepository memberRepository;

    public Member register(Member member) {
        MemberEntity memberEntity = dtoToEntity(member);
        memberEntity = memberRepository.save(memberEntity);
        return entityToDto(memberEntity);
    }

    public Member read(String memberId){
         Optional<MemberEntity> optMember = memberRepository.findById(memberId);
        return (optMember.isPresent())?entityToDto(optMember.get()):null;
    }


    public void remove(String memberId) {
        memberRepository.deleteById(memberId);
    }

    public void modify(Member memberDTO){
//        memberRepository.save(memberDTO)
    }

}
