package com.works.reed.domain.announcement.mapper;

import com.works.reed.domain.announcement.domain.AnnounceEntity;
import com.works.reed.domain.announcement.dto.Announce;
import com.works.reed.domain.member.domain.MemberEntity;
import com.works.reed.domain.member.dto.Member;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
public class AnnounceMapper {
    public AnnounceEntity createEntity(Announce announce) {
        return AnnounceEntity.builder()
                .id(announce.getId())
                .annWriter(announce.getAnnWriter())
                .annTitle(announce.getAnnTitle())
                .annContent(announce.getAnnContent())
                .build();

    }

    public Announce createDto(Optional<AnnounceEntity> ann) {

        AnnounceEntity announce = ann.get();

        return Announce.builder()
                .id(announce.getId())
                .annWriter(announce.getAnnWriter())
                .annTitle(announce.getAnnTitle())
                .annContent(announce.getAnnContent())
                .build();

    }
}
