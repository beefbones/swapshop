import React, { useState } from "react";
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Login from "./pages/Login";
import Footer from "./pages/Footer";
// import Signup from "./pages/Signup";
export default function Container() {
  const [currentPage, setCurrentPage] = useState("Home");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "Detail") {
      return <Detail />;
    }
    return <Login />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="bg-gray-800">
      {/* We are passing the currentPage from state and the function to update it */}
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}

      <Footer />
    </div>
  );
}
