import React from "react";
import { Link } from "react-router-dom";
import {
	List,
	ListItem,
	ListItemText,
	ListItemIcon,
	IconButton,
} from "@mui/material";
import {
	Dashboard,
	Info,
	ChevronLeft,
	ChevronRight,
} from "@mui/icons-material";
import ThemeToggle from "./ThemeToggle";

const Sidebar = ({ isOpen, toggleSidebar }) => (
	<div className={`sidebar bg-light ${isOpen ? "open" : "closed"}`}>
		<div className="sidebar-header">
			<h3 className="m-0 p-3">Noki Ed</h3>
		</div>
		<List component="nav">
			<ListItem component={Link} to="/">
				<ListItemIcon>
					<Dashboard />
				</ListItemIcon>
				<ListItemText primary="Dashboard" />
			</ListItem>
			<ListItem component={Link} to="/about">
				<ListItemIcon>
					<Info />
				</ListItemIcon>
				<ListItemText primary="About" />
			</ListItem>
		</List>
		<div className="p-3">
			<ThemeToggle />
		</div>
		<div className="sidebar-footer">
			<IconButton onClick={toggleSidebar}>
				{isOpen ? <ChevronLeft /> : <ChevronRight />}
			</IconButton>
		</div>
	</div>
);

export default Sidebar;
