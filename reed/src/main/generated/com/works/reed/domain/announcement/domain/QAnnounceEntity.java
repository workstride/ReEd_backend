package com.works.reed.domain.announcement.domain;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;


/**
 * QAnnounceEntity is a Querydsl query type for AnnounceEntity
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QAnnounceEntity extends EntityPathBase<AnnounceEntity> {

    private static final long serialVersionUID = -914318954L;

    public static final QAnnounceEntity announceEntity = new QAnnounceEntity("announceEntity");

    public final com.works.reed.global.common.entity.QBaseEntity _super = new com.works.reed.global.common.entity.QBaseEntity(this);

    public final NumberPath<Long> academyId = createNumber("academyId", Long.class);

    public final StringPath annContent = createString("annContent");

    public final StringPath annTitle = createString("annTitle");

    public final StringPath annWriter = createString("annWriter");

    public final NumberPath<Long> id = createNumber("id", Long.class);

    //inherited
    public final DateTimePath<java.time.LocalDateTime> modDate = _super.modDate;

    //inherited
    public final DateTimePath<java.time.LocalDateTime> regDate = _super.regDate;

    public QAnnounceEntity(String variable) {
        super(AnnounceEntity.class, forVariable(variable));
    }

    public QAnnounceEntity(Path<? extends AnnounceEntity> path) {
        super(path.getType(), path.getMetadata());
    }

    public QAnnounceEntity(PathMetadata metadata) {
        super(AnnounceEntity.class, metadata);
    }

}

