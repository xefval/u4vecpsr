import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  LoadToken = '[Auth] LoadToken',
  Login = '[Auth] Login',
  LoginSuccess = '[Auth] LoginSuccess',
  LoginFailure = '[Auth] LoginError',
  Logout = '[Auth] Logout',
  UpdateUserInfo = '[Auth] UpdateUserInfo'
}

export class LoadToken implements Action {
  readonly type = AuthActionTypes.LoadToken;

  constructor(public payload: any) {}
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;

  constructor(public payload: any) {}
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccess;

  constructor(public payload: any) {}
}

export class LoginFailure implements Action {
  readonly type = AuthActionTypes.LoginFailure;

  constructor(public payload: any) {}
}

export class Logout implements Action {
  readonly type = AuthActionTypes.Logout;
}

export class UpdateUserInfo implements Action {
  readonly type = AuthActionTypes.UpdateUserInfo;

  constructor(public payload: any) {}
}

export type AuthActionsUnion =
  | LoadToken
  | Login
  | LoginSuccess
  | LoginFailure
  | Logout
  | UpdateUserInfo;

export interface AuthState {
  loggedIn: boolean;
  user: any | null;
  err: string | null;
  token: string | null;
}

export const initialState: AuthState = {
  loggedIn: false,
  user: null,
  err: null,
  token: null
};

export function authReducer(state: AuthState = initialState, action: AuthActionsUnion) {
  switch (action.type) {
    case AuthActionTypes.LoadToken:
      return {
        ...state,
        loggedIn: true,
        token: action.payload.token,
        err: null
      };

    case AuthActionTypes.LoginSuccess:
      return {
        ...state,
        loggedIn: true,
        token: action.payload.token,
        err: null
      };

    case AuthActionTypes.LoginFailure:
      return {
        ...state,
        err: action.payload
      };

    case AuthActionTypes.Logout:
      return {
        ...state,
        loggedIn: false,
        token: null,
        user: null,
        err: null
      };

    case AuthActionTypes.UpdateUserInfo:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
}
