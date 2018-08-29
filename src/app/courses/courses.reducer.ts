import { Action } from '@ngrx/store';
import { Course } from './course.model';

export enum CoursesActionTypes {
  Found = '[Courses] Found',
  ClearFound = '[Courses] ClearFound',
  Create = '[Courses] Create',
  Delete = '[Courses] Delete',
  Search = '[Courses] Search',
  LoadNextPage = '[Courses] LoadNextPage',
  PageLoaded = '[Courses] PageLoaded',
  PagesUpdated = '[Courses] PagesUpdated'
}

export class Found implements Action {
  readonly type = CoursesActionTypes.Found;

  constructor(public payload: any) {}
}

export class ClearFound implements Action {
  readonly type = CoursesActionTypes.ClearFound;

  constructor() {}
}

export class Create implements Action {
  readonly type = CoursesActionTypes.Create;

  constructor(public payload: any) {}
}

export class Delete implements Action {
  readonly type = CoursesActionTypes.Delete;

  constructor(public payload: any) {}
}

export class Search implements Action {
  readonly type = CoursesActionTypes.LoadNextPage;

  constructor(public payload: any) {}
}

export class LoadNextPage implements Action {
  readonly type = CoursesActionTypes.LoadNextPage;

  constructor() {}
}

export class PageLoaded implements Action {
  readonly type = CoursesActionTypes.PageLoaded;

  constructor(public payload: any) {}
}

export class PagesUpdated implements Action {
  readonly type = CoursesActionTypes.PagesUpdated;

  constructor(public payload: any) {}
}

export type CoursesActionsUnion =
  | Found
  | ClearFound
  | Create
  | Delete
  | Search
  | LoadNextPage
  | PageLoaded
  | PagesUpdated;

export interface CoursesState {
  itemsPerPage: number;
  pageNum: number;
  foundItems: Course[] | null;
  loadedItems: Course[];
}

export const initialState: CoursesState = {
  itemsPerPage: 5,
  pageNum: 0,
  foundItems: null,
  loadedItems: []
};

export function coursesReducer(state: CoursesState = initialState, action: CoursesActionsUnion) {
  switch (action.type) {
    case CoursesActionTypes.Found:
      return {
        ...state,
        foundItems: action.payload.data,
      };

      case CoursesActionTypes.ClearFound:
      return {
        ...state,
        foundItems: [],
      };

    case CoursesActionTypes.PageLoaded:
      return {
        ...state,
        pageNum: state.pageNum + 1,
        loadedItems: state.loadedItems.concat(action.payload.data),
      };

    default:
      return state;
  }
}
