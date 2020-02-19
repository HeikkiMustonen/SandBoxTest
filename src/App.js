import React from "react";
import "./styles.css";
import Test from "./Test";

export default function App() {
  return (
    <div className="App">
      <h1>CodeSandbox test</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Test nimi="Testing" description="Testaus 2" />
    </div>
  );
}
