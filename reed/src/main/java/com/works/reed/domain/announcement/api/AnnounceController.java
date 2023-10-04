package com.works.reed.domain.announcement.api;

import com.works.reed.domain.announcement.application.AnnounceService;
import com.works.reed.domain.announcement.dto.request.AnnounceRequest;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Tag(name = "공지", description = "공지")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/anno")
public class AnnounceController {

    private final AnnounceService announceService;

    @PostMapping("/upload")
    public void upLoad(AnnounceRequest request) {
        announceService.upLoad(request.toAnnounce());
    }
}
