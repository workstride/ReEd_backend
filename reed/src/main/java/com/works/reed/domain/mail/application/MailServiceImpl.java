package com.works.reed.domain.mail.application;

import com.google.api.client.util.Value;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.InternetAddress;
import jakarta.mail.internet.MimeMessage;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
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

    public MimeMessage createMessage(String to)throws MessagingException, UnsupportedEncodingException {
        log.info("보내는 대상 : "+ to);
        log.info("인증 번호 : " + mailKey);
        MimeMessage  message = javaMailSender.createMimeMessage();

        message.addRecipients(MimeMessage.RecipientType.TO, to);
        message.setSubject("Reed 회원가입 인증 코드");
        String msg = "안녕하세요 Reed 서비스입니다." +
                "인증번호는 " + mailKey + "입니다.";

        message.setText(msg, "utf-8", "html");
        message.setFrom("reedu06@gmail.com");

        return message;
    }

    public String sendMail(String to)throws Exception {
        MimeMessage message = createMessage(to);
        try{
            javaMailSender.send(message);
        }catch(MailException es){
            es.printStackTrace();
            throw new IllegalArgumentException();
        }
        return mailKey;
    }

    public boolean verified(String mail, String authCode) {
        return authCode.equals(mailKey);
    }

}
