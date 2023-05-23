package com.works.reed.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.nio.charset.StandardCharsets;

@RestController
public class AcademyController {

    @GetMapping("/register/academy/{SC_CODE}")
    public String academyApi(@PathVariable String SC_CODE) {

        StringBuffer result = new StringBuffer();
        try {
            String apiUrl = "https://open.neis.go.kr/hub/acaInsTiInfo?" +
                    "KEY=f390b2a1b99845719dc6954d6765ee00" +
                    "&Type=JSON" +
                    "&ATPT_OFCDC_SC_CODE=" + SC_CODE +
                    "&pSize=1";
            URL url = new URL(apiUrl);
            HttpURLConnection urlConnection = (HttpURLConnection) url.openConnection();
            urlConnection.setRequestMethod("GET");

            BufferedReader br = new BufferedReader(new InputStreamReader(urlConnection.getInputStream(), StandardCharsets.UTF_8));

            String returnLine;
            result.append("<xmp>");
            while((returnLine = br.readLine()) != null) {
                result.append(returnLine + "\n");
            }
            urlConnection.disconnect();

        } catch (Exception e) {
            e.printStackTrace();
        }
        return result + "</xmp>";
    }
}
