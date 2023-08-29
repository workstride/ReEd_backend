package com.works.reed.domain.notification.application;

import com.google.firebase.messaging.FirebaseMessaging;
import com.google.firebase.messaging.Message;
import com.works.reed.domain.auth.dto.request.AuthRequest;
import com.works.reed.domain.notification.dao.FCMTokenRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

@RequiredArgsConstructor
@Service
public class NotificationServiceImpl implements NotificationService {
    private final FCMTokenRepository fcmTokenRepository;

    public void sendCompletedMessage(String id) {
        if (!hasKey(id)) {
            return;
        }

        String token = getToken(id);
        Message message = Message.builder()
                .putData("title", "")
                .putData("content", ".")
                .setToken(token)
                .build();

        send(message);
    }

    public void send(Message message) {
        FirebaseMessaging.getInstance().sendAsync(message);
    }

    public void saveToken(AuthRequest authRequest) {
        if(StringUtils.hasText(authRequest.getToken()))
            fcmTokenRepository.saveToken(authRequest);
    }

    public void deleteToken(String id) {
        fcmTokenRepository.deleteToken(id);
    }

    private boolean hasKey(String id) {
        return fcmTokenRepository.hasKey(id);
    }

    private String getToken(String id) {
        return fcmTokenRepository.getToken(id);
    }
}
