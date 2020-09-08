import React from "react";
import "../styles/main.scss";
import List from "./List";
import Form from "./Form";
import Header from "./Header";
import Hero from "./Hero";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Form />
      <List />
    </div>
  );
}

export default App;
