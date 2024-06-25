import React from "react";
import { Experiences, MyMediums, MySkills } from "./data";
import Portfolio from "./portfolio";
import Logo from "./img/Logo.png";
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Avatar,
  Container,
  Grid,
  Typography,
  IconButton,
  Chip,
} from "@mui/material";
import PhotoProfil from "./img/pp.png";
import { InsertLink } from "@mui/icons-material/";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

function Body() {

  return (
    <Box>
      {/* Banner */}
      <Container sx={{ pt: { xs: 2, md: 15 }, pb: { xs: 2, md: 10 }}}>
        <Box component="Banner" id="Banner" >
          <Grid
            container
            sx={{ justifyContent: "center", alignItems: "center", py: 5,}}
          >
            <Grid md={6} xs={12} order={{ xs: 2, md: 1 }} sx={{ my: 2 }}>
              <Typography
                variant="h3"
                fontWeight="medium"
                sx={{ textAlign: { xs: "center", md: "left" } }}
              >
                Muhammad <b>Najib</b> Ramadhan Basri
              </Typography>
              <Typography
                variant="h5"
                sx={{ my: 2, textAlign: { xs: "center", md: "left" } }}
              >
                Front End Developer | UI & UX Designer | Graphic Designer
              </Typography>
              <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                <IconButton href="https://www.linkedin.com/in/najibdani" target="_blank">
                  <LinkedInIcon />
                </IconButton>
                <IconButton href="https://www.instagram.com/najibdani21" target="_blank">
                  <InstagramIcon />
                </IconButton>
              </Box>
            </Grid>
            <Grid
              md={6}
              xs={12}
              sx={{ textAlign: { xs: "center", md: "right" } }}
              spacing={2}
              order={{ xs: 1, md: 2 }}
            >
              <img
                src={Logo}
                alt=""
                style={{ height: 400 }}
                sx={{ py: 2, height: { xs: 300, md: 4 } }}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* My Skills */}
      <Container sx={{ my: 5 }}>
        <Box>
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            My Skills
          </Typography>
          <Grid container sx={{ justifyContent: "center", p: 2 }}>
            {MySkills.map((skill) => (
              <Grid key={skill} sx={{ p: 2 }}>
                <Card
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    borderRadius: { xs: 4, md: 4 },
                    boxShadow: 3,
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      width: { xs: 55, md: 80 },
                      p: 1,
                    }}
                    image={skill.gambar}
                    alt=" "
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      {/* About Me */}
      <Container sx={{ pt: { xs: 2, md: 10 }, }}>
        <Box component="AboutMe" id="AboutMe">
          <Grid
            container
            sx={{ justifyContent: "center", alignItems: "center", py: 5, gap: 10 }}
          >
            <Grid
              md={4}
              xs={12}
              sx={{ textAlign: { xs: "center", md: "center" } }}
              spacing={2}
              order={{ xs: 1, md: 2 }}
            >
              <img
                src={PhotoProfil}
                alt=""
                style={{ height: 400 }}
                sx={{ py: 2, height: { xs: 300, md: 4 } }}
              />
            </Grid>
            <Grid md={6} xs={12} order={{ xs: 1, md: 2 }} sx={{ my: 2 }}>
              <Typography
                variant="h4"
                fontWeight="medium"
                sx={{ textAlign: { xs: "center", md: "left" } }}
              >
                About Me
              </Typography>
              {/* <Typography
                variant="h5"
                sx={{ my: 2, textAlign: { xs: "center", md: "left" } }}
              >
                Front End Developer | UI & UX Designer | Graphic Designer
              </Typography> */}
              <Box sx={{my:3}}>
                <Chip label="Creative" />
                <Chip label="Creative" sx={{mx:1}}/>
                <Chip label="Creative" />
              </Box>
              <Typography sx={{ my: 2, textAlign: "justify" }}>
                Bachelor Degree in informatics engineering. At 2021 graduated
                Bangkit Academy and have experience in implementing interface
                design on applications in internship opportunities in technology
                companies. Good abilities to solve system problems. Interest at
                artificial intelligence and web programming.
              </Typography>
              {/* <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
                <IconButton href="https://www.linkedin.com/in/najibdani" target="_blank">
                  <LinkedInIcon />
                </IconButton>
                <IconButton href="https://www.instagram.com/najibdani21" target="_blank">
                  <InstagramIcon />
                </IconButton>
              </Box> */}
            </Grid>
          </Grid>
        </Box>
      </Container>

      {/* My Experiences */}
      <Box sx={{ bgcolor: "rgba(80, 141, 105, 1)", py: 6 }} id="Experience">
        <Container maxWidth="xxl" sx={{ my: 5 }}>
          <Box>
            <Typography
              variant="h4"
              sx={{ textAlign: "center", pb: 3, color: "#FFF7FC" }}
            >
              My Experience
            </Typography>
            <Grid container sx={{ justifyContent: "center" }}>
              {Experiences.map((experience) => (
                <Grid
                  key={experience}
                  xs={12}
                  md={4}
                  sx={{
                    p: 2,
                    m: 1,
                    boxShadow: 4,
                    borderRadius: 4,
                    bgcolor: "rgba(255, 247, 252, 0.7)",
                    backdropFilter: "blur(24px)",
                  }}
                  variant="elevation"
                  component={Card}
                >
                  <Box>
                    <Typography variant="h6" fontWeight="medium" gutterBottom>
                      {experience.position}
                    </Typography>
                    <hr />
                    <Typography
                      variant="body1"
                      fontWeight="medium"
                      sx={{ my: 1 }}
                    >
                      {experience.institusi} | {experience.tahun}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "grey.800" }}>
                      {experience.desc}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      {/* My Medium */}
      <Container sx={{ my: 5 }}>
        <Box>
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            My Medium
          </Typography>
          <Grid container sx={{ justifyContent: "center", p: 2 }}>
            {MyMediums.map((medium) => (
              <Grid key={medium} xs={12} md={6} sx={{ p: 2 }}>
                <Card>
                  <CardHeader
                    avatar={<Avatar alt="" src={PhotoProfil} />}
                    title={medium.penulis}
                    subheader={medium.tanggal}
                    action={
                      <IconButton aria-label="Link" href={medium.link}>
                        <InsertLink />
                      </IconButton>
                    }
                  />
                  <CardMedia
                    component="img"
                    height="194"
                    image={medium.gambar}
                  />
                  <CardContent sx={{ textAlign: "center" }}>
                    <Typography>{medium.judul}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      {/* My Portfolio */}
      <Portfolio id="Portfolio" />
    </Box>
  );
}
export default Body;
