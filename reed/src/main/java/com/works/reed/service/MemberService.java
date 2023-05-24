package com.works.reed.service;

import com.works.reed.dto.MemberDTO;
import com.works.reed.dto.PageRequestDTO;
import com.works.reed.dto.PageResultDTO;
import com.works.reed.entity.Member;

public interface MemberService {
    public MemberDTO register(MemberDTO member);

    public MemberDTO get(Long mno);

    public PageResultDTO<MemberDTO, Member> getList(PageRequestDTO requestDTO);

    public void remove(Long mno);

    public void modify(MemberDTO memberDTO);

    default Member dtoToEntity(MemberDTO dto) {
        Member entity = Member.builder()
                .mno(dto.getMno())
                .memberId(dto.getMemberId())
                .memberPassword(dto.getMemberPassword())
                .memberName(dto.getMemberName())
                .memberEmail(dto.getMemberEmail())
                .memberTel(dto.getMemberTel())
                .build();
        return entity;
    }

    default MemberDTO entityToDto(Member entity) {
        MemberDTO dto = MemberDTO.builder()
                .mno(entity.getMno())
                .memberId(entity.getMemberId())
                .memberName(entity.getMemberName())
                .memberEmail(entity.getMemberEmail())
                .memberTel(entity.getMemberTel())
                .build();
        return dto;
    }
}
