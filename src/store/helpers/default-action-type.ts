interface DefaultDispatchType {
  progressDispatch: string;
  successDispatch: string;
  failureDispatch: string;
}
const initDispatchTypes = (actionName: string): DefaultDispatchType => {
  return {
    progressDispatch: actionName + "_PROGRESS",
    successDispatch: actionName + "_SUCCESS",
    failureDispatch: actionName + "_FAILURE",
  };
};

export default initDispatchTypes;
