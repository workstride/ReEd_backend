package com.works.reed.service.impl;

import com.works.reed.dto.MemberDTO;
import com.works.reed.dto.PageRequestDTO;
import com.works.reed.dto.PageResultDTO;
import com.works.reed.entity.Member;
import com.works.reed.repository.MemberRepository;
import com.works.reed.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.function.Function;

@Service
@RequiredArgsConstructor
public class MemberServiceImpl implements MemberService {

    private final MemberRepository memberRepository;

    public MemberDTO register(MemberDTO member) {
//        if (Boolean.TRUE.equals(memberRepository.existsByMemberId())) {
//            throw new SampleAPIException(HttpStatus.BAD_REQUEST, "이미 사용 중인 이메일 주소입니다.");
//        }
        Member memberEntity = dtoToEntity(member);
        memberEntity = memberRepository.save(memberEntity);
        return entityToDto(memberEntity);
    }

    public MemberDTO get(Long mno) {
        Optional<Member> optMember = memberRepository.findByMno(mno);
        return (optMember.isPresent()) ? entityToDto(optMember.get()) : null;
    }

    @Override
    public PageResultDTO<MemberDTO, Member> getList(PageRequestDTO requestDTO) {
        Pageable pageable = requestDTO.getPageable(Sort.by("mno").descending());
        Page<Member> result = memberRepository.findAll(pageable);
        Function<Member, MemberDTO> fn = (entity -> entityToDto(entity));
        return new PageResultDTO<>(result, fn);
    }

    public void remove(Long mno) {
//            memberRepository.delete();
    }

    public void modify(MemberDTO memberDTO) {
//        memberRepository.save();
    }


}
