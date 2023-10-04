package com.works.reed.domain.course.dao;

import com.works.reed.domain.course.domain.CourseScheduleEntity;
import com.works.reed.domain.course.dto.CourseSchedule;
import com.works.reed.domain.course.enums.DayOfWeek;
import com.works.reed.domain.course.exception.NotFoundCourseException;
import com.works.reed.domain.course.mapper.CourseMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@SpringBootTest
class CourseScheduleRepositoryTests {

    @Autowired
    private CourseScheduleRepository courseScheduleRepository;
    @Autowired
    private CourseMapper courseMapper;


    @Test
    public void search() {
        LocalTime startTime = LocalTime.of(17, 25, 0);
        LocalTime endTime = LocalTime.of(12, 20, 0);
        Long courseId = 5L;

        DayOfWeek dayofWeek = DayOfWeek.values()[LocalDate.now().getDayOfWeek().getValue() - 1];
        List<CourseScheduleEntity> results = courseScheduleRepository.findByCourseId(courseId).orElseThrow(() -> NotFoundCourseException.EXCEPTION);
        CourseSchedule courseSchedule = results.stream().filter(schedule -> schedule.getDayOfWeek() == dayofWeek).findFirst()
                .map(courseMapper::toCourseSchedule)
                .orElseThrow(() -> NotFoundCourseException.EXCEPTION);

        courseSchedule.setStartTime(startTime);
        courseSchedule.setEndTime(endTime);

        courseScheduleRepository.save(courseMapper.createCourseSchedule(courseSchedule));
    }


}