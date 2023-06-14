package com.works.reed.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.works.reed.dto.AcademyDTO;
import com.works.reed.service.AcademyService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;


import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.List;

@Tag(name = "학원 등록", description = "학원 등록 API")
@RestController
@RequestMapping("/api/v1/academy")
@RequiredArgsConstructor
@Slf4j
public class AcademyController {

    private final AcademyService academyService;
    @Value("${neis.api.key}")
    private String neisKey;


    @Operation(summary = "학원 정보 가져옴", description = "...")
    @GetMapping("/register/academy/{SC_CODE}")
    public List<AcademyDTO> academyApi(@PathVariable String SC_CODE) throws JsonProcessingException {

        List<AcademyDTO> academyList = null;
        ObjectMapper objectMapper = new ObjectMapper();

        RestTemplate restTemplate = new RestTemplate();
        URI uri = UriComponentsBuilder
                .fromUriString("https://open.neis.go.kr")
                .path("hub/acaInsTiInfo")
                .queryParam("KEY", neisKey)
                .queryParam("Type", "JSON")
                .queryParam("pSize", "10")
                .queryParam("ATPT_OFCDC_SC_CODE", SC_CODE)
                .build()
                .toUri();
        ResponseEntity<String> responseEntity = restTemplate.exchange(uri, HttpMethod.GET, null, String.class);

        try {
            JsonNode jsonNode = objectMapper.readValue(responseEntity.getBody(), JsonNode.class);
            JsonNode acaInsTiInfo = jsonNode.get("acaInsTiInfo");
            JsonNode rows = acaInsTiInfo.get(1).get("row");
            academyList = objectMapper.readValue(rows.toString(), new TypeReference<List<AcademyDTO>>() {
            });
        } catch (Exception e) {
            log.info(e.getMessage());
        }

        return academyList;
    }
}
