import Navbar from '../components/navbar/navbar';
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <Navbar data-theme="cupcake">
      <Component {...pageProps} />
    </Navbar>
  );
}

export default MyApp
