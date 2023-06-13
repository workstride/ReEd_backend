package com.works.reed.repository;

import com.works.reed.entity.Token;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


import java.util.List;
import java.util.Optional;

public interface TokenRepository extends JpaRepository<Token, Long> {

    @Query(value = " SELECT t FROM Token t INNER JOIN Member m " + "on t.member.mno = m.mno " + "where m.mno = :mno AND (t.expired = false OR t.revoked = false) ")
    public List<Token> findAllValidTokenByMno(@Param(value = "mno") Long mno);


    public Optional<Token> findByToken(String token);

}
