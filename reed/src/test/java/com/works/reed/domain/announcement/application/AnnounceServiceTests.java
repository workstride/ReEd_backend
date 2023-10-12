package com.works.reed.domain.announcement.application;


import com.works.reed.domain.academy.application.querdsl.AcademyQueryService;
import com.works.reed.domain.announcement.dto.Announce;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class AnnounceServiceTests {

    @Autowired
    private AnnounceService announceService;
    @Autowired
    private AcademyQueryService academyQueryService;

    @Test
    public void testUpload() {

        System.out.println(academyQueryService.findByAcademyId(3L).getId());

        Announce entity = Announce.builder()
                .academyId(3L)
                .annWriter("대소학원 000")
                .annTitle("10/12일 휴강 안내")
                .annContent("개인사로 인하여 10/12일 수업을 휴강하게 되었습니다.")
                .build();
        announceService.upload(entity);
    }


}