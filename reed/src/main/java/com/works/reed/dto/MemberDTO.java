package com.works.reed.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@AllArgsConstructor
public class MemberDTO {
    private String memberId;
    private String memberPassword;
    private String memberEmail;
    private String memberName;
    private String memberTel;

}
