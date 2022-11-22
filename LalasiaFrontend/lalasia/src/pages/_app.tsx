import "../../styles/globals.scss";
import "@fontsource/alef";
import type { AppProps } from "next/app";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { RecoilRoot } from "recoil";
import Modal from "../components/Modal";
import RecoilNexus from "recoil-nexus";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <RecoilNexus />
      <div className="container mx-auto">
        <Modal />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </RecoilRoot>
  );
}
