package com.works.reed.jwt;

import com.works.reed.dto.MemberDTO;
import lombok.Getter;
import org.codehaus.jackson.annotate.JsonIgnore;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Getter
public class MemberPrincipal implements UserDetails {

    private String memberId;
    private String memberEmail;
    private String memberName;
    private String memberTel;
    private Integer memberType;

    @JsonIgnore
    private String memberPassword;

    private Collection<? extends GrantedAuthority> authorities;

    public MemberPrincipal(String memberId, String memberEmail, String memberName, String memberTel,
                           Integer memberType, String memberPassword, Collection<? extends GrantedAuthority> authorities){
        this.memberId = memberId;
        this.memberEmail = memberEmail;
        this.memberName = memberName;
        this.memberTel = memberTel;
        this.memberType = memberType;
        this.memberPassword = memberPassword;

        if (authorities == null){
            this.authorities = null;
        } else {
            this.authorities = new ArrayList<>(authorities);
        }
    }

    public static MemberPrincipal create(MemberDTO memberDTO){
        
    }





    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public String getPassword() {
        return null;
    }

    @Override
    public String getUsername() {
        return null;
    }

    @Override
    public boolean isAccountNonExpired() {
        return false;
    }

    @Override
    public boolean isAccountNonLocked() {
        return false;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return false;
    }

    @Override
    public boolean isEnabled() {
        return false;
    }
}
