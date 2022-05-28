import React from "react";
import Bullet from "../../../../Assets/Images/bullet.svg";
import plstrip from "../../../../Assets/Images/plstrip.png";
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
          !(isMobile || isTablet) ? { marginLeft: "20px", marginTop: "59px" }:{
            width:"130%"
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
                    width:"100%"
                  }
            }
          >
          Basic Overview on how to set up a Private Limited Company in India ?
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
            The Xpert Finance empowered by LEGAL FACTORY having decades of
            experience of setting up and arranging compliances for private
            limited company in India . The provisions of setting up a making
            compliances for a private limited company are being provided and
            governed by the provisions of The Companies Act 2013 and rules there
            under . Setting up a business in corporate form is highly
            recommended forms of setting and running up business in india since
            a private limited company gives you the following advantages .
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            sx={
              !(isMobile || isTablet) && !isRange
                ? {
                    marginTop: "41px",
                    fontSize: "18px",
                    fontWeight: "500",
                    marginRight: "280px",
                    fontFamily: "Sora",
                    color: "#773106",
                  }
                : isRange
                ? {
                    marginTop: "41px",
                    fontSize: "15px",
                    fontWeight: "500",
                    // marginRight: "280px",
                    fontFamily: "Sora",
                    color: "#773106",
                  }
                : {
                    marginTop: "19px",
                    fontSize: "12px",
                    fontWeight: "500",
                    // marginRight: "100px",
                    fontFamily: "Sora",
                    color: "#773106",
                  }
            }
          >
            <img
              src={Bullet}
              alt="Bullet"
              style={
                !(isMobile || isTablet)
                  ? { marginRight: "15px" }
                  : { height: "7px", width: "7px", marginRight: "10px" }
              }
            />
            No personal liability for losses and other risks.
          </Typography>
          <Typography
            sx={
              !(isMobile || isTablet) && !isRange
                ? {
                    marginTop: "41px",
                    fontSize: "18px",
                    fontWeight: "500",
                    marginRight: "280px",
                    fontFamily: "Sora",
                    color: "#773106",
                  }
                : isRange
                ? {
                    marginTop: "41px",
                    fontSize: "15px",
                    fontWeight: "500",
                    // marginRight: "280px",
                    fontFamily: "Sora",
                    color: "#773106",
                  }
                : {
                    marginTop: "19px",
                    fontSize: "12px",
                    fontWeight: "500",
                    // marginRight: "100px",
                    fontFamily: "Sora",
                    color: "#773106",
                  }
            }
          >
            <img
              src={Bullet}
              alt="Bullet"
              style={
                !(isMobile || isTablet)
                  ? { marginRight: "15px" }
                  : { height: "7px", width: "7px", marginRight: "10px" }
              }
            />
            Scalability of operations.
          </Typography>
          <Typography
            sx={
              !(isMobile || isTablet) && !isRange
                ? {
                    marginTop: "41px",
                    fontSize: "18px",
                    fontWeight: "500",
                    marginRight: "280px",
                    fontFamily: "Sora",
                    color: "#773106",
                  }
                : isRange
                ? {
                    marginTop: "41px",
                    fontSize: "15px",
                    fontWeight: "500",
                    // marginRight: "280px",
                    fontFamily: "Sora",
                    color: "#773106",
                  }
                : {
                    marginTop: "19px",
                    fontSize: "12px",
                    fontWeight: "500",
                    // marginRight: "100px",
                    fontFamily: "Sora",
                    color: "#773106",
                  }
            }
          >
            <img
              src={Bullet}
              alt="Bullet"
              style={
                !(isMobile || isTablet)
                  ? { marginRight: "15px" }
                  : { height: "7px", width: "7px", marginRight: "10px" }
              }
            />
            Making and managing operations at scale.
          </Typography>
          <Typography
            sx={
              !(isMobile || isTablet) && !isRange
                ? {
                    marginTop: "41px",
                    fontSize: "18px",
                    fontWeight: "500",
                    marginRight: "280px",
                    fontFamily: "Sora",
                    color: "#773106",
                  }
                : isRange
                ? {
                    marginTop: "41px",
                    fontSize: "15px",
                    fontWeight: "500",
                    // marginRight: "280px",
                    fontFamily: "Sora",
                    color: "#773106",
                  }
                : {
                    marginTop: "19px",
                    fontSize: "12px",
                    fontWeight: "500",
                    // marginRight: "100px",
                    fontFamily: "Sora",
                    color: "#773106",
                  }
            }
          >
            <img
              src={Bullet}
              alt="Bullet"
              style={
                !(isMobile || isTablet)
                  ? { marginRight: "15px" }
                  : { height: "7px", width: "7px", marginRight: "10px" }
              }
            />
            Better brand image.
          </Typography>
          <Typography
            sx={
              !(isMobile || isTablet) && !isRange
                ? {
                    marginTop: "41px",
                    fontSize: "18px",
                    fontWeight: "500",
                    marginRight: "280px",
                    fontFamily: "Sora",
                    color: "#773106",
                  }
                : isRange
                ? {
                    marginTop: "41px",
                    fontSize: "15px",
                    fontWeight: "500",
                    // marginRight: "280px",
                    fontFamily: "Sora",
                    color: "#773106",
                  }
                : {
                    marginTop: "19px",
                    fontSize: "12px",
                    fontWeight: "500",
                    // marginRight: "100px",
                    fontFamily: "Sora",
                    color: "#773106",
                  }
            }
          >
            <img
              src={Bullet}
              alt="Bullet"
              style={
                !(isMobile || isTablet)
                  ? { marginRight: "15px" }
                  : { height: "7px", width: "7px", marginRight: "10px" }
              }
            />
            Easy access to funds in form of debt and equity.
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
            In a private limited company the persons who invest in company are
            known as Shareholders and the one who run and manage the day to day
            show and operations of the company are known as Directors
          </Typography>
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
                    fontSize: "12px",
                    fontWeight: "500",
                    // marginRight: "100px",
                    fontFamily: "Sora",
                  }
            }
          >
            The Xpert Finance powered with LEGAL FACTORY arranges the setting up
            and registration of company and also arranges you to make necessary
            compliances once you receive the certificate of incorporation from
            the centralized registrar of companies.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{}
          // !(isTablet || isMobile) && !isRange ? { marginTop: "50px" } : isRange? {display:"none"}: { display: "none" }
        }
      >
        <img src={plstrip} alt="plstrip" height="100%" width="100%" style={{marginTop:"30px"}} />
      </Grid>
    </>
  );
};

export default Overview;
