import React from "react";
import "./App.scss";
import CreditCard from "./CreditCard";

const App = () => {
  return (
    <div className="app flex min-h-screen flex-col items-center justify-between p-24 bg-gray-500">
      <CreditCard />
    </div>
  );
};

export default App;
