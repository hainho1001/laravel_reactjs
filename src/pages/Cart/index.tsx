import { MinusCircleIcon, PlusCircleIcon, TrashIcon } from '../../components/icons';
import Layout from '../../components/Layout';
import { useCart } from '../../hooks/useCart';

export function Cart() {
  const {cartItems, increase, decrease, removeItem}: any = useCart();
  
  function renderDatas() {
    return cartItems.map((data: any, key: any) => {
      return(
        <tr key={key}>
          <th scope="row">{key + 1}</th>
          <td>{data.name}</td>
          <td>
            <img style={{width: "100px"}} src={data.image} className="card-img-top" alt={data.name} />
          </td>
          <td>{data.quantity}</td>
          <td>
            <button
              onClick={() => increase(data)}
              className="btn btn-primary btn-sm me-2 mb-1">
                  <PlusCircleIcon width={"20px"}/>
            </button>
            {
              data.quantity > 1 &&
              <button
              onClick={() => decrease(data)}
              className="btn btn-danger btn-sm mb-1">
                <MinusCircleIcon width={"20px"}/>
              </button>
            }
            {
              data.quantity === 1 &&
              <button
                onClick={() => removeItem(data)}
                className="btn btn-danger btn-sm mb-1">
                <TrashIcon width={"20px"}/>
              </button>
            }
          </td>
        </tr>
      );
    });
  }

  return (
    <>
      <Layout>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Image</th>
              <th scope="col">Quantity</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              renderDatas()
            }
          </tbody>
        </table>
      </Layout>
    </>
  );
};
