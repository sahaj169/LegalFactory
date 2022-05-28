import React from "react";
import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

const Register = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isRange = useMediaQuery(theme.breakpoints.between("md", "lg"));

  return (
    <Grid
      container
      direction="column"
      sx={
        !(isMobile || isTablet)
          ? { marginTop: "59px" }
          : { marginTop: "39px", width: "130%" }
      }
    >
      <Grid item sx={!(isMobile || isTablet) && { marginLeft: "20px" }}>
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
                }
          }
        >
          Procedure to file for a Nidhi Company
        </Typography>
      </Grid>
      <Grid item sx={!(isMobile || isTablet) && { marginLeft: "20px" }}>
        <Typography
          sx={
            !(isMobile || isTablet) && !isRange
              ? {
                  fontSize: "19px",
                  fontWeight: "600",
                  marginTop: "49px",
                  color: "#703C00",
                  fontFamily: "Sora",
                }
              : isRange
              ? {
                  fontSize: "17px",
                  fontWeight: "600",
                  marginTop: "49px",
                  color: "#703C00",
                  fontFamily: "Sora",
                }
              : {
                  fontSize: "13px",
                  fontWeight: "600",
                  marginTop: "19px",
                  color: "#703C00",
                  fontFamily: "Sora",
                }
          }
        >
          Step - 1: Name Reservation
        </Typography>
      </Grid>
      <Grid item sx={!(isMobile || isTablet) && { marginLeft: "20px" }}>
        <Typography
          sx={
            !(isMobile || isTablet) && !isRange
              ? {
                  marginTop: "20px",
                  fontSize: "18px",
                  fontWeight: "500",
                  marginRight: "280px",
                  fontFamily: "Sora",
                }
              : isRange
              ? {
                  marginTop: "20px",
                  fontSize: "15px",
                  fontWeight: "500",
                  // marginRight: "280px",
                  fontFamily: "Sora",
                }
              : {
                  marginTop: "19px",
                  fontSize: "12px",
                  fontWeight: "500",
                  // marginRight: "280px",
                  fontFamily: "Sora",
                }
          }
        >
          We help you reserve your name with MCA.
        </Typography>
      </Grid>

      {/* <Grid
        container
        sx={
          !(isMobile || isTablet)
            ? { marginTop: "110px", justifyContent: "center" }
            : { display: "none" }
        }
      >
        <img src={RegistryImage} alt="RegistryImage" />
      </Grid> */}
      {/* <Grid
        container
        sx={
          !(isMobile || isTablet)
            ? { marginTop: "110px", justifyContent: "center" }
            : { display: "none" }
        }
      >
        <img src={RegistryImag} alt="RegistryImag" />
      </Grid> */}
      <Grid item sx={!(isMobile || isTablet) && { marginLeft: "20px" }}>
        <Typography
          sx={
            !(isMobile || isTablet) && !isRange
              ? {
                  fontSize: "19px",
                  fontWeight: "600",
                  marginTop: "49px",
                  color: "#703C00",
                  fontFamily: "Sora",
                }
              : isRange
              ? {
                  fontSize: "17px",
                  fontWeight: "600",
                  marginTop: "49px",
                  color: "#703C00",
                  fontFamily: "Sora",
                }
              : {
                  fontSize: "13px",
                  fontWeight: "600",
                  marginTop: "19px",
                  color: "#703C00",
                  fontFamily: "Sora",
                }
          }
        >
          Step -2 : DSC and DINs
        </Typography>
      </Grid>
      <Grid item sx={!(isMobile || isTablet) && { marginLeft: "20px" }}>
        <Typography
          sx={
            !(isMobile || isTablet) && !isRange
              ? {
                  marginTop: "20px",
                  fontSize: "18px",
                  fontWeight: "500",
                  marginRight: "280px",
                  fontFamily: "Sora",
                }
              : isRange
              ? {
                  marginTop: "20px",
                  fontSize: "15px",
                  fontWeight: "500",
                  // marginRight: "280px",
                  fontFamily: "Sora",
                }
              : {
                  marginTop: "19px",
                  fontSize: "12px",
                  fontWeight: "500",
                  // marginRight: "280px",
                  fontFamily: "Sora",
                }
          }
        >
          We help you get 1 DSC and 3 DINs.
        </Typography>
      </Grid>
      <Grid item sx={!(isMobile || isTablet) && { marginLeft: "20px" }}>
        <Typography
          sx={
            !(isMobile || isTablet) && !isRange
              ? {
                  fontSize: "19px",
                  fontWeight: "600",
                  marginTop: "49px",
                  color: "#703C00",
                  fontFamily: "Sora",
                }
              : isRange
              ? {
                  fontSize: "17px",
                  fontWeight: "600",
                  marginTop: "49px",
                  color: "#703C00",
                  fontFamily: "Sora",
                }
              : {
                  fontSize: "13px",
                  fontWeight: "600",
                  marginTop: "19px",
                  color: "#703C00",
                  fontFamily: "Sora",
                }
          }
        >
          Step -3 : Documents and approval
        </Typography>
      </Grid>
      <Grid item sx={!(isMobile || isTablet) && { marginLeft: "20px" }}>
        <Typography
          sx={
            !(isMobile || isTablet) && !isRange
              ? {
                  marginTop: "20px",
                  fontSize: "18px",
                  fontWeight: "500",
                  marginRight: "280px",
                  fontFamily: "Sora",
                }
              : isRange
              ? {
                  marginTop: "20px",
                  fontSize: "15px",
                  fontWeight: "500",
                  // marginRight: "280px",
                  fontFamily: "Sora",
                }
              : {
                  marginTop: "19px",
                  fontSize: "12px",
                  fontWeight: "500",
                  // marginRight: "280px",
                  fontFamily: "Sora",
                }
          }
        >
          We help you at every stage of the documentation process and in getting
          in-principle approval from the RBI.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Register;
