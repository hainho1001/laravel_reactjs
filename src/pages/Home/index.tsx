import Layout from '../../components/Layout';
import { useCart } from '../../hooks/useCart';
import { useProducts } from '../../hooks/useProducts';

export function Home() {
  const {cartItems, increase, addCart}: any = useCart();
  const {loading, datas}: any = useProducts();
  
  function isInCart(data: any) {
    return !!cartItems.find((item: any) => item.name === data.name);
  }

  function renderDatas() {
    return datas.map((data: any, key: any) => {
      return(
        <div key={key} className="col-3 mb-4 d-flex">
          <div className="card p-2 w-100">
            <img  style={{display: "block", margin: "0 auto 10px", maxHeight: "200px", width: "200px"}} src={data.image} className="card-img-top" alt="..." />
            <div className="card-body d-flex flex-column justify-content-between">
              <h5 className="card-title">{data.name}</h5>
              <h3>$ {data.price}</h3>
              {
                  isInCart(data) && 
                  <button 
                  onClick={() => increase(data)}
                  className="btn btn-outline-primary btn-sm">Add more</button>
              }

              {
                  !isInCart(data) && 
                  <button 
                  onClick={() => addCart(data)}
                  className="btn btn-primary btn-sm">Add to cart</button>
              }
            </div>
          </div>
        </div>
      );
    });
  }

  return (
    <Layout>
        { loading
        ?
          <div style={{width: "100%", height: "100%", position: "fixed", top: "0", left: "0", right: "0", bottom: "0" }} className="d-flex justify-content-center align-items-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        :
        <div className="container">
          <div className="row">
            {renderDatas()}
          </div>
        </div>
        }
    </Layout>
  );
};