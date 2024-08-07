import React from "react";
import PageContainer from "./pages/page-container";
import Header from "./assets/header";
import Footer from "./assets/footer";

const App = () => {
  React.useEffect(() => {
    document.title = `KVCL ${new Date().getFullYear()}`
  }, []);
  return (
    <div>
      <Header />
      <PageContainer />
      <Footer />
    </div>
  );
};

export default App;
