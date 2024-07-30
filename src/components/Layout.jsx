import React, { useState } from "react";
import { IconButton } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import Sidebar from "./Sidebar";
import AppRoutes from "../routes";
import "../App.scss";

const Layout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className={`app-container d-flex ${sidebarOpen ? "sidebar-open" : ""}`}>
      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="content-wrapper flex-grow-1">
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={toggleSidebar}
          className="d-md-none sidebar-toggle"
        >
          <MenuIcon />
        </IconButton>
        <main className="main-content">
          <AppRoutes />
        </main>
        <footer className="app-footer">
          <p>© 2024 {import.meta.env.VITE_APP_NAME}</p>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
