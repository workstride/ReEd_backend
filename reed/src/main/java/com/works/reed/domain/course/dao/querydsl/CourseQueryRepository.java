package com.works.reed.domain.course.dao.querydsl;

import com.works.reed.domain.course.dto.CourseInfo;
import com.works.reed.domain.course.dto.request.CoursePageRequest;
import org.springframework.data.domain.Page;

import java.util.List;

public interface CourseQueryRepository {
    List<CourseInfo> findCoursesByAcademyId(CoursePageRequest request);
}
