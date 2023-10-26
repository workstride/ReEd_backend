package com.works.reed.domain.announcement.dao.querydsl;

import com.works.reed.domain.announcement.dto.AnnounceInfo;
import com.works.reed.domain.announcement.dto.request.AnnouncePageRequest;
import org.springframework.data.domain.Page;

public interface AnnounceQueryRepository {
    Page<AnnounceInfo> findAnnounces(AnnouncePageRequest request);

}
