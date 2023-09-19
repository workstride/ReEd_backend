package com.works.reed.domain.mail.api;

import com.works.reed.domain.mail.application.MailService;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Tag(name = "메일", description = "메일")
@Controller
@Slf4j
@RequestMapping("/api/mail")
@RequiredArgsConstructor
public class MailController {

    private final MailService mailService;

    @PostMapping("/certification")
    public void mailCertification(@RequestParam("mail") String mail) throws Exception {
        mailService.sendMail(mail);
    }

    @GetMapping("/verifications")
    public ResponseEntity verificationEmail(@RequestParam("mail") @Valid String mail,
                                            @RequestParam("code") String authCode) {
        boolean response = mailService.verified(mail, authCode);

        return new ResponseEntity<>(HttpStatus.OK);
    }

}
