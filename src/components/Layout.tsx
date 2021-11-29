import { Header } from "./shared";

const Layout = ({children}: any) => {
  return (
  <>
    <Header />
    <main>
      {children}
    </main>
  </>
  );
}

export default Layout;
