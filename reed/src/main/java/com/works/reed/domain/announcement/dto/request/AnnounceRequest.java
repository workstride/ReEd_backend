package com.works.reed.domain.announcement.dto.request;

import com.works.reed.domain.academy.dto.Academy;
import com.works.reed.domain.announcement.dto.Announce;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AnnounceRequest {
    private Long id;
    private String annWriter;
    private String annTitle;
    private String annContent;
}
