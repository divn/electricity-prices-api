import {
  CacheInterceptor,
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

  @Get(`/api/TodayAndTomorrow/:country`)
  getTodayAndTomorrow(@Param() params: string): any {
    return this.appService.getTodayAndTomorrow(params);
  }
}
