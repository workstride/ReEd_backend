package com.works.reed.domain.academy.dto;

import lombok.*;

@Builder
@AllArgsConstructor
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Getter
@Setter
public class AcadStudent {
    private Long academyId;
    private Long memberId;
}
