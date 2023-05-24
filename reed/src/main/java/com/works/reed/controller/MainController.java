package com.works.reed.controller;


import lombok.extern.log4j.Log4j2;
import lombok.extern.slf4j.Slf4j;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
@RequestMapping("/")
@Slf4j
public class MainController {

    private static final Logger logger = LogManager.getLogger(MainController.class);


    @GetMapping({"", "index"})
    public String hello() {
        return "index.html";
    }

}
