import * as React from "react";
import { useDispatch } from "react-redux";
import { useAppSelector } from "hooks/hooks";
import { getBookListAction } from "store/modules/product/get-book-list";

interface IHomePageProps {}
type IBookData = {
  author: string;
  genre: string;
  id: number;
  image: string;
  name: string;
  price: string;
  published_date: Date;
  stock: number;
};
const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  const listBookData = useAppSelector((state) => state.listBookData);
  const dispatch = useDispatch();

  const initData = React.useCallback(() => {
    dispatch(getBookListAction());
  }, [dispatch]);

  React.useEffect(() => {
    initData();
  }, [initData]);

  console.log(listBookData);
  if (listBookData.isFetching) return <h6>Loading ...</h6>;
  return (
    <>
      <h1>Product</h1>
      <div className="row">
        {listBookData.data?.map((item: IBookData) => {
          return (
            <>
              <div className="col-1-of-4 card u-margin-bottom-medium">
                <img src={item.image} alt="" />
                <div className="card-body">
                  <h6>{item.name}</h6>
                  <ul>
                    <li>author:{item.author}</li>
                    <li>Genre:{item.genre}</li>
                    <li>Price:{item.price}</li>
                    <li>Published Date:{item.published_date}</li>
                    <li>stock:{item.stock}</li>
                  </ul>
                </div>
                <div className="card-footer">
                  <button className="btn btn-primary">Add to cart</button>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};
export default HomePage;
