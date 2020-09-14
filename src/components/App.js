import React from "react";
import "../styles/main.scss";
import List from "./List";
import Form from "./Form";
import Header from "./Header";
import Hero from "./Hero";
import Info from "./Info";
import Footer from "./Footer";
import CallToAction from "./CallToAction";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Form />
      <List />
      <Info />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
