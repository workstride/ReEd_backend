package com.works.reed.domain.announcement.domain;

import com.works.reed.domain.academy.domain.AcademyEntity;
import com.works.reed.global.common.entity.BaseEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.experimental.SuperBuilder;

@Entity
@SuperBuilder
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "tbl_announce")
public class AnnounceEntity  extends BaseEntity {
    @Id
    @Column(name = "ann_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name="ac_id")
    AcademyEntity academy;

    @Column(name = "ann_writer", length = 20, nullable = false)
    private String annWriter;

    @Column(name = "ann_title", length = 30, nullable = false)
    private String annTitle;

    @Column(name = "ann_content", length = 500, nullable = false)
    private String annContent;


}
