package com.works.reed.domain.announcement.application;

import com.works.reed.domain.announcement.dto.Announce;
import com.works.reed.domain.announcement.dto.request.AnnounceRequest;

import java.util.List;

public interface AnnounceService {
    public void upload(AnnounceRequest announce);
    public void edit(AnnounceRequest request, Long id);
    public void delete(Long id);
}
