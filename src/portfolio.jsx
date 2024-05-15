import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import DrawIcon from "@mui/icons-material/Draw";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import ChevronRightRoundedIcon from "@mui/icons-material/ChevronRightRounded";

import GraphicDesign from "./img/design.png";

const items = [
  {
    icon: <WebAssetIcon />,
    title: "UI/UX Design",
    description:
      "This item could provide a snapshot of the most important metrics or data points related to the product.",
    img: GraphicDesign,
  },
  {
    icon: <DrawIcon />,
    title: "Graphic Design",
    description:
      "This item could provide information about the mobile app version of the product.",
    img: GraphicDesign,
  },
  {
    icon: <AutoAwesomeMotionIcon />,
    title: "Motion Graphic",
    description:
      "This item could let users know the product is available on all platforms, such as web, mobile, and desktop.",
    img: GraphicDesign,
  },
];

export default function Features() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <Container id="features" sx={{ py: { xs: 8, sm: 16 } }}>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <div>
            <Typography component="h2" variant="h4" color="text.primary">
              Portfolio
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ mb: { xs: 2, sm: 4 }, textAlign: "justify" }}
            >
              Here, you will find a variety of graphic design projects, web
              development work, and other creative endeavors. Each project is
              accompanied by descriptions and images to showcase my skills and
              achievements. Thank you for visiting, and feel free to contact me
              for collaboration or further inquiries!
            </Typography>
          </div>
          <Grid
            container
            item
            gap={1}
            sx={{ display: { xs: "auto", sm: "none" } }}
          >
            {items.map(({ title }, index) => (
              <Chip
                key={index}
                label={title}
                onClick={() => handleItemClick(index)}
                sx={{}}
              />
            ))}
          </Grid>
          <Box
            component={Card}
            variant="outlined"
            sx={{
              display: { xs: "auto", sm: "none" },
              mt: 4,
              borderRadius:4
            }}
          >
            <Box
              sx={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: 280,
                mb:1
              }}
            >
              <img
                src={items[selectedItemIndex].img}
                alt=""
                style={{ width: "100%" }}
              />
            </Box>
            <Box sx={{ px: 2, pb: 2 }}>
              <Typography
                color="text.primary"
                variant="body2"
                fontWeight="bold"
              >
                {selectedFeature.title}
              </Typography>
              <Typography
                color="text.secondary"
                variant="body2"
                sx={{ my: 0.5 }}
              >
                {selectedFeature.description}
              </Typography>
              <Link
                color="primary"
                variant="body2"
                fontWeight="bold"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  "& > svg": { transition: "0.2s" },
                  "&:hover > svg": { transform: "translateX(2px)" },
                }}
              >
                <span>Learn more</span>
                <ChevronRightRoundedIcon
                  fontSize="small"
                  sx={{ mt: "1px", ml: "2px" }}
                />
              </Link>
            </Box>
          </Box>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing={2}
            useFlexGap
            sx={{ width: "100%", display: { xs: "none", sm: "flex" } }}
          >
            {items.map(({ icon, title, description }, index) => (
              <Card
                key={index}
                variant="outlined"
                component={Button}
                onClick={() => handleItemClick(index)}
                sx={{
                  p: 1,
                  height: "fit-content",
                  width: "100%",
                  background: "none",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    display: "flex",
                    textAlign: "left",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: { md: "center" },
                    gap: 2.5,
                  }}
                >
                  <Box sx={{}}>{icon}</Box>
                  <Box sx={{ textTransform: "none" }}>
                    <Typography
                      color="text.primary"
                      variant="body2"
                      fontWeight="bold"
                    >
                      {title}
                    </Typography>
                    <Typography
                      color="text.secondary"
                      variant="body2"
                      sx={{ my: 0.5 }}
                    >
                      {description}
                    </Typography>
                    <Link
                      color="primary"
                      variant="body2"
                      fontWeight="bold"
                      sx={{
                        display: "inline-flex",
                        alignItems: "center",
                        "& > svg": { transition: "0.2s" },
                        "&:hover > svg": { transform: "translateX(2px)" },
                      }}
                      onClick={(event) => {
                        event.stopPropagation();
                      }}
                    >
                      <span>Learn more</span>
                      <ChevronRightRoundedIcon
                        fontSize="small"
                        sx={{ mt: "1px", ml: "2px" }}
                      />
                    </Link>
                  </Box>
                </Box>
              </Card>
            ))}
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ display: { xs: "none", sm: "flex" }, width: "100%" }}
        >
          <Card
            variant="outlined"
            sx={{
              height: "100%",
              width: "100%",
              display: { xs: "none", sm: "flex" },
              pointerEvents: "none",
              borderRadius:4
            }}
          >
            <Box
              sx={{
                m: "auto",
                height: "auto",
                backgroundSize: "contain",
                
              }}
            >
              <img
                src={items[selectedItemIndex].img}
                alt=""
                style={{ width: "100%" }}
              />
            </Box>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
