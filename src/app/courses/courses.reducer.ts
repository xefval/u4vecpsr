import { Action } from '@ngrx/store';
import { Course } from './course.model';

export enum CoursesActionTypes {
  LoadNextPage = '[Courses] LoadNextPage',
  PageLoaded = '[Courses] PageLoaded'
}

export class LoadNextPage implements Action {
  readonly type = CoursesActionTypes.LoadNextPage;

  constructor() {}
}

export class PageLoaded implements Action {
  readonly type = CoursesActionTypes.PageLoaded;

  constructor(public payload: any) {}
}

export type CoursesActionsUnion =
  | LoadNextPage
  | PageLoaded;

export interface CoursesState {
  itemsPerPage: number;
  pageNum: number;
  foundItems: Course[];
  loadedItems: Course[];
}

export const initialState: CoursesState = {
  itemsPerPage: 5,
  pageNum: 0,
  foundItems: [],
  loadedItems: []
};

export function coursesReducer(state: CoursesState = initialState, action: CoursesActionsUnion) {
  switch (action.type) {
    case CoursesActionTypes.PageLoaded:
      return {
        ...state,
        pageNum: state.pageNum + 1,
        loadedItems: state.loadedItems.concat(action.payload),
      };

    default:
      return state;
  }
}
