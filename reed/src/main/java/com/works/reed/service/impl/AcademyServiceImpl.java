package com.works.reed.service.impl;

import com.works.reed.dto.AcademyDTO;
import com.works.reed.entity.AcademyEntity;
import com.works.reed.repository.AcademyRepository;
import com.works.reed.service.AcademyService;
import lombok.RequiredArgsConstructor;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AcademyServiceImpl implements AcademyService {

    private final AcademyRepository academyRepository;

    public AcademyDTO register(AcademyDTO academy) {
        AcademyEntity academyEntity = dtoToEntity(academy);
        return entityToDto(academyEntity);
    }
}
