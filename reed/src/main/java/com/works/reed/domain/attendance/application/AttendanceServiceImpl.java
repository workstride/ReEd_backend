package com.works.reed.domain.attendance.application;

import com.works.reed.domain.attendance.dao.AttendanceCodeRepository;
import com.works.reed.domain.attendance.dao.AttendanceRepository;
import com.works.reed.domain.attendance.domain.AttendanceCodeEntity;
import com.works.reed.domain.attendance.dto.AttendanceCode;
import com.works.reed.domain.attendance.dto.request.AttendanceRequest;
import com.works.reed.domain.attendance.dto.response.AttendanceCodeResponse;
import com.works.reed.domain.attendance.exception.NotFoundAttendanceCodeException;
import com.works.reed.domain.attendance.mapper.AttendanceMapper;
import com.works.reed.domain.course.dao.querydsl.CourseStudentQueryRepository;
import com.works.reed.domain.course.dto.CourseStudent;
import com.works.reed.domain.course.exception.NotFoundCourseException;
import com.works.reed.global.common.dao.MemberSecurity;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(rollbackFor = Exception.class)
@RequiredArgsConstructor
public class AttendanceServiceImpl implements AttendanceService {

    private final AttendanceRepository attendanceRepository;
    private final AttendanceCodeRepository attendanceCodeRepository;
    private final CourseStudentQueryRepository courseStudentQueryRepository;
    private final MemberSecurity memberSecurity;
    private final AttendanceMapper attendanceMapper;

    @Override
    public void attendance(AttendanceRequest request) {
        AttendanceCode attendanceCode = attendanceCodeRepository.findByCodeAndActive(request.getCode(), true)
                .map(attendanceMapper::toAttendanceCode)
                .orElseThrow(() -> NotFoundAttendanceCodeException.EXCEPTION);
        CourseStudent courseStudent = courseStudentQueryRepository.findCourseStudent(attendanceCode.getCourseId(), memberSecurity.getMember().getId()).orElseThrow(() -> NotFoundCourseException.EXCEPTION);
        attendanceRepository.save(attendanceMapper.createAttendanceEntity(courseStudent.getId()));
    }

    @Override
    public AttendanceCodeResponse generateCode(AttendanceCode attendanceCode) {
        attendanceCodeRepository.expireCode(attendanceCode.getCourseId());
        AttendanceCodeEntity attendanceCodeEntity = attendanceCodeRepository.save(attendanceMapper.createAttendanceCodeEntity(attendanceCode));
        return AttendanceCodeResponse.builder().code(attendanceCodeEntity.getCode()).date(attendanceCodeEntity.getRegDate()).build();
    }


}
