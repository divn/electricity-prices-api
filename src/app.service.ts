// @ts-nocheck
import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { map } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  getTodayAndTomorrow(_params): string {
    let start = new Date(new Date().setHours(23, 59, 59, 999));
    start.setDate(start.getDate() - 1);
    start = start.toISOString();

    let end = new Date(new Date().setHours(23, 59, 59, 999));
    end.setDate(end.getDate() + 1);
    end = end.toISOString();

    return this.httpService
      .get(
        `https://dashboard.elering.ee/api/nps/price?start=${start}&end=${end}`,
      )
      .pipe(
        map((response) => response.data),
        map((data) => data.data.fi),
      );
  }
}
