package com.works.reed.service;

import com.works.reed.dto.MemberDTO;
import com.works.reed.entity.MemberEntity;
import com.works.reed.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MemberServiceImpl implements MemberService {

    private final MemberRepository memberRepository;

    public MemberDTO register(MemberDTO member) {
        MemberEntity memberEntity = dtoToEntity(member);
        memberEntity = memberRepository.save(memberEntity);
        return entityToDto(memberEntity);
    }

    public MemberDTO read(String memberId){
         Optional<MemberEntity> optMember = memberRepository.findById(memberId);
        return (optMember.isPresent())?entityToDto(optMember.get()):null;
    }

    public void remove(String memberId) {
//            memberRepository.delete();
    }

    public void modify(MemberDTO memberDTO){
//        memberRepository.save();
    }

//
//    public List<MemberDTO> getAllMembers() {
//        return memberRepository.getAllMembers();
//    }
//

}
