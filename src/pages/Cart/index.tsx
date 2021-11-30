import Layout from "../../components/Layout";
import { CartItem } from "./CartItem";

export function Cart() {
  return (
    <>
      <Layout>
        <div className="container">
          <div className="text-center mt-5">
            <h1>Cart</h1>
            <p>This is the Cart Page.</p>
          </div>
          {<CartItem />}
        </div>
      </Layout>
    </>
  );
}
