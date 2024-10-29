import Header from "./Components/Header";
import Footer from "./Components/Footer";

export default function Layout({ children }) {
  return (
    <>
      <div className="font-siliguri flex flex-col h-screen">
        <Header />
        <div className="grow">{children}</div>
        <Footer />
      </div>
    </>
  );
}
