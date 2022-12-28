import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/api/TodayAndTomorrow/fi (GET)', () => {
    return request(app.getHttpServer())
      .get('/api/TodayAndTomorrow/fi')
      .expect(200);
  });
  it('/api/TodayAndTomorrow/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/api/TodayAndTomorrow/')
      .expect(404);
  });
});
