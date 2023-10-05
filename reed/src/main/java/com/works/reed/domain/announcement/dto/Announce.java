package com.works.reed.domain.announcement.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class Announce {
    private Long id;
    private String annWriter;
    private String annTitle;
    private String annContent;
}
