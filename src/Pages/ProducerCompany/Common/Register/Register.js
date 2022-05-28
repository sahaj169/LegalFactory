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
          How to Register a Producer Company
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
          Step - 1: Obtain a Digital Signature Certificate (DSC) from all the
          directors. The documents required for that are :
        </Typography>
      </Grid>
      <Grid
        item
        sx={
          !(isMobile || isTablet)
            ? { marginTop: "20px", marginLeft: "20px" }
            : { marginTop: "0px" }
        }
      >
        <Typography
          sx={
            !(isMobile || isTablet) && !isRange
              ? { fontSize: "16px", fontFamily: "Sora", fontWeight: "bold" }
              : isRange
              ? { fontSize: "16px", fontFamily: "Sora", fontWeight: "bold" }
              : { fontSize: "12px", fontFamily: "Sora" }
          }
        >
          The basic documents required are :
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
                  color: "#773106",
                  fontFamily: "Sora",
                }
              : isRange
              ? {
                  marginTop: "30px",
                  fontSize: "15px",
                  fontWeight: "500",

                  color: "#773106",
                  fontFamily: "Sora",
                }
              : {
                  marginTop: "19px",
                  fontSize: "10px",
                  fontWeight: "500",
                  // marginRight: "280px",
                  color: "#773106",
                  fontFamily: "Sora",
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
          Copy of PAN Card (must for all resident copy of the latest bank
          statement/telephone or mobile bill/electricity or gas bill
          shareholders / directors ) or Passport (Foreign Nationals & NRIs)
        </Typography>
        <Typography
          sx={
            !(isMobile || isTablet) && !isRange
              ? {
                  marginTop: "30px",
                  fontSize: "15px",
                  fontWeight: "500",
                  marginRight: "280px",
                  color: "#773106",
                  fontFamily: "Sora",
                }
              : isRange
              ? {
                  marginTop: "30px",
                  fontSize: "15px",
                  fontWeight: "500",

                  color: "#773106",
                  fontFamily: "Sora",
                }
              : {
                  marginTop: "19px",
                  fontSize: "10px",
                  fontWeight: "500",
                  // marginRight: "280px",
                  color: "#773106",
                  fontFamily: "Sora",
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
          Copy of Voter’s ID/Passport/Driver’s License/Aadhar card
        </Typography>
        <Typography
          sx={
            !(isMobile || isTablet) && !isRange
              ? {
                  marginTop: "30px",
                  fontSize: "15px",
                  fontWeight: "500",
                  marginRight: "280px",
                  color: "#773106",
                  fontFamily: "Sora",
                }
              : isRange
              ? {
                  marginTop: "30px",
                  fontSize: "15px",
                  fontWeight: "500",

                  color: "#773106",
                  fontFamily: "Sora",
                }
              : {
                  marginTop: "19px",
                  fontSize: "10px",
                  fontWeight: "500",
                  // marginRight: "280px",
                  color: "#773106",
                  fontFamily: "Sora",
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
          Copy of the latest bank statement/telephone or mobile bill/electricity
          or gas bill(i.e not older than 2 months and payment proof of same.)
        </Typography>
        <Typography
          sx={
            !(isMobile || isTablet) && !isRange
              ? {
                  marginTop: "30px",
                  fontSize: "15px",
                  fontWeight: "500",
                  marginRight: "280px",
                  color: "#773106",
                  fontFamily: "Sora",
                }
              : isRange
              ? {
                  marginTop: "30px",
                  fontSize: "15px",
                  fontWeight: "500",

                  color: "#773106",
                  fontFamily: "Sora",
                }
              : {
                  marginTop: "19px",
                  fontSize: "10px",
                  fontWeight: "500",
                  // marginRight: "280px",
                  color: "#773106",
                  fontFamily: "Sora",
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
          Email ID
        </Typography>
        <Typography
          sx={
            !(isMobile || isTablet) && !isRange
              ? {
                  marginTop: "30px",
                  fontSize: "15px",
                  fontWeight: "500",
                  marginRight: "280px",
                  color: "#773106",
                  fontFamily: "Sora",
                }
              : isRange
              ? {
                  marginTop: "30px",
                  fontSize: "15px",
                  fontWeight: "500",

                  color: "#773106",
                  fontFamily: "Sora",
                }
              : {
                  marginTop: "19px",
                  fontSize: "10px",
                  fontWeight: "500",
                  // marginRight: "280px",
                  color: "#773106",
                  fontFamily: "Sora",
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
          Contact Number
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
          Step -2 : Obtaining DIN.
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
          Next obtain the Director Identification Number (DIN) by filing the
          form DIR – 3 along with a self-attested Identity proof, address proof,
          and a photo.
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
          Step -3 : Apply for name availability of the proposed company.
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
          When all that is done then the name of the production company can be
          finalized. For that, the form to be filled is the Form INC – 1 to the
          Registrar of Companies (ROC), by giving 6 names ordered by preference
          along with their significance. However, it should have the words
          PRODUCER COMPANY at the end.
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
          Step -4: After the approval of the name by the ROC, the following
          documents are to be prepared :
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
          The Memorandum of Association incorporating the objective that the
          company intends to follow.
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
          The Articles of Association containing all the by-laws of the company
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
          A declaration by a professional has to be drafted in the format of
          form INC – 8.
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
          An affidavit has to be signed by all the subscribers of the proposed
          company declaring their legal competency to act as the subscribers.
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
          A utility bill and a NOC have to be taken from the owner whose address
          is to be used as the registered office of the company. If it is not
          owned, a lease agreement will be attached to the form.
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
          The directors will give their consent to act in Form DIR – 2 and
          details in DIR – 8.
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
          All the drafted documents will be attached to Form INC – 7, INC – 22
          and DIR – 12 and uploaded to the ROC website. After proper
          verification, the ROC will issue a Certificate of Incorporation and
          the company can commence its business operations
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Register;
