package com.works.reed.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.works.reed.dto.AcademyDTO;
import com.works.reed.service.AcademyService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;

@RestController
@RequiredArgsConstructor
public class AcademyController {

    private final AcademyService academyService;

    /**
     * json 받아서 academy 에 저장
     * @param SC_CODE
     * 시도 교육청 코드
     */
    @GetMapping("/register/academy/{SC_CODE}")
    public AcademyDTO academyApi(@PathVariable String SC_CODE) throws JsonProcessingException {

        StringBuilder result = new StringBuilder();
        ObjectMapper objectMapper = new ObjectMapper();
        try {
            //url 입력
            String apiUrl = "https://open.neis.go.kr/hub/acaInsTiInfo?" +
                    "KEY=f390b2a1b99845719dc6954d6765ee00" +
                    "&Type=JSON" +
                    "&ATPT_OFCDC_SC_CODE=" + SC_CODE +
                    "&pSize=1";
            URL url = new URL(apiUrl);
            HttpURLConnection urlConnection = (HttpURLConnection) url.openConnection();
            //GET 으로 JSON 값 받아옴
            urlConnection.setRequestMethod("GET");

            BufferedReader br = new BufferedReader(new InputStreamReader(urlConnection.getInputStream(), StandardCharsets.UTF_8));

            String returnLine;
            while((returnLine = br.readLine()) != null) {
                result.append(returnLine).append("\n");
            }

            urlConnection.disconnect();

        } catch (Exception e) {
            e.printStackTrace();
        }
        String s = String.valueOf(result);
        AcademyDTO academy = objectMapper.readValue(s, AcademyDTO.class);
        //System.out.println(academy);
        return academyService.register(academy);
    }
}
