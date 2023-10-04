package com.works.reed.domain.announcement.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class Announce {
    private Long id;
    private String annWriter;
    private String annTitle;
    private String annContent;
}
