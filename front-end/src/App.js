import React from "react";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Info from "./components/Info/Info";
import Testimonials from "./components/Testimonials/Testimonials";
import Topic from "./components/Topic/Topic";

function App() {
  return (
    <>
      <Header />
      <Topic />
      <Info />
      <Blog />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
