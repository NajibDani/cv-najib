import * as React from "react";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";

const pages = ["About Me", "Education", "Experience", "Portfolio"];

const logoStyle = {
  width: "140px",
  height: "auto",
  cursor: "pointer",
};

function AppAppBar({ mode, toggleColorMode }) {
  const [setOpen] = React.useState(false);

  const scrollToSection = (sectionId) => {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      sectionElement.scrollIntoView({ behavior: "smooth" });
      window.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
      setOpen(false);
    }
  };

  return (
    <box>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: "transparent",
          backgroundImage: "none",
          mt: 2,
          display: { xs: "none", md: "flex" },
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            variant="regular"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexShrink: 0,
              borderRadius: "999px",
              backdropFilter: "blur(24px)",
              maxHeight: 40,
              border: "1px solid",
              borderColor: "divider",
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                width: "auto",
                px: 2,
                justifyContent: "space-between",
              }}
            >
              <img
                src={
                  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e6faf73568658154dae_SitemarkDefault.svg"
                }
                style={logoStyle}
                alt="logo of sitemark"
              />
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    onClick={() => scrollToSection("features")}
                    sx={{ py: "6px", px: "12px" }}
                  >
                    <Typography variant="body2" color="text.primary">
                      {page}
                    </Typography>
                  </MenuItem>
                ))}
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </box>
  );
}

export default AppAppBar;
