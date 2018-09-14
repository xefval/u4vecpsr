import { Action } from '@ngrx/store';
import { Course } from './course.model';

export enum CoursesActionTypes {
  Found = '[Courses] Found',
  Create = '[Courses] Create',
  Edit = '[Courses] Edit',
  Delete = '[Courses] Delete',
  Search = '[Courses] Search',
  LoadNextPage = '[Courses] LoadNextPage',
  PageLoaded = '[Courses] PageLoaded',
  PagesUpdated = '[Courses] PagesUpdated',
  LoadAuthors = '[Courses] LoadAuthors',
  AuthorsUpdated = '[Courses] AuthorsUpdated',
}

export class Found implements Action {
  readonly type = CoursesActionTypes.Found;

  constructor(public payload: any) {}
}

export class Create implements Action {
  readonly type = CoursesActionTypes.Create;

  constructor(public payload: any) {}
}

export class Edit implements Action {
  readonly type = CoursesActionTypes.Edit;

  constructor(public payload: any) {}
}

export class Delete implements Action {
  readonly type = CoursesActionTypes.Delete;

  constructor(public payload: any) {}
}

export class Search implements Action {
  readonly type = CoursesActionTypes.Search;

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

export class LoadAuthors implements Action {
  readonly type = CoursesActionTypes.LoadAuthors;

  constructor() {}
}

export class AuthorsUpdated implements Action {
  readonly type = CoursesActionTypes.AuthorsUpdated;

  constructor(public payload: any) {}
}

export type CoursesActionsUnion =
  | Found
  | Create
  | Delete
  | Edit
  | Search
  | LoadNextPage
  | PageLoaded
  | PagesUpdated
  | LoadAuthors
  | AuthorsUpdated;

export interface CoursesState {
  authors: any[] | null;
  itemsPerPage: number;
  pageNum: number;
  foundItems: Course[] | null;
  loadedItems: Course[];
  searchString: string | null;
}

export const initialState: CoursesState = {
  authors: null,
  itemsPerPage: 5,
  pageNum: 0,
  foundItems: null,
  loadedItems: [],
  searchString: null
};

export function coursesReducer(state: CoursesState = initialState, action: CoursesActionsUnion) {
  switch (action.type) {
    case CoursesActionTypes.Found:
      return {
        ...state,
        foundItems: action.payload.data,
      };

    case CoursesActionTypes.Search:
      let newStr = state.searchString;

      if (action.payload.text.length > 2) {
        newStr = action.payload.text;
      } else if (action.payload.text.length === 0) {
        newStr = null;
      }

      return {
        ...state,
        searchString: newStr,
      };

    case CoursesActionTypes.PageLoaded:
      return {
        ...state,
        pageNum: state.pageNum + 1,
        loadedItems: state.loadedItems.concat(action.payload.data),
      };

    case CoursesActionTypes.PagesUpdated:
      return {
        ...state,
        loadedItems: action.payload.data,
      };

    case CoursesActionTypes.AuthorsUpdated:
      return {
        ...state,
        authors: action.payload.data,
      };

    default:
      return state;
  }
}
