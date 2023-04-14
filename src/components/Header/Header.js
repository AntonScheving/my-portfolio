import React, { useState } from "react";
import "../Styles/Media-Queries.css";
import "../Header/Header.css";
import DrawerComp from "../Drawer/DrawerComp.js"
import Grid from "@mui/material/Grid";
import LogoDevIcon from '@mui/icons-material/LogoDev';
import {
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  useTheme,
  useMediaQuery,
  Typography,
} from "@mui/material";
// import Toolbar from "@mui/material/Toolbar";
// // import Typography from "@mui/material/Typography";
// // import SpellcheckIcon from "@material-ui/icons-SpellcheckIcon";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Drawer from "@mui/material/Drawer";
// import MenuOpenRoundedIcon from '@mui/icons-material/MenuOpenRounded';
// import List from "@mui/material/List";

export default function Header({ links }) {
  const [value, setValue] = useState();
  
  const theme = useTheme();
  // isMatch is a booleean - If the match is true the theme (Drawer) will be displayed
  const isMatch = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <AppBar className="navBackground">
      <Toolbar>

        {/* <Grid container spacing={1} [1=3px]> */}
        {isMatch ? (<> 
          <Typography>
              <LogoDevIcon />
            </Typography>
          <DrawerComp links={links} />
        
        </> ): (
        <Grid className="navCenter" container>
          <Grid item xs={1}>
            <Typography>
              <LogoDevIcon />
            </Typography>
            
          </Grid>
          <Grid item xs={11}>
            <Tabs
              indicatorColor="secondary"
              textColor="inherit"
              value={value}
              onChange={(e, val) => setValue(val)}
            >
              {links.map((link, index) => (
                <Tab className="NavLink" key={index} label={link} />
              ))}
              {/* <Tab className="NavLink" label="Packages" />
                <Tab className="NavLink" label="Projects" />
                <Tab className="NavLink" label="Contact" />
                <Tab className="NavLink" label="CV/Resume" />
                <Tab className="NavLink" label="About Me" /> */}
            </Tabs>
          </Grid>
          <Grid item xs={1} />
        </Grid> 
        )}
        
      </Toolbar>
    </AppBar>
  );
}
