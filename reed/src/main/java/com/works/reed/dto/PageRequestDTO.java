package com.works.reed.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;

@Builder
@AllArgsConstructor
@Data
public class PageRequestDTO {
    @Schema(description = "Page", defaultValue = "1")
    private int page;
    @Schema(description = "Size", defaultValue = "10")
    private int size;
    @Schema(description = "Type", defaultValue = "")
    private String type;
    @Schema(description = "Keyword", defaultValue = "")
    private String keyword;

    public PageRequestDTO() {
        this.page = 1;
        this.size = 10;
    }

    public Pageable getPageable(Sort sort) {

        return PageRequest.of(page - 1, size, sort);

    }
}
