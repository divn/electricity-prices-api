import { HttpService } from '@nestjs/axios';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { catchError, map } from 'rxjs';

@Injectable()
export class AppService {
  constructor(private readonly http: HttpService) {}

  async getTodayAndTomorrow(_params: string): Promise<any> {
    const start = new Date(new Date().setHours(23, 59, 59, 999));
    start.setDate(start.getDate() - 1);
    const starttime = start.toISOString();

    const end = new Date(new Date().setHours(23, 59, 59, 999));
    end.setDate(end.getDate() + 1);
    const endtime = end.toISOString();

    return this.http
      .get(
        `https://dashboard.elering.ee/api/nps/price?start=${starttime}&end=${endtime}`,
      )
      .pipe(
        map((response) => response.data),
        map((data) => {
          return data.data.fi;
        }),
        map((items) => {
          const finalItems = items.map((item) => ({
            timestamp: new Date(item.timestamp * 1000),
            pricePerKwh: item.price / 1000,
          }));
          return finalItems;
        }),
      )
      .pipe(
        catchError(() => {
          throw new ForbiddenException('API not available');
        }),
      );
  }
}
