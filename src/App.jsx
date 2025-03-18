import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Dashboard from "./Components/Dashboard";
import TransactionHistory from "./Components/TransactionHistory";
import Footer from "./Components/Footer";
import AddTransaction from "./Components/AddTransaction";
import { ClerkProvider, SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

// Get Clerk frontend API from environment variable
const clerkFrontendApi = process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

function App() {
  return (
    <ClerkProvider frontendApi={clerkFrontendApi}>
      <div>
        <Header />
        <Hero />
        <SignedIn>
          <Dashboard />
          <TransactionHistory />
          <AddTransaction />
        </SignedIn>
        <SignedOut>
          <RedirectToSignIn />
        </SignedOut>
        <Footer />
      </div>
    </ClerkProvider>
  );
}

export default App;
