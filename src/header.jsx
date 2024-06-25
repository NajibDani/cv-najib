import * as React from "react";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Scrollspy from 'react-scrollspy';

const pages = [
  {
    section: "About Me",
    idSection: "#AboutMe"
  },
  {
    section: "Experience",
    idSection: "#Experience"
  },
  {
    section: "Portfolio",
    idSection: "#Portfolio"
  },
];

<Scrollspy items={ ['About Me', 'Experience', 'Portfolio'] } currentClassName="is-current"></Scrollspy>

// const logoStyle = {
//   width: "50px",
//   height: "auto",
//   cursor: "pointer",
// };

function AppAppBar() {
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
              borderRadius: 8,
              backdropFilter: "blur(24px)",
              maxHeight: 40,
              border: "1px solid",
              borderColor: "divider",
              bgcolor: "rgba(255, 247, 252, 0.4)"
            }}
          >
            <Box
              sx={{
                flexGrow: 1,
                display: "flex",
                width: "auto",
                px: 2,
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={page}
                    onClick={() => scrollToSection("features")}
                    sx={{
                      px: "12px",
                      '&:hover':{
                        bgcolor: "rgba(80, 141, 105, 1)",
                        borderRadius:25,
                        color:"white",
                      }
                    }}
                  >
                    <a href={page.idSection} style={{ textDecoration: "none" }} >
                      <Typography variant="body2" color="text.primary">
                        {page.section}
                      </Typography>
                    </a>
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
