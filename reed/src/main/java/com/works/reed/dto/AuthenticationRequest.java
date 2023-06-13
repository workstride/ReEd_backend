package com.works.reed.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationRequest {
    @NotBlank(message = "아이디 입력해 주세요.")
    @JsonProperty("member_id")
    private String memberId;
    @NotBlank(message = "비밀번호 입력해 주세요.")
    @JsonProperty("member_password")
    private String memberPassword;

}
