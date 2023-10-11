package com.works.reed.domain.announcement.domain;

import com.works.reed.global.common.entity.BaseEntity;
import jakarta.persistence.*;
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
public class AnnounceEntity  extends BaseEntity {
    @Id
    @Column(name = "ann_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "ac_id", nullable = false)
    private Long academyId;

    @Column(name = "ann_writer", length = 20, nullable = false)
    private String annWriter;

    @Column(name = "ann_title", length = 30, nullable = false)
    private String annTitle;

    @Column(name = "ann_content", length = 500, nullable = false)
    private String annContent;


}
