package com.works.reed.domain.attendance.application;

import com.works.reed.domain.attendance.dto.AttendanceCode;
import com.works.reed.domain.attendance.dto.request.AttendanceRequest;
import com.works.reed.domain.attendance.dto.response.AttendanceCodeResponse;

public interface AttendanceService {
    void attendance(AttendanceRequest request);

    AttendanceCodeResponse generateCode(AttendanceCode attendanceCode);
}
