package com.works.reed.domain.announcement.dto.request;

import com.works.reed.domain.academy.dto.Academy;
import com.works.reed.domain.announcement.dto.Announce;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class AnnounceRequest {
    private Long id;
    private String annWriter;
    private String annTitle;
    private String annContent;

    public Announce toAnnounce() {
        return Announce.builder()
                .id(id)
                .annWriter(annWriter)
                .annTitle(annTitle)
                .annContent(annContent)
                .build();
    }
}
