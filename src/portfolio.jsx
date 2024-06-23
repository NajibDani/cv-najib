import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import DrawIcon from "@mui/icons-material/Draw";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";

import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";

import Design1 from "./img/design1.png";
import Design2 from "./img/design2.png";
import Design3 from "./img/design3.png";

import Ui1 from "./img/ui1.png";
import Ui2 from "./img/ui2.png";
import Ui3 from "./img/ui3.png";
import Ui4 from "./img/ui4.png";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const items = [
  {
    icon: <WebAssetIcon />,
    title: "UI/UX Design",
    description:
      "A collection of product designs I created using Figma, including web interfaces and mobile applications.",
    imgPortofolio: [Ui1, Ui2, Ui3, Ui4],
  },
  {
    icon: <DrawIcon />,
    title: "Graphic Design",
    description:
      "This item could provide information about the mobile app version of the product.",
    imgPortofolio: [Design1, Design2, Design3],
  },
  {
    icon: <AutoAwesomeMotionIcon />,
    title: "Motion Graphic",
    description:
      "This item could let users know the product is available on all platforms, such as web, mobile, and desktop.",
    imgPortofolio: [Design2, Design2, Design2],
  },
];

export default function Features() {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

  const handleItemClick = (index) => {
    setSelectedItemIndex(index);
  };

  const selectedFeature = items[selectedItemIndex];

  return (
    <Container sx={{ py: { xs: 8, sm: 1 } }}>
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
              borderRadius: 4,
            }}
          >
            <Box
              sx={{
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: 280,
                mb: 1,
              }}
            >
              <AutoplaySlider
                play={true}
                cancelOnInteraction={false}
                interval={1000}
                bullets={false}
              >
                {items[selectedItemIndex].imgPortofolio.map((img) => (
                  <div key={img} data-src={img}>
                    <p>Hello World</p>
                  </div>
                ))}
              </AutoplaySlider>
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
                  <Box>{icon}</Box>
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
              borderRadius: 4,
            }}
          >
            <AutoplaySlider
              bullets={false}
              play={true}
              cancelOnInteraction={false}
              interval={1000}
              organicArrows={false}
            >
              {items[selectedItemIndex].imgPortofolio.map((img) => (
                <div key={img} data-src={img}>
                  <p>Hello World</p>
                </div>
              ))}
            </AutoplaySlider>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}
