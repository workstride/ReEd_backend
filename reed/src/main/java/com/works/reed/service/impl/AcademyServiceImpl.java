package com.works.reed.service.impl;

import com.works.reed.dto.AcademyDTO;
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

    public void register(String academy) {
        try {
            JSONObject object;
            JSONParser jsonParser = new JSONParser();

            JSONObject jsonObject = (JSONObject) jsonParser.parse(academy);

            JSONObject parseResponse = (JSONObject) jsonObject.get("response");
            JSONObject parseBody = (JSONObject) parseResponse.get("body");
            JSONArray array = (JSONArray) parseBody.get("items");

            for(int i = 0; i < array.size(); i++) {
                object = (JSONObject) array.get(i);


            }

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
