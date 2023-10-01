package com.works.reed.domain.attendance.dao;

import com.works.reed.domain.attendance.domain.AttendanceCodeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;

public interface AttendanceCodeRepository extends JpaRepository<AttendanceCodeEntity, Long> {

    @Modifying
    @Query("UPDATE AttendanceCodeEntity ac SET ac.active=false WHERE ac.courseId=:courseId")
    void expireCode(@Param("courseId") Long courseId);

    Optional<AttendanceCodeEntity> findByCodeAndActive(String code, boolean active);

}
