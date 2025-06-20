import { Route } from './Route';

export interface RoutesResponse {
  routes: Route[];
  totalCounts: number;
  page: number;
  pageSize: number;
}
