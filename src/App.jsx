import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Dashboard from "./Components/Dashboard";
import TransactionHistory from "./Components/TransactionHistory";
import Footer from "./Components/Footer";
import AddTransaction from "./Components/AddTransaction";


function App() {
  return (

      <div>
        <Header />
        <Hero />
        <Dashboard />
        <TransactionHistory />
        <AddTransaction />
        <Footer />
      </div>
 
  );
}

export default App;
