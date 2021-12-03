import { Footer, Header, Nav } from "./shared";

const Layout = ({children}: any) => {
  return (
  <>
    <Nav/>
    <Header />
    <main>
      {children}
    </main>
    <Footer/>
  </>
  );
}

export default Layout;
