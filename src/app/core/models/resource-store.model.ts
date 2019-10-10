import { EntityState } from '@datorama/akita';

export interface ResourceModel {
  id: number;
  name: string;
  year: number;
  color: string;
  pantone_value: string;
}

export interface ResourcePagination {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: ResourceModel[];
}

export interface ResourceStore extends EntityState<ResourcePagination> {
}
