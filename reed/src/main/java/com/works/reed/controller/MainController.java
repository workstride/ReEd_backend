package com.works.reed.controller;



import lombok.extern.slf4j.Slf4j;

import org.springframework.stereotype.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
@RequestMapping("/")
@Slf4j
public class MainController {

    @GetMapping({"", "index"})
    public String hello() {
        return "index.html";
    }

}
