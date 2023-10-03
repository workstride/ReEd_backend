package com.works.reed.domain.attendance.dto;

import lombok.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AttendanceCode {
    private Long id;
    private Long courseId;
    private Long academyId;
    private Long memberId;
    private String code;
    private boolean active;
}
