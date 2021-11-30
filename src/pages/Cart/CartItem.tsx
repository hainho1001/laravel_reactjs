import { Link } from "react-router-dom";
import {
  MinusCircleIcon,
  PlusCircleIcon,
  TrashIcon,
} from "../../components/icons";
import { useCart } from "../../hooks/useCart";

export function CartItem() {
  const {
    cartItems,
    increase,
    decrease,
    removeItem,
    itemCount,
    total,
    clearItem,
    checkout,
    handleCheckout
  }: any = useCart();

  function renderDatas() {
    return cartItems.map((data: any, key: any) => {
      return (
        <tr key={key}>
          <th scope="row">{key + 1}</th>
          <td>
            <p>{data.name}</p>
            <h5>${data.price}</h5>
          </td>
          <td>
            <img
              style={{ width: "100px" }}
              src={data.image}
              className="card-img-top"
              alt={data.name}
            />
          </td>
          <td>{data.quantity}</td>
          <td>
            <button
              onClick={() => increase(data)}
              className="btn btn-primary btn-sm me-2 mb-1"
            >
              <PlusCircleIcon width={"20px"} />
            </button>
            {data.quantity > 1 && (
              <button
                onClick={() => decrease(data)}
                className="btn btn-danger btn-sm mb-1"
              >
                <MinusCircleIcon width={"20px"} />
              </button>
            )}
            {data.quantity === 1 && (
              <button
                onClick={() => removeItem(data)}
                className="btn btn-danger btn-sm mb-1"
              >
                <TrashIcon width={"20px"} />
              </button>
            )}
          </td>
        </tr>
      );
    });
  }

  return (
    <>
      {cartItems.length > 0 ? (
        <div className="row">
          <div className="col-9 p-4">
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Name</th>
                  <th scope="col">Image</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>{renderDatas()}</tbody>
            </table>
          </div>
          <div className="col-3 p-4">
            <div className="card card-body">
              <p className="mb-1">Total Items</p>
              <h4 className=" mb-3 txt-right">{itemCount}</h4>
              <p className="mb-1">Total Payment</p>
              <h3 className="m-0 txt-right">${total}</h3>
              <hr className="my-4" />
              <div className="text-center">
                <button
                  onClick={() => handleCheckout()}
                  type="button"
                  className="btn btn-primary mb-2"
                >
                  CHECKOUT
                </button>
                <button
                  onClick={() => clearItem()}
                  type="button"
                  className="btn btn-outlineprimary btn-sm"
                >
                  CLEAR
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="p-3 text-center text-muted">Your cart is empty</div>
      )}
      {checkout && (
        <div className="p-3 text-center text-success">
          <p>Checkout successfull</p>
          <Link to="/" className="btn btn-outline-success btn-sm">
            BUY MORE
          </Link>
        </div>
      )}
    </>
  );
}
