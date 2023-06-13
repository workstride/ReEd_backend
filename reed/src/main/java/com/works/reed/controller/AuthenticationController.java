package com.works.reed.controller;

import com.works.reed.dto.AuthenticationRequest;
import com.works.reed.dto.AuthenticationResponse;
import com.works.reed.dto.MemberDTO;
import com.works.reed.service.AuthenticationService;
import com.works.reed.service.LogoutService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.HttpClientErrorException;


import java.io.IOException;

@Tag(name = "회원 인증", description = "회원 인증 API")
@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
@Slf4j
public class AuthenticationController {
    private final AuthenticationService authenticationService;
    private final LogoutService logoutService;

    @Operation(summary = "회원 인증", description = "회원 토근 발급")
    @PostMapping("/authenticate")
    public ResponseEntity<AuthenticationResponse> authenticate(@Valid @RequestBody AuthenticationRequest request) {
        AuthenticationResponse response = authenticationService.authenticate(request);
        log.info(response.generateCookie());
        return ResponseEntity.ok().header(AuthenticationResponse.SET_COOKIE, response.generateCookie()).body(response);
    }
    @Operation(summary = "회원 재인증", description = "회원 토근 재발급")
    @PostMapping("/refresh-token")
    public ResponseEntity<AuthenticationResponse> refreshToken(HttpServletRequest request) throws IOException {
        AuthenticationResponse response = authenticationService.refreshToken(request);
        return (response != null)
                ? ResponseEntity.ok(response)
                : ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
    }
    @Operation(summary = "회원 가입", description = "일반 회원 가입(인증x)")
    @PostMapping("/register")
    public MemberDTO insertMember(@RequestBody MemberDTO member) {
           return null;
       }

}
