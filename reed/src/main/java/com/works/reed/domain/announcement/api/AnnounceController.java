package com.works.reed.domain.announcement.api;

import com.works.reed.domain.announcement.application.AnnounceService;
import com.works.reed.domain.announcement.dto.Announce;
import com.works.reed.domain.announcement.dto.request.AnnounceRequest;
import com.works.reed.domain.announcement.mapper.AnnounceMapper;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@Tag(name = "공지", description = "공지")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/anno")
public class AnnounceController {

    private final AnnounceService announceService;

    @Operation(summary = "공지 업로드", description = "공지 업로드")
    @PostMapping("/upload")
    public void upLoad(Announce announce) {
        announceService.upLoad(announce);
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
