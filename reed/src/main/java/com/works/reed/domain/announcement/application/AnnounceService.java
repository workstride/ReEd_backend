package com.works.reed.domain.announcement.application;

import com.works.reed.domain.announcement.dto.Announce;

public interface AnnounceService {
    public void upLoad(Announce announce);
    public void modify(Announce announce);
    public void delete(Long id);
}
