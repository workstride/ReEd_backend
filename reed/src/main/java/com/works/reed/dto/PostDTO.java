package com.works.reed.dto;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PostDTO {

    private Long postId;
    private String postUser;
    private String postTitle;
    private String postDetail;
}
