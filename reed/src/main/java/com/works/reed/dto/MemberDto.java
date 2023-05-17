package com.works.reed.dto;

import lombok.*;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class MemberDTO {
    private String memberId;
    private String memberPassword;
    private String memberName;
    private String memberTel;
    private Integer memberType;

}
