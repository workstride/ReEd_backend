package com.works.reed.dto;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.http.ResponseCookie;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AuthenticationResponse {
    public static final String SET_COOKIE = "Set-Cookie";

//    @JsonProperty("accessToken")
    private String accessToken;
    @JsonIgnore
    private String refreshToken;

    private List<String> role;

    public String generateCookie() {
        return ResponseCookie.from("refreshToken", refreshToken)
                .maxAge(7 * 24 * 60 * 60) // 토큰의 유효 기간
                .path("/")
                .secure(true) // https 환경에서만 쿠키가 발동합니다.
                .sameSite("None") // 서로 다른 도메인간의 쿠키 전송에 대한 보안을 설정
                .httpOnly(true) // 브라우저에서 쿠키에 접근할 수 없도록 제한
                .build().toString();
    }
}
