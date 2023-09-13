package com.works.reed.domain.mail.application;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

import java.io.UnsupportedEncodingException;

@Service
public interface MailService  {
    public MimeMessage createMessage(String to)throws MessagingException, UnsupportedEncodingException;
    public String sendSimpleMessage(String to)throws Exception;

}
