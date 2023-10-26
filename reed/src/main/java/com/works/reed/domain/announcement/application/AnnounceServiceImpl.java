package com.works.reed.domain.announcement.application;

import com.works.reed.domain.announcement.dao.AnnounceRepository;
import com.works.reed.domain.announcement.dto.Announce;
import com.works.reed.domain.announcement.dto.request.AnnounceRequest;
import com.works.reed.domain.announcement.mapper.AnnounceMapper;
import com.works.reed.global.common.dao.MemberSecurity;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AnnounceServiceImpl implements AnnounceService {

    private final AnnounceRepository announceRepository;
    private final MemberSecurity memberSecurity;
    private final AnnounceMapper mapper;

    @Override
    public void upload(AnnounceRequest announce) {
        Announce ann = Announce.builder()
                .academyId(announce.getAcademyId())
                .memberId(memberSecurity.getMember().getId())
                .annWriter(announce.getAnnWriter())
                .annTitle(announce.getAnnTitle())
                .annContent(announce.getAnnContent())
                .build();

        announceRepository.save(mapper.createEntity(ann));
    }

    @Override
    public void edit(AnnounceRequest request, Long id) {
        Announce ann = Announce.builder()
                .id(id)
                .academyId(request.getAcademyId())
                .annWriter(request.getAnnWriter())
                .annTitle(request.getAnnTitle())
                .annContent(request.getAnnContent())
                .build();
        announceRepository.save(mapper.createEntity(ann));
    }

    @Override
    public void delete(Long id) {
        announceRepository.deleteById(id);
    }

}
