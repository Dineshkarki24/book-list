interface DefaultState<TData = any> {
  data: TData;
  message: string;
  isFetching: boolean;
  isFailed: boolean;
  isSuccess: boolean;
  status: boolean;
}

const initialState: DefaultState = {
  data: null,
  message: "",
  isFetching: false,
  isFailed: false,
  isSuccess: false,
  status: false,
};

export default initialState;
