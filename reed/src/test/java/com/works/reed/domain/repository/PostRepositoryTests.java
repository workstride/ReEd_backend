package com.works.reed.domain.repository;

import com.works.reed.entity.MemberEntity;
import com.works.reed.repository.MemberRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@SpringBootTest
public class PostRepositoryTests {
    @Autowired
    private PostRepository postRepository;
    @Autowired
    private MemberRepository memberRepository;

    @Transactional
    @Test
    public void testFindBy(){
        Optional<PostEntity> result = postRepository.findById(52L);
        PostEntity postEntity = result.get();
        System.out.println(postEntity);
        System.out.println("====================================================");
        System.out.println(postEntity.getMember());
    }

    @Test
    public void testInsert(){
        Optional<MemberEntity> result = memberRepository.findById("qaqa");
        if(result.isPresent()){

            PostEntity build = PostEntity.builder()
                    .postTitle("공지")
                    .postDetail("안녕하세요")
                    .member(result.get())
                    .build();
            postRepository.save(build);

        }

    }
}
