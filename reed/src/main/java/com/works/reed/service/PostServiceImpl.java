package com.works.reed.service;

import com.works.reed.dto.PostDTO;
import com.works.reed.entity.PostEntity;
import com.works.reed.repository.PostRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PostServiceImpl implements PostService {

    private final PostRepository postRepository;

    public PostDTO upload(PostDTO postDTO) {
        PostEntity postEntity = dtoToEntity(postDTO);
        postEntity = postRepository.save(postEntity);
        return entityToDto(postEntity);
    }

    public PostDTO read(Integer postId) {
        //PostDTO postDTO = postRepository.findById();
        return null;
    }

    public List readAllPosts() {
        return postRepository.findAll();
    }

    public void change(Integer postId) {
    }

    public void delete(Integer postId) {

    }
}
