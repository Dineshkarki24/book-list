import { compose } from "redux";
/// <reference types="react-scripts" />

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

/**
 * Default Redux Action
 */
type DefaultAction<TPayload = any> = {
  type: string;
  payload?: TPayload;
};

interface DefaultState<TData = any> {
  data: TData;
  message: string;
  isFetching: boolean;
  isFailed: boolean;
  isSuccess: boolean;
  status: boolean;
}
