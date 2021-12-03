import Layout from "../../components/Layout";
import { Banner } from "./banner";
import { Category } from "./category";
import { Product } from "./product";

export function Home() {
  return (
    <Layout>
      <Banner/>
      <Category/>
      <Product/>
    </Layout>
  );
}
