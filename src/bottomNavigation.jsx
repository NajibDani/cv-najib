import * as React from "react";
import Box from "@mui/material/Box";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FolderIcon from "@mui/icons-material/Folder";
import { Container } from "@mui/material";

export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ display: { xs: "flex", md: "none" } }}>
      <Container
        sx={{
          position: "fixed",
          bottom: 0,
          right: 0,
          left: 0,
          p: 2,
          boxShadow: 0,
        }}
      >
        <BottomNavigation
          sx={{
            bgcolor: "rgba(255, 247, 252, 0.5)",
            backgroundImage: "none",
            width: "100%",
            mx: "auto",
            border: "1px solid",
            borderColor: "divider",
            borderRadius: 4,
            backdropFilter: "blur(20px)",
          }}
          value={value}
          onChange={handleChange}
        >
          <BottomNavigationAction
            label="Recents"
            value="recents"
            icon={<RestoreIcon />}
          />
          <BottomNavigationAction
            label="Favorites"
            value="favorites"
            icon={<FavoriteIcon />}
          />
          <BottomNavigationAction
            label="Nearby"
            value="nearby"
            icon={<LocationOnIcon />}
          />
          <BottomNavigationAction
            label="Folder"
            value="folder"
            icon={<FolderIcon />}
          />
        </BottomNavigation>
      </Container>
    </Box>
  );
}
