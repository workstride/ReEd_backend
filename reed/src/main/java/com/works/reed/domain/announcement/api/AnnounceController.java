package com.works.reed.domain.announcement.api;

import com.works.reed.domain.announcement.application.AnnounceService;
import com.works.reed.domain.announcement.dto.request.AnnounceRequest;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;

import org.springframework.http.HttpStatus;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@Tag(name = "공지", description = "공지")
@SecurityRequirement(name = "BearerAuthentication")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/ann")
public class AnnounceController {

    private final AnnounceService announceService;

    @Operation(summary = "공지 업로드", description = "공지 업로드")
    @PostMapping("/upload")
    @ResponseStatus(HttpStatus.CREATED)
    public void upload(@Validated @RequestBody AnnounceRequest announce) {
        announceService.upload(announce);
    }

    @Operation(summary = "공지 수정", description = "공지 수정")
    @PutMapping("{id}")
    public void edit(AnnounceRequest request, @PathVariable Long id) {
        announceService.edit(request, id);
    }

    @Operation(summary = "공지 삭제", description = "공지 삭제")
    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id) {
        announceService.delete(id);
    }

}
