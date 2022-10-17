import Banner from "./banner";
import Footer from "./footer";
import Header from "./header";

const Navbar = ({children}) => {
  return (
    <>
          <Header />
          <Banner/>
      <main>{children}</main>
      <Footer />
    </>
  );
}
export default Navbar;
