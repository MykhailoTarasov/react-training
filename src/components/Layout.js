import { Outlet } from "react-router-dom";
import { Navigation } from "./Navigation";
import { Toaster } from "react-hot-toast";

export const Layout = () => {
    return (
      <div>
        <header>
          <Navigation />
        </header>
  
        <Outlet />
  
        <Toaster position="top-right" />
      </div>
    );
  };