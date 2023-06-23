package com.works.reed.service;

import com.works.reed.dto.AuthenticationRequest;
import com.works.reed.dto.AuthenticationResponse;
import com.works.reed.dto.MemberDTO;
import com.works.reed.entity.MemberRole;
import jakarta.servlet.http.HttpServletRequest;


import java.io.IOException;
import java.util.HashSet;
import java.util.List;
import java.util.stream.Collectors;

public interface AuthenticationService {
    AuthenticationResponse register(MemberDTO dto);

    AuthenticationResponse authenticate(AuthenticationRequest dto);


    AuthenticationResponse refreshToken(HttpServletRequest request)  throws IOException;
     AuthenticationResponse refreshToken(String token) throws IOException;

    default HashSet<MemberRole> memberRoleConverter(List<String> roles) {
        return roles.stream().map(role -> {
            try {
                return MemberRole.valueOf(role.toUpperCase());
            } catch (Exception e) {
                return null;
            }
        }).filter(role -> role != null).collect(Collectors.toCollection(HashSet::new));
    }

}
