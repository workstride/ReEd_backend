package com.works.reed.domain.parent.dao.querydsl;

import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;


@Repository
@RequiredArgsConstructor
public class ParentQueryRepositoryImpl implements ParentQueryRepository {

    private final JPAQueryFactory queryFactory;

}
