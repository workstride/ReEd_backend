package com.works.reed.domain.announcement.dto.request;

import com.works.reed.domain.academy.dto.Academy;
import com.works.reed.domain.announcement.dto.Announce;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AnnounceRequest {
    @NotNull
    private Long academyId;
    @NotBlank
    private String annWriter;
    @NotBlank
    private String annTitle;
    @NotBlank
    private String annContent;
}
