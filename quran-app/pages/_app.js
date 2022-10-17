import Navbar from '../components/navbar/navbar';
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return    (
    <Navbar>
      <Component {...pageProps} />
    </Navbar>
  );
}

export default MyApp
