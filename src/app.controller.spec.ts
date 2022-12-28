import { HttpModule } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('/api/TodayAndTomorrow/', () => {
    it('should return prices for today and tomorrow', async () => {
      expect(await appController.getTodayAndTomorrow('fi')).toBe(Promise<any>);
    });
  });
});
