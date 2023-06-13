package com.works.reed.repository;

import jakarta.validation.constraints.NotBlank;
import org.springframework.data.jpa.repository.EntityGraph;
import org.springframework.data.jpa.repository.JpaRepository;
import com.works.reed.entity.Member;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;


import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long> {
    Boolean existsByMemberId(@NotBlank String email);

    @EntityGraph(attributePaths = {"roleSet"}, type = EntityGraph.EntityGraphType.LOAD)
    @Query("select m from Member m where m.memberId = :memberId ")
    Optional<Member> findByMemberId(@Param("memberId") String memberId);

    @EntityGraph(attributePaths = {"roleSet"}, type = EntityGraph.EntityGraphType.LOAD)
   	@Query("select m from Member m where m.mno = :mno ")
   	Optional<Member> findByMno(@Param("mno") Long mno);
}
