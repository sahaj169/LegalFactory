import React from "react";

import Reading from "../../../../Assets/Images/startup.png";

import Ltd from "../../../../Assets/Images/emblem.png";
import Discuss from "../../../../Assets/Images/startup2.png";

import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

const Overview = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isRange = useMediaQuery(theme.breakpoints.between("md", "lg"));

  return (
    <>
      <Grid
        container
        direction="column"
        sx={
          !(isMobile || isTablet)
            ? { marginLeft: "20px", marginTop: "59px" }
            : {
                width: "130%",
              }
        }
      >
        <Grid item>
          <Typography
            sx={
              !(isMobile || isTablet) && !isRange
                ? {
                    color: "#E99101",
                    fontSize: "26px",
                    fontWeight: "600",
                    fontFamily: "Sora",
                  }
                : isRange
                ? {
                    color: "#E99101",
                    fontSize: "24px",
                    fontWeight: "600",
                    fontFamily: "Sora",
                  }
                : {
                    color: "#E99101",
                    fontSize: "16px",
                    fontWeight: "600",
                    fontFamily: "Sora",
                    width: "100%",
                  }
            }
          >
            What is Startup India Registration?
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            sx={
              !(isMobile || isTablet) && !isRange
                ? {
                    marginTop: "30px",
                    fontSize: "18px",
                    fontWeight: "500",
                    marginRight: "280px",
                    fontFamily: "Sora",
                  }
                : isRange
                ? {
                    marginTop: "30px",
                    fontSize: "15px",
                    fontWeight: "500",
                    // marginRight: "280px",
                    fontFamily: "Sora",
                  }
                : {
                    marginTop: "19px",
                    fontSize: "12px",
                    fontWeight: "500",
                    // marginRight: "100px",
                    fontFamily: "Sora",
                  }
            }
          >
            The Startup India initiative is a blue belt initiative by the Govt
            of INDIA to foster the entrepreneurships and assist startup
            innovations in flourishing by aiding bank financing, resolving the
            incorporation process & granting exemptions to startups, provided
            you adequately meet/satisfy the conditions for an ‘Eligible Startup’
            to gain all the listed/mentioned benefits.
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            sx={
              !(isMobile || isTablet) && !isRange
                ? {
                    marginTop: "31px",
                    fontSize: "18px",
                    fontWeight: "bold",
                    marginRight: "280px",
                    fontFamily: "Sora",
                    color: "#703C00",
                  }
                : isRange
                ? {
                    marginTop: "31px",
                    fontSize: "15px",
                    fontWeight: "bold",
                    // marginRight: "280px",
                    fontFamily: "Sora",
                    color: "#703C00",
                  }
                : {
                    marginTop: "19px",

                    fontWeight: "bold",
                    // marginRight: "100px",
                    fontFamily: "Sora",
                    fontSize: "12px",
                    color: "#703C00",
                  }
            }
          >
            STARTUP INDIA SCHEME
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            sx={
              !(isMobile || isTablet) && !isRange
                ? {
                    marginTop: "21px",
                    fontSize: "18px",
                    fontWeight: "500",
                    marginRight: "280px",
                    fontFamily: "Sora",
                  }
                : isRange
                ? {
                    marginTop: "21px",
                    fontSize: "15px",
                    fontWeight: "500",
                    // marginRight: "280px",
                    fontFamily: "Sora",
                  }
                : {
                    marginTop: "19px",

                    fontWeight: "500",
                    // marginRight: "100px",
                    fontFamily: "Sora",
                    fontSize: "12px",
                  }
            }
          >
            Under this scheme, Govt of India is promoting the innovative
            startups by easing the heavy regulatory burdens and registration
            process for an inception to a startup entrepreneurship so that they
            can focus more on setting up their businesses and achieve their
            objectives along with granting numerous benefits in addition to the
            huge/giant networking opportunities thrown-at by the Indian Govt
            raised global-level and domestic-tier startup fairs bi-annually.
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            sx={
              !(isMobile || isTablet) && !isRange
                ? {
                    marginTop: "31px",
                    fontSize: "18px",
                    fontWeight: "bold",
                    marginRight: "280px",
                    fontFamily: "Sora",
                    color: "#703C00",
                  }
                : isRange
                ? {
                    marginTop: "31px",
                    fontSize: "15px",
                    fontWeight: "bold",
                    // marginRight: "280px",
                    fontFamily: "Sora",
                    color: "#703C00",
                  }
                : {
                    marginTop: "19px",

                    fontWeight: "bold",
                    // marginRight: "100px",
                    fontFamily: "Sora",
                    fontSize: "12px",
                    color: "#703C00",
                  }
            }
          >
            VISION & MISSION OF OUR TEAM
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            sx={
              !(isMobile || isTablet) && !isRange
                ? {
                    marginTop: "21px",
                    fontSize: "18px",
                    fontWeight: "500",
                    marginRight: "280px",
                    fontFamily: "Sora",
                  }
                : isRange
                ? {
                    marginTop: "21px",
                    fontSize: "15px",
                    fontWeight: "500",
                    // marginRight: "280px",
                    fontFamily: "Sora",
                  }
                : {
                    marginTop: "19px",

                    fontWeight: "500",
                    // marginRight: "100px",
                    fontFamily: "Sora",
                    fontSize: "12px",
                  }
            }
          >
            We boldly resolve to register your Startup and provide the benefits
            of Government policies aiding Startups. We embolden your ambitions,
            we encourage and anchor your dream aspirations; register your
            Startup here.
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        sx={
          !(isTablet || isMobile) && !isRange
            ? { marginTop: "50px" }
            : isRange
            ? { display: "none" }
            : { display: "none" }
        }
      >
        <Grid item xs={4}>
          {isRange ? (
            <img
              src={Reading}
              alt="Reading"
              height="100%"
              width="100%"
              style={{ marginLeft: "-30px" }}
            />
          ) : (
            <img
              src={Reading}
              alt="Reading"
              style={{ marginLeft: "15px", width: "100%", height: "100%" }}
            />
          )}
        </Grid>
        <Grid item xs={4}>
          {isRange ? (
            <img src={Ltd} alt="Reading" height="100%" width="100%" />
          ) : (
            <img
              src={Ltd}
              alt="Reading"
              style={{ marginLeft: "12px", width: "100%", height: "100%" }}
            />
          )}
        </Grid>
        <Grid item xs={4}>
          {isRange ? (
            <img src={Discuss} alt="Reading" height="100%" width="260%" />
          ) : (
            <img
              src={Discuss}
              alt="Reading"
              style={{ marginLeft: "12px", width: "90%", height: "100%" }}
            />
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default Overview;
