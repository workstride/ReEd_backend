package com.works.reed.domain.mail.api;

import com.works.reed.domain.mail.application.MailService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Tag(name = "메일", description = "메일")
@Controller
@Slf4j
@RequestMapping("/api/mail")
@RequiredArgsConstructor
public class MailController {

    private final MailService mailService;

    @PostMapping("/certification")
    public void mailCertification(@Validated @RequestParam("mail") String mail) throws Exception {
        mailService.sendMail(mail);
    }

    @GetMapping("/verification")
    public void verificationEmail(@Validated @RequestParam("mail") String mail, @RequestParam("key") String key) {
        log.info(mailService.verified(mail, key));
    }

}
