import React, { useState } from "react";
import {
  Drawer,
  List,
  IconButton,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuOpenRoundedIcon from "@mui/icons-material/MenuOpenRounded";

export default function DrawerComp({ links }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Drawer PaperProps={{ className: 'drawer' }} anchor="right" open={open} onClose={() => setOpen(false)}>
        <List >
          {links.map((links, index) => (
            <ListItemButton>
              <ListItemIcon>
                <ListItemText>{links}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton className="iconButton" onClick={() => setOpen(!open)}>
        <MenuOpenRoundedIcon />
      </IconButton>
    </>
  );
}
