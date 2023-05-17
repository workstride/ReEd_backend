package com.works.reed.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.works.reed.entity.MemberEntity;
public interface MemberRepository extends JpaRepository<MemberEntity, String> {

}
