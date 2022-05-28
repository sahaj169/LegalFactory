import React from "react";
import Bullet from "../../../../Assets/Images/bullet.svg";
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
          Sole Proprietorship registration process :
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
          Step - 1: Acquire Aadhar Card
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
          Aadhar card is the number one Identity proof that every Indian Citizen
          must have. It is a basic document required for legalization of any
          business in India. Any IT return can only be filed if the taxpayer has
          his/her PAN card synched. To get an Aadhar card, applicant can contact
          the nearest Aadhar, Seva Kendra or E-Mitra . It takes utpo 90 days for
          Aadhar card generation after enrollment.
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
      </Grid>
      <Grid
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
          Step -2 : Get PAN Card
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
          Since you cannot file an IT return without the presence of a PAN, it
          is important that you apply for one. This can be done through a
          dedicated government portal that requires a nominal fee to register a
          person for PAN.
        </Typography>
      </Grid>
      <Grid item sx={!(isMobile || isTablet) && { marginLeft: "20px" }}>
        <Typography
          sx={
            !(isMobile || isTablet) && !isRange
              ? {
                  marginTop: "30px",
                  fontSize: "15px",
                  fontWeight: "500",
                  marginRight: "280px",
                  fontFamily: "Sora",
                  color: "#773106",
                }
              : isRange
              ? {
                  marginTop: "30px",
                  fontSize: "15px",
                  fontWeight: "500",

                  fontFamily: "Sora",
                  color: "#773106",
                }
              : {
                  marginTop: "19px",
                  fontSize: "10px",
                  fontWeight: "500",
                  // marginRight: "280px",
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
          Applicant Photograph
        </Typography>
        <Typography
          sx={
            !(isMobile || isTablet) && !isRange
              ? {
                  marginTop: "30px",
                  fontSize: "15px",
                  fontWeight: "500",
                  marginRight: "280px",
                  fontFamily: "Sora",
                  color: "#773106",
                }
              : isRange
              ? {
                  marginTop: "30px",
                  fontSize: "15px",
                  fontWeight: "500",

                  fontFamily: "Sora",
                  color: "#773106",
                }
              : {
                  marginTop: "19px",
                  fontSize: "10px",
                  fontWeight: "500",
                  // marginRight: "280px",
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
          ID proof
        </Typography>
        <Typography
          sx={
            !(isMobile || isTablet) && !isRange
              ? {
                  marginTop: "30px",
                  fontSize: "15px",
                  fontWeight: "500",
                  marginRight: "280px",
                  fontFamily: "Sora",
                  color: "#773106",
                }
              : isRange
              ? {
                  marginTop: "30px",
                  fontSize: "15px",
                  fontWeight: "500",

                  fontFamily: "Sora",
                  color: "#773106",
                }
              : {
                  marginTop: "19px",
                  fontSize: "10px",
                  fontWeight: "500",
                  // marginRight: "280px",
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
          Address Proof
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
          Step -3 : Apply for a Bank Account in the name of Business
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
          After acquiring the PAN and Aadhar Number, contact any bank to open a
          current account. Basic documents required for that are:
        </Typography>
      </Grid>
      <Grid item sx={!(isMobile || isTablet) && { marginLeft: "20px" }}>
        <Typography
          sx={
            !(isMobile || isTablet) && !isRange
              ? {
                  marginTop: "30px",
                  fontSize: "15px",
                  fontWeight: "500",
                  marginRight: "280px",
                  fontFamily: "Sora",
                  color: "#773106",
                }
              : isRange
              ? {
                  marginTop: "30px",
                  fontSize: "15px",
                  fontWeight: "500",

                  fontFamily: "Sora",
                  color: "#773106",
                }
              : {
                  marginTop: "19px",
                  fontSize: "10px",
                  fontWeight: "500",
                  // marginRight: "280px",
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
          PAN
        </Typography>
        <Typography
          sx={
            !(isMobile || isTablet) && !isRange
              ? {
                  marginTop: "30px",
                  fontSize: "15px",
                  fontWeight: "500",
                  marginRight: "280px",
                  fontFamily: "Sora",
                  color: "#773106",
                }
              : isRange
              ? {
                  marginTop: "30px",
                  fontSize: "15px",
                  fontWeight: "500",

                  fontFamily: "Sora",
                  color: "#773106",
                }
              : {
                  marginTop: "19px",
                  fontSize: "10px",
                  fontWeight: "500",
                  // marginRight: "280px",
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
          Aadhar Number
        </Typography>
        <Typography
          sx={
            !(isMobile || isTablet) && !isRange
              ? {
                  marginTop: "30px",
                  fontSize: "15px",
                  fontWeight: "500",
                  marginRight: "280px",
                  fontFamily: "Sora",
                  color: "#773106",
                }
              : isRange
              ? {
                  marginTop: "30px",
                  fontSize: "15px",
                  fontWeight: "500",

                  fontFamily: "Sora",
                  color: "#773106",
                }
              : {
                  marginTop: "19px",
                  fontSize: "10px",
                  fontWeight: "500",
                  // marginRight: "280px",
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
          GST registration
        </Typography>
        <Typography
          sx={
            !(isMobile || isTablet) && !isRange
              ? {
                  marginTop: "30px",
                  fontSize: "15px",
                  fontWeight: "500",
                  marginRight: "280px",
                  fontFamily: "Sora",
                  color: "#773106",
                }
              : isRange
              ? {
                  marginTop: "30px",
                  fontSize: "15px",
                  fontWeight: "500",

                  fontFamily: "Sora",
                  color: "#773106",
                }
              : {
                  marginTop: "19px",
                  fontSize: "10px",
                  fontWeight: "500",
                  // marginRight: "280px",
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
          Address and identification proof
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
          Step -4: Secure Shop and Establishment Act License.
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
          A shop and Establishment license for any commercial establishment can
          be stated as a legal compulsion. A commercial establishments provides
          goods or services to the customer. It is a legally required for the
          owner of any small establishment or a shop to secure a license..
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
          Step -5: Register under GST
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
          Registering GST is a requirement for all form of businesses whose
          annual turnover is above the prescribed threshold limit. Currently,
          the businesses whose yearly turnover is greater than Rs 40 lakh are
          mandated to secure this registration. This is also important for
          online business owners.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Register;
