import { compose } from "redux";
/// <reference types="react-scripts" />

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
