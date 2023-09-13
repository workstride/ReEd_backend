package com.works.reed.domain.mail.api;

import com.works.reed.domain.mail.application.MailService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

@Tag(name = "메일", description = "메일")
@RestController
@Slf4j
@RequestMapping("/api/mail")
@RequiredArgsConstructor
public class MailController {

    private final MailService mailService;

    @PostMapping("/certification")
    @ResponseBody
    public String mailConfirm(@RequestBody String mail) throws Exception {
        String code = mailService.sendSimpleMessage(mail);
        log.info("인증코드 : " + code);
        return code;
    }

}
