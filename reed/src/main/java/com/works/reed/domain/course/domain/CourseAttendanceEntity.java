package com.works.reed.domain.course.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "tbl_course_attendance")
public class CourseAttendanceEntity {
    @Id
    private String studentName;
    @Column
    private boolean isAttendance;
}
