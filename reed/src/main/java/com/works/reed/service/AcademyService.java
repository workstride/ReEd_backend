package com.works.reed.service;

import com.works.reed.dto.AcademyDTO;
import com.works.reed.dto.MemberDTO;
import com.works.reed.entity.AcademyEntity;
import com.works.reed.entity.MemberEntity;

public interface AcademyService {
    public AcademyDTO register(AcademyDTO academy);

    default AcademyEntity dtoToEntity(AcademyDTO dto) {
        AcademyEntity entity = AcademyEntity.builder()
                .ACA_ASNUM(dto.getACA_ASNUM())
                .ATPT_OFCDC_SC_CODE(dto.getATPT_OFCDC_SC_CODE())
                .ACA_NM(dto.getACA_NM())
                .build();
        return entity;
    }
    default AcademyDTO entityToDto(AcademyEntity entity) {
        AcademyDTO dto = AcademyDTO.builder()
                .ACA_ASNUM(entity.getACA_ASNUM())
                .ATPT_OFCDC_SC_CODE(entity.getATPT_OFCDC_SC_CODE())
                .ACA_NM(entity.getACA_NM())
                .build();
        return dto;
    }
}

