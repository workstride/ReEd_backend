package com.works.reed.domain.course.dao.querydsl;

import com.works.reed.domain.course.dto.CourseInfo;
import com.works.reed.domain.course.dto.request.CoursePageRequest;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class CourseQueryRepositoryTests {

    @Autowired
    private CourseQueryRepository courseQueryRepository;

    @Test
    public void search(){
        CoursePageRequest build = CoursePageRequest.builder()
                .academyId(2L).build();
        List<CourseInfo> coursesByAcademyId = courseQueryRepository.findCoursesByAcademyId(build);
    }


}