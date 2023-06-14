package com.works.reed.service;

import com.works.reed.dto.Member;
import com.works.reed.entity.MemberEntity;

public interface MemberService {
    public Member register(Member member);

    public Member read(String memberId);

    public void remove(String memberId);

    public void modify(Member memberDTO);

    default MemberEntity dtoToEntity(Member dto) {
        MemberEntity entity = MemberEntity.builder()
                .memberId(dto.getMemberId())
                .memberPassword(dto.getMemberPassword())
                .memberName(dto.getMemberName())
                .memberTel(dto.getMemberTel())
                .memberType(dto.getMemberType())
                .build();
        return entity;
    }

    default Member entityToDto(MemberEntity entity) {
        Member dto = Member.builder()
                .memberName(entity.getMemberName())
                .memberId(entity.getMemberId())
                .memberPassword(entity.getMemberPassword())
                .memberTel(entity.getMemberTel())
                .memberType(entity.getMemberType()).build();
        return dto;
    }
}
