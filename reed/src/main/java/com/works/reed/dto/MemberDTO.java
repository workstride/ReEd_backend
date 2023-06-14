package com.works.reed.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.*;
import lombok.*;

import java.util.List;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
@ToString
@JsonIgnoreProperties(ignoreUnknown = true)
public class MemberDTO {
    @Schema(description = "회원 idx")
    private Long mno;

    @Schema(description = "회원 아이디")
    @NotBlank(message = "ID")
    private String memberId;

    @Schema(description = "회원 비밀번호", minimum = "4")
    //    @Size(min=4,max=16)
//    @Min(value = 4, message = "비밀번호는 4 이상")
    @NotBlank(message = "PW")
    private String memberPassword;

    @Schema(description = "회원 이메일")
    @Email(message = "Email")
    @NotBlank(message = "PW")
    private String memberEmail;

    @Schema(description = "회원 이름")
    @NotBlank
    private String memberName;

    @Schema(description = "회원 전화번호")
    @NotBlank
    private String memberTel;

    @NotEmpty
    private List<String> roles;
}
