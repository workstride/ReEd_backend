package com.works.reed.domain.announcement.domain;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Builder
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "tbl_announce")
public class AnnounceEntity {
    @Id
    @Column(name = "ann_id")
    private Long id;

    @Column(length = 20, nullable = false)
    private String annWriter;

    @Column(length = 20, nullable = false)
    private String annTitle;

    @Column(length = 500, nullable = false)
    private String annContent;


}
