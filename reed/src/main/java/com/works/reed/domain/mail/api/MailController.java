package com.works.reed.domain.mail.api;

import com.works.reed.domain.mail.application.MailService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@Tag(name = "메일", description = "메일")
@Controller
@Slf4j
@RequestMapping("/api/mail")
@RequiredArgsConstructor
public class MailController {

    private final MailService mailService;

    @Operation(summary = "인증 코드 전송", description = "인증 코드 전송")
    @PostMapping("/send")
    public void mailSending(@RequestBody Map<String, String> mailMap) throws Exception {
        String mail = mailMap.get("mail");
        mailService.sendMail(mail);
    }

    @Operation(summary = "인증 코드 등록", description = "인증 코드 등록")
    @GetMapping("/verify")
    public ResponseEntity mailVerify(@RequestBody Map<String, String> mailMap) {
        String mail = mailMap.get("mail");
        String key = mailMap.get("key");
        return mailService.verified(mail, key);
    }

}
