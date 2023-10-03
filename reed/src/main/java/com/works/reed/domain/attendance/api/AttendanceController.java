package com.works.reed.domain.attendance.api;

import com.works.reed.domain.attendance.application.AttendanceService;
import com.works.reed.domain.attendance.dto.request.AttendanceCodeRequest;
import com.works.reed.domain.attendance.dto.request.AttendanceRequest;
import com.works.reed.domain.attendance.dto.response.AttendanceCodeResponse;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Tag(name = "출석", description = "출석")
@SecurityRequirement(name = "BearerAuthentication")
@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/attendance")
public class AttendanceController {

    private final AttendanceService attendanceService;

    @PostMapping("")
    public void attendance(@Validated @RequestBody AttendanceRequest request) {
        attendanceService.attendance(request);
    }

    @PostMapping("/generate/code")
    @ResponseStatus(HttpStatus.CREATED)
    public AttendanceCodeResponse generateCode(@Validated @RequestBody AttendanceCodeRequest request) {
        return attendanceService.generateCode(request.toAttendanceCode());
    }

}
