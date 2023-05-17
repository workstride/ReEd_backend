package com.works.reed.controller;

import com.works.reed.dto.PostDTO;
import com.works.reed.service.PostService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/posts")
public class PostController {

    private final PostService postService;

    @PostMapping("/upload")
    public void uploadPost(PostDTO postDTO) {
        postService.upload(postDTO);
    }

    @GetMapping("/list")
    public List readAllPosts() {
        return postService.readAllPosts();
    }
}
