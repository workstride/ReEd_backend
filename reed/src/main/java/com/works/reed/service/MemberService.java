package com.works.reed.service;

import com.works.reed.dto.MemberDTO;
import com.works.reed.entity.MemberEntity;

import java.util.List;

public interface MemberService {
    public MemberDTO register(MemberDTO member);

    public List<MemberEntity> getAllMembers();

    public MemberDTO read(String memberId);

    public void remove(String memberId);

    public void modify(MemberDTO memberDTO);

    default MemberEntity dtoToEntity(MemberDTO dto) {
        MemberEntity entity = MemberEntity.builder()
                .memberId(dto.getMemberId())
                .memberPassword(dto.getMemberPassword())
                .memberName(dto.getMemberName())
                .memberTel(dto.getMemberTel())
                .memberType(dto.getMemberType())
                .build();
        return entity;
    }

    default MemberDTO entityToDto(MemberEntity entity) {
        MemberDTO dto = MemberDTO.builder()
                .memberName(entity.getMemberName())
                .memberId(entity.getMemberId())
                .memberPassword(entity.getMemberPassword())
                .memberTel(entity.getMemberTel())
                .memberType(entity.getMemberType()).build();
        return dto;
    }
}
