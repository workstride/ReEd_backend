package com.works.reed.service;

import com.works.reed.dto.AcademyDTO;
import com.works.reed.entity.Academy;

public interface AcademyService {
    public AcademyDTO register(AcademyDTO academy);

    default Academy dtoToEntity(AcademyDTO dto) {
        Academy entity = Academy.builder()
                .ACA_ASNUM(dto.getACA_ASNUM())
                .ATPT_OFCDC_SC_CODE(dto.getATPT_OFCDC_SC_CODE())
                .ACA_NM(dto.getACA_NM())
                .build();
        return entity;
    }
    default AcademyDTO entityToDto(Academy entity) {
        AcademyDTO dto = AcademyDTO.builder()
                .ACA_ASNUM(entity.getACA_ASNUM())
                .ATPT_OFCDC_SC_CODE(entity.getATPT_OFCDC_SC_CODE())
                .ACA_NM(entity.getACA_NM())
                .build();
        return dto;
    }
}

