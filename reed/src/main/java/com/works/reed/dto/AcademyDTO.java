package com.works.reed.dto;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.works.reed.entity.MemberEntity;
import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@JsonIgnoreProperties(ignoreUnknown = true)
public class AcademyDTO {
    @JsonProperty("ACA_ASNUM")
    private Long ACA_ASNUM;
    @JsonProperty("ATPT_OFCDC_SC_CODE")
    private String ATPT_OFCDC_SC_CODE;
    @JsonProperty("ACA_NM")
    private String ACA_NM;
    @JsonProperty("FA_RDNMA")
    private String FA_RDNMA;
    @JsonProperty("FA_RDNDA")
    private String FA_RDNDA;
    private MemberEntity member;

<<<<<<< Updated upstream
}
=======
}
>>>>>>> Stashed changes
