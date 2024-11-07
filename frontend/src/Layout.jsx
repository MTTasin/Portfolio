import Header from "./Components/Header";
import Footer from "./Components/Footer";
import BackToTop from "./Components/BackToTop";
import ScrollIndicator from "./Components/ScrollIndicator";

export default function Layout({ children }) {
  return (
    <>
      <div className="font-siliguri flex flex-col h-screen">
        <ScrollIndicator />
        <Header />
        <div className="grow">{children}</div>
        <BackToTop />
        <Footer />
      </div>
    </>
  );
}
