package com.works.reed.entity;



import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import jakarta.persistence.*;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

@Entity
//@Table(name = "member")
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
public class Member extends BaseEntity implements UserDetails {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long mno;

//    @Id
    @Column(name = "id",  nullable = false, unique = true)
    private String memberId;

    @Column(name = "pw", nullable = false)
    private String memberPassword;

    @Column(name = "email", nullable = false)
    private String memberEmail;

    @Column(name = "name", nullable = false)
    private String memberName;

    @Column(name = "tel", nullable = false)
    private String memberTel;

//    @Column(name = "memberType", nullable = false)
//    private Integer memberType;

    @ElementCollection(fetch = FetchType.LAZY)
    @Builder.Default
    private Set<MemberRole> roleSet = new HashSet<>();

    public void addMemberRole(MemberRole memberRole) {
        roleSet.add(memberRole);
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return roleSet.stream().map(role ->new SimpleGrantedAuthority("ROLE_" + role.name())).collect(Collectors.toList());
    }

    @Override
    public String getPassword() {
        return memberPassword;
    }

    @Override
    public String getUsername() {
        return memberId;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}