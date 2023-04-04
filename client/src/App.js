import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Footer from "./components/pages/Footer";
import Signup from "./components/pages/Signup";
import MyShop from "./components/pages/MyShop";

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/MyShop" element={<MyShop />}/>
            <Route path="/Login" element={<Login />} />         
            <Route path="/Signup" element={<Signup />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}
export default App;
