package com.works.reed.entity;

import jakarta.persistence.*;
import lombok.*;



@Entity
@Table(name = "token")
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
public class Token {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tno;

    @Column(length = 350, unique = true)
    private String token;

    @Enumerated(EnumType.STRING)
    @Builder.Default
    private TokenType tokenType = TokenType.BEARER;

    private boolean revoked;

    private boolean expired;

    @ManyToOne(fetch = FetchType.LAZY)
    private Member member;

}
