package com.works.reed.domain.mail.application;

import com.google.api.client.util.Value;
import com.works.reed.domain.mail.exception.MismatchEmailKeyException;
import com.works.reed.domain.mail.exception.NotFoundEmailException;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.InternetAddress;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.MailException;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.io.UnsupportedEncodingException;
import java.util.Random;

@Service
@Slf4j
@RequiredArgsConstructor
public class MailServiceImpl implements MailService {
    private final JavaMailSender javaMailSender;

    private final String mailKey = createKey();
    private String email;

    @Value("${spring.mail.username}")
    private String id;

    private String createKey() {
        StringBuilder key = new StringBuilder();
        Random rnd = new Random();

        for (int i = 0; i < 6; i++) { // 인증코드 6자리
            key.append((rnd.nextInt(10)));
        }
        return key.toString();
    }

    public MimeMessage createMessage(String mail)throws MessagingException {
        log.info("보내는 대상 : "+ mail);
        log.info("인증 번호 : " + mailKey);
        MimeMessage message = javaMailSender.createMimeMessage();

        message.addRecipients(MimeMessage.RecipientType.TO, mail);
        message.setFrom(id);
        message.setSubject("Reed 회원가입 인증 코드");
        String msg = "안녕하세요 Reed 서비스입니다." +
                "인증번호는 " + mailKey + "입니다.";

        message.setText(msg, "utf-8", "html");

        email = mail;

        return message;
    }

    public String sendMail(String mail)throws Exception {
        MimeMessage message = createMessage(mail);

        if(!mail.equals(email)) {
            throw NotFoundEmailException.EXCEPTION;
        }

        email = mail;
        try{
            javaMailSender.send(message);
        }catch(MailException es){
            es.printStackTrace();
            throw new IllegalArgumentException();
        }
        return mailKey;
    }

    public ResponseEntity verified(String mail, String key) {
        log.info(mail);
        log.info(key);

        if(!mail.equals(email)) {
            throw NotFoundEmailException.EXCEPTION;
        }
        if(!key.equals(mailKey)) {
            throw MismatchEmailKeyException.EXCEPTION;
        }

        return ResponseEntity.ok(key);
    }

}
