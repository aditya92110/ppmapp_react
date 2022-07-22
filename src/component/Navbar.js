import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Typography,
} from "@material-ui/core";
import '../App.css';
import { Link } from "react-router-dom";

function Navbar() {

  return (
    <AppBar position="static">
      <CssBaseline />
      <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            LOGO
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 50 }}>
            PPM_APP
          </Typography>        
          <div className="links" >
            <Link to="/" className="links2">
              Home
            </Link>
            <Link to="/projects" className="links2">
              Projects
            </Link>
            <Link to="/dictionary" className="links2">
              Dictionary
            </Link>
          </div>        
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
