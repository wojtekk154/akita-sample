import { PageEvent } from '@angular/material';

export const initPagination = (list: any[]) => {
  return {
    pageIndex: 0,
    previousPageIndex: null,
    pageSize: 5,
    length: list.length
  };
};

export const setPagingResults = ([list, pagination]: [any[], PageEvent]) => {
  const start = pagination.pageIndex * pagination.pageSize;
  const usersList = list.filter((item, index) => index >= start && index < (start + pagination.pageSize));

  return usersList;
};
