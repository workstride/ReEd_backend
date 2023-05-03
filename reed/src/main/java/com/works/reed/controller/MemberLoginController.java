package com.works.reed.controller;

import com.works.reed.domain.dto.Member;
import jakarta.annotation.PostConstruct;
import jakarta.persistence.Id;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
public class MemberLoginController {
    private Map<String, Member> MemberMap;

    @PostConstruct
    public void init() {

        MemberMap = new HashMap<String,Member>();
        MemberMap.put("1",new Member(1L,"mason","chul1106","박준범",
                "01011112222","beom090800@gmail.com","*"));
    }
    @GetMapping("/member/{No}")
    public Member getMember(@PathVariable("No") Long No){
        return MemberMap.get(No);
    }

    @GetMapping("/member/all")
    public List<Member> getMemberList(){
        return new ArrayList<Member>(MemberMap.values());
    }

    @PostMapping("/member/{No}")
    public void putMember(@PathVariable("MemberNo") Long MemberNo, @RequestParam("MemberId") String MemberId, @RequestParam("MemberPassword") String MemberPassword,
                          @RequestParam("MemberName") String MemberName, @RequestParam("MemberTel") String MemberTel,
                          @RequestParam("MemberEamil") String MemberEamil, @RequestParam("image") String image,
                          @RequestParam("createdAt")String createdAt){
        Member member = new Member(MemberNo,MemberId,MemberPassword,MemberName,MemberTel,MemberEamil,image,createdAt);
        MemberMap.put(MemberId,member);
    }
    @PutMapping("/member/{No}")
    public void PutMember(@PathVariable("MemberNo") Long MemberNo, @RequestParam("MemberId") String MemberId, @RequestParam("MemberPassword") String MemberPassword, @RequestParam("MemberName") String MemberName, @RequestParam("MemberTel") String MemberTel, @RequestParam("MemberEamil") String MemberEamil, @RequestParam("image") String image, @RequestParam("createdAt")String createdAt){
        Member member = new MemberMap.get(MemberNo);
        member.setMemberId(MemberId);
        member.setMemberPassword(MemberPassword);
        member.setMemberName(MemberName);
        member.setMemberTel(MemberTel);
        member.setMemberEamil(MemberEamil);
        member.setImage(image);
        member.setCreatedAt(createdAt);
    }
    @DeleteMapping("/member/{No}")
    public void deleteMember(@PathVariable("MemberNo")Long MemberNo){
        MemberMap.remove(MemberNo);
    }
}
