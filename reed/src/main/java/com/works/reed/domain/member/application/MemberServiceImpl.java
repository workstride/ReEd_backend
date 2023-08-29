package com.works.reed.domain.member.application;

import com.works.reed.domain.member.dao.MemberRepository;
import com.works.reed.domain.member.dto.Member;
import com.works.reed.domain.member.exception.DuplicateEmailException;
import com.works.reed.domain.member.mapper.MemberMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(rollbackFor = Exception.class)
public class MemberServiceImpl implements MemberService {
    private final MemberRepository memberRepository;
    private final MemberMapper memberMapper;

    @Override
    public void register(Member member) {
        memberRepository.save(memberMapper.createEntity(member));
    }

    @Override
    public void duplicateMemberEmail(String email) {
        if (memberRepository.findByEmail(email).isPresent()) {
            throw DuplicateEmailException.EXCEPTION;
        }
    }

}
