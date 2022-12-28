import {
  CacheInterceptor,
  CacheTTL,
  Controller,
  Get,
  Param,
  UseInterceptors,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
@UseInterceptors(CacheInterceptor)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @CacheTTL(60 * 15)
  @Get(`/api/TodayAndTomorrow/:country`)
  getTodayAndTomorrow(@Param() params: string): object {
    return this.appService.getTodayAndTomorrow(params);
  }
}
