package com.works.reed.domain.announcement.application;

import com.works.reed.domain.announcement.dao.AnnounceRepository;
import com.works.reed.domain.announcement.domain.AnnounceEntity;
import com.works.reed.domain.announcement.dto.Announce;
import com.works.reed.domain.announcement.dto.request.AnnounceRequest;
import com.works.reed.domain.announcement.mapper.AnnounceMapper;
import com.works.reed.global.common.dto.response.PageResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AnnounceServiceImpl implements AnnounceService {

    private final AnnounceRepository announceRepository;
    private final AnnounceMapper mapper;

    @Override
    public void upLoad(Announce announce) {
        announceRepository.save(mapper.createEntity(announce));
    }

    @Override
    public void edit(Announce announce, Long id) {
        Announce ann = Announce.builder()
            .annTitle(announce.getAnnTitle())
            .annContent(announce.getAnnContent())
            .build();
        announceRepository.save(mapper.createEntity(ann));
    }

    @Override
    public List<Announce> findAll() {
        PageResponse<Announce> list;
        return null;
    }

    @Override
    public void delete(Long id) {
        announceRepository.deleteById(id);
    }

}