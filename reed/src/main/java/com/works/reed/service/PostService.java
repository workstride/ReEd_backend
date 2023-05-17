package com.works.reed.service;

import com.works.reed.dto.MemberDTO;
import com.works.reed.dto.PostDTO;
import com.works.reed.entity.MemberEntity;
import com.works.reed.entity.PostEntity;

import java.util.List;

public interface PostService {
    public PostDTO upload(PostDTO postDTO);
    public PostDTO read(Integer postId);
    public List readAllPosts();
    public void change(Integer postId);
    public void delete(Integer postId);

    default PostEntity dtoToEntity(PostDTO dto) {
        PostEntity entity = PostEntity.builder()
                .postId(dto.getPostId())
                .postTitle(dto.getPostTitle())
                .postDetail(dto.getPostDetail())
                .build();
        return entity;
    }

    default PostDTO entityToDto(PostEntity entity) {
        PostDTO dto = PostDTO.builder()
                .postId(entity.getPostId())
                .postTitle(entity.getPostTitle())
                .postDetail(entity.getPostDetail())
                .build();
        return dto;
    }
}
