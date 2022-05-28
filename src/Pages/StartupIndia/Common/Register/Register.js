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
          How to Register a Startup India Registration
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
          Step 1: Incorporate Your Business
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
          As you know the business should be either Private Ltd Company,
          Partnership Firm or Limited Liability Partnership. Follow all the
          normal procedures for registration of any business like obtaining the
          Certificate of Incorporation/Partnership registration, PAN, and other
          required compliances.
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
          Step 2: Register on Startup India
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
          Log on to the Startup India website and fill the form with all the
          details of your business. After this you will receive an OTP on your
          email and other details like name, user, etc. After entering these
          details, the Startup India profile is created.
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
          Step 3: Get DPIIT Recognition
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
          After creating profile on the Startup India Website is to avail
          Department for promotion of Industry and Internal Trade (DPIIT)
          Recognition. This helps avail many benefits like access to
          high-quality intellectual property services and resources, relaxation
          in public procurement norms, self-certification under labor and
          environment laws, etc. Simply click on the “Get Recognized” button if
          you are a new user then, the ‘Recognition Application Detail’ page
          opens. On this page click on ‘View Details’ under the Registration
          Details section. Fill up the ‘Startup Recognition Form’ and click on
          ‘Submit’. But if you are an old user and already recognized click on
          the ‘Dashboard button’ and then ‘DPIIT Recognition’.
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
          Step 4: Recognition Number
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
          You get a recognition number right after applying and a certificate of
          recognition will be issued after the examination of all your documents
          which is almost always 2 days.
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
          Note: If found out that the uploaded documents are wrong or forged
          then there will be a fine of 50% of your paid-up capital of the
          startup with a minimum fine of Rs.25,000
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Register;
