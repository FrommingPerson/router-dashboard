import { ResolveFn } from '@angular/router';
import { RouteService } from '../../../../Services/route.service';
import { inject } from '@angular/core';

export const mainPageResolver: ResolveFn<boolean> = (route, state) => {
  const service = inject(RouteService);

  const page = Number(route.paramMap.get('page')) || 1;
  const pageSize = Number(route.paramMap.get('pageSize')) || 25;

  service.getRoutes({ page, pageSize });

  return true;
};
