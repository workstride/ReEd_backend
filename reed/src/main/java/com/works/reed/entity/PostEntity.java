package com.works.reed.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "post")
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PostEntity {
    @Id
    @GeneratedValue
    @Column(name = "postId")
    private Long postId;

    @ManyToOne(fetch = FetchType.LAZY)
    private MemberEntity member;

    @Column(name = "postTitle", length = 30, nullable = false)
    private String postTitle;

    @Column(name = "postDetail", nullable = false)
    private String postDetail;

}
