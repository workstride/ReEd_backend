package com.works.reed.dto;

import lombok.*;

import java.util.List;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
public class MemberDTO {
    private Long mno;
    private String memberId;
    private String memberPassword;
    private String memberEmail;
    private String memberName;
    private String memberTel;

    private List<String> roles;

//    private Integer memberType;

}
