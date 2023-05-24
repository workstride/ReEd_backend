package com.works.reed.handler;


import com.works.reed.exception.ObjectValidationException;
import io.jsonwebtoken.ExpiredJwtException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
@Slf4j
public class JwtExceptionHandler {

    @ExceptionHandler(ExpiredJwtException.class)
    @ResponseStatus(HttpStatus.UNAUTHORIZED)
    public ExceptionResponse handle(ExpiredJwtException exp) {
        return ExceptionResponse
                .builder()
                .errorMsg("JWT expired.")
                .errorSource(exp.getMessage())
//                .validationErrors(exp.vil)
                .build();
    }

}
