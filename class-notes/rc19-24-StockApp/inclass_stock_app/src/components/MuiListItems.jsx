import React from "react";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import Toolbar from "@mui/material/Toolbar";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { IndeterminateCheckBoxOutlined } from "@mui/icons-material";

const links = [
  {
    title: "Dashboard",
    url: "/stock",
    icon: "",
  },
  {
    title: "Purchases",
    url: "/stock/purchases",
    icon: "",
  },
  {
    title: "Sales",
    url: "/stock/sales",
    icon: "",
  },
  {
    title: "Firms",
    url: "/stock/firms",
    icon: "",
  },
];

const MuiListItems = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Toolbar />
      <List>
        {links.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton onClick={() => navigate(item.url)}>
              <Box
                sx={{
                  width: 24,
                  height: 24,
                  backgroundColor: "red",
                  mask: `url(${item.icon}) no-repeat center`,
                  WebkitMask: `url(${item.icon}) no-repeat center`,
                  maskSize: "cover",
                  WebkitMaskSize: "cover",
                }}
              />

              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default MuiListItems;
