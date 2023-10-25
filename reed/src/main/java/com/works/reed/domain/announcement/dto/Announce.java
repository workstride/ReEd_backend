package com.works.reed.domain.announcement.dto;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Announce {
    private Long id;
    private Long academyId;
    private String annWriter;
    private String annTitle;
    private String annContent;
}
