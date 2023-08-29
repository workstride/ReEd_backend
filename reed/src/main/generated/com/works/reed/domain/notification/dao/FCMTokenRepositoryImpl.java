package com.works.reed.domain.notification.dao;

import com.works.reed.domain.auth.dto.request.AuthRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.stereotype.Repository;

@RequiredArgsConstructor
@Repository
public class FCMTokenRepositoryImpl implements FCMTokenRepository {

    private final StringRedisTemplate redisTemplate;
    public void saveToken(AuthRequest authRequest) {
        redisTemplate.opsForValue()
                .set(authRequest.getPw(), authRequest.getToken());
    }
    public String getToken(String id) {
        return redisTemplate.opsForValue().get(id);
    }
    public void deleteToken(String id) {
        redisTemplate.delete(id);
    }
    public boolean hasKey(String email) {
        return redisTemplate.hasKey(email);
    }
}
