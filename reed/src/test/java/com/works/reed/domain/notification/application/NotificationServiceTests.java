package com.works.reed.domain.notification.application;

import com.google.firebase.messaging.FirebaseMessagingException;
import com.works.reed.domain.notification.dto.Notification;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutionException;

@SpringBootTest
class NotificationServiceTests {

    @Autowired
    private NotificationService notificationService;

    @Test
    void testNotification() throws FirebaseMessagingException, ExecutionException, InterruptedException {

        List<String> emails = new ArrayList<>();
        emails.add("student@naver.com");

        Notification push = Notification.builder().emails(emails)
                .title("test2")
                .message("test2,,,,")
                .build();
        notificationService.sendNotification(push);

    }
}