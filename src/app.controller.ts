import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(`/api/TodayAndTomorrow/:country`)
  getTodayAndTomorrow(@Param() params): string {
    return this.appService.getTodayAndTomorrow(params);
  }
}
