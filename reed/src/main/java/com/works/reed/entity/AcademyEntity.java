package com.works.reed.entity;

import com.works.reed.dto.MemberDTO;
import jakarta.persistence.*;

@Entity
@Table(name = "academy")
public class AcademyEntity {
    @Id
    @Column(name = "ACA_ASNUM")
    private Long ACA_ASNUM;
    @Column(name = "ATPT_OFCDC_SC_CODE")
    private String ATPT_OFCDC_SC_CODE;
    @Column(name = "ACA_NM")
    private String ACA_NM;
    @ManyToOne
    private MemberEntity member;
}
