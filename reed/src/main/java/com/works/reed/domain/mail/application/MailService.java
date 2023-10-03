package com.works.reed.domain.mail.application;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.io.UnsupportedEncodingException;

@Service
public interface MailService  {
    public MimeMessage createMessage(String to)throws MessagingException, UnsupportedEncodingException;
    public String sendMail(String to)throws Exception;

    ResponseEntity verified(String mail, String key);
}
