import React from "react";
import "../styles/main.scss";
import List from "./List";
import Form from "./Form";
import Header from "./Header";
import Hero from "./Hero";
import Info from "./Info";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Form />
      <List />
      <Info />
    </div>
  );
}

export default App;
