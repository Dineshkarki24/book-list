import { useAppDispatch, useAppSelector } from "hooks/hooks";
import * as React from "react";
import { useDispatch } from "react-redux";
import { getBookListAction } from "store/modules/product/get-book-list";

interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  const listBookData = useAppSelector((state) => state.listBookData);
  const dispatch = useDispatch();

  const initData = React.useCallback(() => {
    dispatch(getBookListAction());
  }, []);

  React.useEffect(() => {
    initData();
  }, [initData]);

  console.log(listBookData);
  if (listBookData.isFetching) return <h6>Loading ...</h6>;
  return <h1>Home page</h1>;
};

export default HomePage;
