package com.works.reed.domain.announcement.application;

import com.works.reed.domain.announcement.dto.Announce;

import java.util.List;

public interface AnnounceService {
    public void upLoad(Announce announce);
    public void edit(Announce announce, Long id);
    public List<Announce> findAll();
    public void delete(Long id);
}
