import "../../styles/globals.scss";
import "@fontsource/alef";
import type { AppProps } from "next/app";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
