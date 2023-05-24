package com.works.reed.service;

import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.logout.LogoutHandler;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public interface LogoutService extends LogoutHandler {
    public void logout(HttpServletRequest request,  HttpServletResponse response,  Authentication authentication);
}
