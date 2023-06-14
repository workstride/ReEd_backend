package com.works.reed.service;

import com.works.reed.dto.MemberDTO;
import com.works.reed.dto.PageRequestDTO;
import com.works.reed.dto.PageResultDTO;
import com.works.reed.entity.Member;
import com.works.reed.entity.MemberRole;

import java.util.HashSet;
import java.util.List;
import java.util.stream.Collectors;

public interface MemberService {
    public Member register(Member member);

    public MemberDTO get(Long mno);

    public PageResultDTO<MemberDTO, Member> getList(PageRequestDTO requestDTO);

    public void remove(Long mno);

    public void modify(Member memberDTO);

    default HashSet<MemberRole> memberRoleConverter(List<String> roles) {
        return roles.stream().map(role -> {
            try {
                return MemberRole.valueOf(role.toUpperCase());
            } catch (Exception e) {
                return null;
            }
        }).filter(role -> role != null).collect(Collectors.toCollection(HashSet::new));
    }

    default Member dtoToEntity(MemberDTO dto) {
        Member entity = Member.builder()
                .mno(dto.getMno())
                .memberId(dto.getMemberId())
                .memberPassword(dto.getMemberPassword())
                .memberName(dto.getMemberName())
                .memberEmail(dto.getMemberEmail())
                .memberTel(dto.getMemberTel())
                .roleSet(memberRoleConverter(dto.getRoles()))
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
