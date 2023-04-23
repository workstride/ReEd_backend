package com.works.reed.repository;

import com.works.reed.entity.MemberEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, String> {

    User findByUsernameAndPassword(String username, String password);
}

