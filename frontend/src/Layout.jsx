import Header from "./Components/Header";


export default function Layout({ children }) {
    return (
      <>
        <div className="font-siliguri flex flex-col h-screen">
          <Header />
          
          <div className="grow">{children}</div>
          
        </div>
      </>
    );
  }