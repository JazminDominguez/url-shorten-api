import React from "react";
import "../styles/main.scss";
import List from "./List";
import Form from "./Form";
import Header from "./Header";

function App() {
  return (
    <div>
      <Header />
      <Form />
      <List />
    </div>
  );
}

export default App;
