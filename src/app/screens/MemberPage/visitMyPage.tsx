import { Container } from "@mui/material";
import React from "react";

/* List  */
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import PersonIcon from "@mui/icons-material/Person";
import ArticleIcon from "@mui/icons-material/Article";
import GradingIcon from "@mui/icons-material/Grading";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GroupIcon from "@mui/icons-material/Group";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import SettingsIcon from "@mui/icons-material/Settings";

export function VisitMyPage() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div>
      <Container>
        <List
          sx={{ width: "100%", maxWidth: 440, bgcolor: "background.paper" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
          subheader={
            <ListSubheader component="div" id="nested-list-subheader">
              Dashbord
            </ListSubheader>
          }
        >
          {/* Profile */}
          <ListItemButton>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>

          {/* Blog */}
          <ListItemButton>
            <ListItemIcon>
              <ArticleIcon />
            </ListItemIcon>
            <ListItemText primary="My Blogs" />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <GradingIcon />
            </ListItemIcon>
            <ListItemText primary="My Properties" />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <FavoriteIcon />
            </ListItemIcon>
            <ListItemText primary="Favorite Properties" />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText primary="Followers" />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
            <ListItemText primary="Following" />
          </ListItemButton>

          <ListItemButton>
            <ListItemIcon>
              <BorderColorIcon />
            </ListItemIcon>
            <ListItemText primary="Create a Blog" />
          </ListItemButton>
        </List>
      </Container>
    </div>
  );
}
