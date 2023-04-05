package com.works.reed.service;

import com.works.reed.dto.MemberDTO;
import com.works.reed.entity.MemberEntity;
import com.works.reed.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class MemberService {
    private final MemberRepository memberRepository;

    public Long save(MemberDTO memberDTO) {
        MemberEntity memberEntity = MemberEntity.toSaveEntity(memberDTO);
        Long savedId = memberRepository.save(memberEntity).getMemberId();
        return savedId;
    }
}
