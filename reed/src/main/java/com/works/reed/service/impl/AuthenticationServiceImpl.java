package com.works.reed.service.impl;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.works.reed.dto.AuthenticationRequest;
import com.works.reed.dto.AuthenticationResponse;
import com.works.reed.dto.MemberDTO;
import com.works.reed.entity.Member;
import com.works.reed.entity.Token;
import com.works.reed.entity.TokenType;
import com.works.reed.repository.MemberRepository;
import com.works.reed.repository.TokenRepository;
import com.works.reed.service.AuthenticationService;
import com.works.reed.service.JwtService;
import io.jsonwebtoken.ExpiredJwtException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class AuthenticationServiceImpl implements AuthenticationService {

    private final MemberRepository memberRepository;
    private final TokenRepository tokenRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    @Override
    public AuthenticationResponse register(MemberDTO dto) {

        // 아이디 중복 체크
        Member member = Member.builder().memberId(dto.getMemberId()).memberPassword(passwordEncoder.encode(dto.getMemberPassword())).roleSet(memberRoleConverter(dto.getRoles())).memberName(dto.getMemberName()).memberEmail(dto.getMemberEmail()).memberTel(dto.getMemberTel()).build();
        memberRepository.save(member);

        return null;
    }

    @Override
    public AuthenticationResponse authenticate(AuthenticationRequest dto) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(dto.getMemberId(), dto.getMemberPassword()));
        Member member = memberRepository.findByMemberId(dto.getMemberId()).orElseThrow(() -> new UsernameNotFoundException(String.format("Member not found with id : %s", dto.getMemberId())));

        String jwtToken = jwtService.generateToken(member);
        String refreshToken = jwtService.generateRefreshToken(member);
        revokeAllMemberTokens(member);
        saveMemberToken(member, jwtToken);
        return AuthenticationResponse.builder().accessToken(jwtToken).refreshToken(refreshToken).role(member.getRoleSet().stream().map(role -> role.name()).collect(Collectors.toList())).build();
    }

    private void saveMemberToken(Member member, String jwtToken) {
        Token token = Token.builder()
                .member(member)
                .token(jwtToken)
                .tokenType(TokenType.BEARER)
                .expired(false)
                .revoked(false)
                .build();
        tokenRepository.save(token);
    }

    private void revokeAllMemberTokens(Member member) {
        List<Token> validUserTokens = tokenRepository.findAllValidTokenByMno(member.getMno());
        if (validUserTokens.isEmpty())
            return;
        validUserTokens.forEach(token -> {
            token.setExpired(true);
            token.setRevoked(true);
        });
        tokenRepository.saveAll(validUserTokens);
    }

    public AuthenticationResponse refreshToken(HttpServletRequest request) throws IOException {
        final String authHeader = Arrays.stream(request.getCookies()).filter(c -> c.getName().equals("refreshToken")).findFirst().map(Cookie::getValue).orElseThrow();
        log.debug(authHeader);
        final String refreshToken;
        final String memberId;
        if (authHeader == null) { //  || !authHeader.startsWith("Bearer ")
            return  null;
        }
//        refreshToken = authHeader.substring(7);
        memberId = jwtService.extractUsername(authHeader);
        if (memberId != null) {
            Member member = memberRepository.findByMemberId(memberId).orElseThrow(() -> new UsernameNotFoundException(String.format("Member not found with id : %s", memberId)));
            if (jwtService.isTokenValid(authHeader, member)) {
                var accessToken = jwtService.generateToken(member);
                revokeAllMemberTokens(member);
                saveMemberToken(member, accessToken);
                return AuthenticationResponse.builder().accessToken(accessToken).build();
            }
        }
        return null;
    }
}
