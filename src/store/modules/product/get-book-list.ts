import axios, { AxiosRequestConfig } from "axios";
import { baseUrl } from "environment/baseUrl";
import { Dispatch } from "redux";
import { apiDetails } from "store/apiDetails/indes";
import initDispatchTypes from "store/helpers/default-action-type";
import initialState from "store/helpers/default-state";
import { DefaultAction, DefaultState } from "../../../react-app-env";

export const getBookListAction = () => async (dispatch: Dispatch) => {
  // Init Dispatch Types
  const dispatchTypes = initDispatchTypes(apiDetails.getBookList.actionName);

  // Progress Dispatch
  dispatch({ type: dispatchTypes.progressDispatch, payload: null });

  const axiosReqParams: AxiosRequestConfig = {
    baseURL: baseUrl,
    url: apiDetails.getBookList.controllerName,
    method: apiDetails.getBookList.requestMethod,
    responseType: "json",
    timeout: 60 * 3 * 1000,
  };
  const res = await axios.request(axiosReqParams);
  console.log(res);
  if (res.status === 200) {
    // Success Dispatch
    dispatch({
      type: dispatchTypes.successDispatch,
      payload: {
        data: res.data,
        message: "Data fetched successfully!",
        status: res.status,
      },
    });
  } else {
    // Failure Dispatch
    dispatch({
      type: dispatchTypes.failureDispatch,
      payload: { ...res.data },
    });
  }
};

export const getBookListReducer = (
  state: DefaultState = initialState,
  action: DefaultAction
) => {
  const actionName = apiDetails.getBookList.actionName;
  switch (action.type) {
    case actionName + "_PROGRESS": {
      return {
        ...state,
        isFetching: true,
        isFailed: false,
        isSuccess: false,
      };
    }

    case actionName + "_SUCCESS": {
      const { data, message, status } = action.payload!;

      return {
        ...state,
        isFetching: false,
        isFailed: false,
        isSuccess: true,
        data,
        message,
        status,
      };
    }

    case actionName + "_FAILURE": {
      if (action.payload) {
        const { data, message, status } = action.payload;

        return {
          ...state,
          isFetching: false,
          isFailed: true,
          isSuccess: false,
          data: data || null,
          message: message || "Unable to process request",
          status,
        };
      } else {
        return {
          ...state,
          isFetching: false,
          isFailed: true,
          isSuccess: false,
          data: null,
          message: "Unable to process request",
          status: false,
        };
      }
    }

    case actionName + "_RESET":
      return {
        ...initialState,
      };

    default: {
      return state;
    }
  }
};
