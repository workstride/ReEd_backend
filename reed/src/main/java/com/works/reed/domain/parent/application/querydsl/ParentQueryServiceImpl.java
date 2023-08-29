package com.works.reed.domain.parent.application.querydsl;

import com.works.reed.domain.parent.dao.querydsl.ParentQueryRepository;
import com.works.reed.domain.parent.dto.ParentInfo;
import com.works.reed.domain.parent.exception.NotFoundParentException;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Transactional(readOnly = true)
@Service
@RequiredArgsConstructor
public class ParentQueryServiceImpl implements ParentQueryService {

    private final ParentQueryRepository parentQueryRepository;

}
