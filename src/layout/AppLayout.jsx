import React from "react";
import Navbar from "../components/Navbar";

const AppLayout = ({ children }) => {
   return (
      <>
         <Navbar />
         <main className="container">{children}</main>
      </>
   );
};

export default AppLayout;
