package com.works.reed.domain.course.application;

import com.works.reed.domain.course.dao.CourseRepository;
import com.works.reed.domain.course.dao.CourseScheduleRepository;
import com.works.reed.domain.course.dao.CourseStudentRepository;
import com.works.reed.domain.course.domain.CourseEntity;
import com.works.reed.domain.course.domain.CourseScheduleEntity;
import com.works.reed.domain.course.dto.Course;
import com.works.reed.domain.course.dto.CourseSchedule;
import com.works.reed.domain.course.dto.CourseStudent;
import com.works.reed.domain.course.exception.NotFoundCourseException;
import com.works.reed.domain.course.mapper.CourseMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional(rollbackFor = Exception.class)
@Service
@RequiredArgsConstructor
public class CourseServiceImpl implements CourseService {

    private final CourseRepository courseRepository;
    private final CourseScheduleRepository courseScheduleRepository;
    private final CourseStudentRepository courseStudentRepository;
    private final CourseMapper courseMapper;

    @Override
    public void register(Course course, List<CourseSchedule> courseSchedules) {
        CourseEntity courseEntity = courseRepository.save(courseMapper.createCourse(course));
        courseScheduleRepository.saveAll(courseMapper.createCourseSchedulesWithCsno(courseEntity.getId(), courseSchedules));
    }

    @Override
    public void remove(Long courseId) {
        List<CourseScheduleEntity> classSchedules = courseScheduleRepository.findByCourseId(courseId).orElseThrow(() -> NotFoundCourseException.EXCEPTION);
        courseScheduleRepository.deleteAll(classSchedules);
        courseRepository.deleteById(courseId);
    }

    @Override
    public void registerCourses(CourseStudent courseStudent) {
        courseStudentRepository.save(courseMapper.createCourseStudent(courseStudent));
    }
}
