package com.works.reed.domain.member.dao.querydsl;

import com.works.reed.domain.member.dto.MemberInfo;
import com.works.reed.domain.member.dto.request.MemberPageRequest;
import org.springframework.data.domain.Page;

public interface MemberQueryRepository {
    Page<MemberInfo> findMembers(MemberPageRequest request);

}
