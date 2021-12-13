import { useEffect } from "react";
import { Redirect } from "react-router-dom";
import Layout from "../../components/Layout";
import { useUser } from "../../hooks/useUser";
import instance from "../../service/api";
import { Banner } from "./banner";
import { Category } from "./category";
import { Product } from "./product";

export function Home() {
  const { user }: any = useUser();

  if (user && user.length !== 0) {
    return <Redirect push to="/login"/>
  }

  return (
    <Layout>
      <Banner />
      <Category />
      <Product />
    </Layout>
  );
}
