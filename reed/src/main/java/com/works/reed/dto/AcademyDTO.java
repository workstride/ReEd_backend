package com.works.reed.dto;

import com.works.reed.entity.MemberEntity;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class AcademyDTO {
    private Long ACA_ASNUM;
    private String ATPT_OFCDC_SC_CODE;
    private String ACA_NM;
    private MemberEntity member;
}
