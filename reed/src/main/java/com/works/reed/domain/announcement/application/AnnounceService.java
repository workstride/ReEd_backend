package com.works.reed.domain.announcement.application;

import com.works.reed.domain.announcement.dto.Announce;
import com.works.reed.domain.announcement.dto.request.AnnounceRequest;

import java.util.List;

public interface AnnounceService {
    void upload(AnnounceRequest announce);
    void edit(AnnounceRequest request, Long id);
    void delete(Long id);
}
