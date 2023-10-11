package com.works.reed.domain.announcement.application;

import com.works.reed.domain.announcement.dto.Announce;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class AnnounceServiceTests {

    @Autowired
    private AnnounceService announceService;

    @Test
    public void testUpload() {
        Announce entity = Announce.builder()
                .annWriter("대소학원 김건우")
                .annTitle("10/12일 휴강 안내")
                .annContent("개인사로 인하여 10/12일 수업을 휴강하게 되었습니다.")
                .build();
        announceService.upLoad(entity);
    }


}