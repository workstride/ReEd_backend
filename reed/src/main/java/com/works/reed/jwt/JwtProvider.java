package com.works.reed.jwt;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.net.Authenticator;

@Component
public class JwtProvider {

    @Value(value = "${jwt.password}")
    private String jwtSecret;//암호화 키

    @Value(value = "${jwt.AccessExpirationTime}")
    private int AccessExpirationInM; // Access토큰 만료일

    @Value(value = "${jwt.RefreshExpirationTime}")
    private int RefreshExpirationInM; // Refresh토큰 만료일

    public String generateAccessToken(Authentication authentication){

    }


}
