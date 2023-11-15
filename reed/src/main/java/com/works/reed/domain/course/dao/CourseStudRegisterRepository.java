package com.works.reed.domain.course.dao;

import com.works.reed.domain.course.dto.request.CourseStudRegisterRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

public interface CourseStudRegisterRepository extends JpaRepository<CourseStudRegisterRequest, Long> {
}
