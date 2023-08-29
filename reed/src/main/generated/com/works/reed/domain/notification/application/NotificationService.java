package com.works.reed.domain.notification.application;

import com.google.firebase.messaging.Message;
import com.works.reed.domain.auth.dto.request.AuthRequest;

public interface NotificationService {
    void saveToken(AuthRequest authRequest);
    void deleteToken(String id);
    void send(Message message);
}
