package com.works.reed.domain.member.application;

import com.works.reed.domain.member.dto.Member;

public interface MemberService {
    void register(Member member);
    void duplicateMemberEmail(String email);
    void delete(Long id);

}
