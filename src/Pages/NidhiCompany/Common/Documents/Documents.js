import React from "react";
import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import Bullet from "../../../../Assets/Images/bullet.svg";
const Documents = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isRange = useMediaQuery(theme.breakpoints.between("md", "lg"));

  return (
    <div>
      <>
        <Grid
          container
          direction="column"
          sx={
            !(isMobile || isTablet)
              ? { marginLeft: "20px", marginTop: "59px" }
              : { marginTop: "39px", width: "130%" }
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
                    }
              }
            >
              Basic Documents Required
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              sx={
                !(isMobile || isTablet) && !isRange
                  ? {
                      marginTop: "30px",
                      fontSize: "19px",
                      fontWeight: "500",
                      marginRight: "280px",
                      color: "#773106",
                      fontFamily: "Sora",
                    }
                  : isRange
                  ? {
                      marginTop: "30px",
                      fontSize: "17px",
                      fontWeight: "500",

                      color: "#773106",
                      fontFamily: "Sora",
                    }
                  : {
                      marginTop: "19px",
                      fontSize: "12px",
                      fontWeight: "500",
                      // marginRight: "280px",
                      color: "#773106",
                      fontFamily: "Sora",
                    }
              }
            >
              All Directors need to submit the following documents:
            </Typography>
            <Typography
              sx={
                !(isMobile || isTablet) && !isRange
                  ? {
                      marginLeft: "0px",
                      marginTop: "30px",
                      fontSize: "15px",
                      fontWeight: "500",
                      marginRight: "280px",
                      color: "#773106",
                      fontFamily: "Sora",
                    }
                  : isRange
                  ? {
                      marginLeft: "0px",
                      marginTop: "30px",
                      fontSize: "15px",
                      fontWeight: "500",

                      color: "#773106",
                      fontFamily: "Sora",
                    }
                  : {
                      // marginLeft: "0px",
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
              Self-attested copy of PAN Card.
            </Typography>
            <Typography
              sx={
                !(isMobile || isTablet) && !isRange
                  ? {
                      marginLeft: "0px",
                      marginTop: "30px",
                      fontSize: "15px",
                      fontWeight: "500",
                      marginRight: "280px",
                      color: "#773106",
                      fontFamily: "Sora",
                    }
                  : isRange
                  ? {
                      marginLeft: "0px",
                      marginTop: "30px",
                      fontSize: "15px",
                      fontWeight: "500",

                      color: "#773106",
                      fontFamily: "Sora",
                    }
                  : {
                      // marginLeft: "0px",
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
              Self-attested copy of Driver’s License/Voter ID/Aadhaar
              Card/Passport.
            </Typography>
            <Typography
              sx={
                !(isMobile || isTablet) && !isRange
                  ? {
                      marginLeft: "0px",
                      marginTop: "30px",
                      fontSize: "15px",
                      fontWeight: "500",
                      marginRight: "280px",
                      color: "#773106",
                      fontFamily: "Sora",
                    }
                  : isRange
                  ? {
                      marginLeft: "0px",
                      marginTop: "30px",
                      fontSize: "15px",
                      fontWeight: "500",

                      color: "#773106",
                      fontFamily: "Sora",
                    }
                  : {
                      // marginLeft: "0px",
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
              Self-attested copy Bank Statement/Telephone Bill/Mobile Bill/
              Electricity Bill.
            </Typography>
            <Typography
              sx={
                !(isMobile || isTablet) && !isRange
                  ? {
                      marginLeft: "0px",
                      marginTop: "30px",
                      fontSize: "15px",
                      fontWeight: "500",
                      marginRight: "280px",
                      color: "#773106",
                      fontFamily: "Sora",
                    }
                  : isRange
                  ? {
                      marginLeft: "0px",
                      marginTop: "30px",
                      fontSize: "15px",
                      fontWeight: "500",

                      color: "#773106",
                      fontFamily: "Sora",
                    }
                  : {
                      // marginLeft: "0px",
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
              Passport-size Photograph.
            </Typography>
            <Typography
              sx={
                !(isMobile || isTablet) && !isRange
                  ? {
                      marginLeft: "0px",
                      marginTop: "30px",
                      fontSize: "15px",
                      fontWeight: "500",
                      marginRight: "280px",
                      color: "#773106",
                      fontFamily: "Sora",
                    }
                  : isRange
                  ? {
                      marginLeft: "0px",
                      marginTop: "30px",
                      fontSize: "15px",
                      fontWeight: "500",

                      color: "#773106",
                      fontFamily: "Sora",
                    }
                  : {
                      // marginLeft: "0px",
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
              Specimen Signature Certificate.
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              sx={
                !(isMobile || isTablet) && !isRange
                  ? {
                      marginTop: "30px",
                      fontSize: "19px",
                      fontWeight: "500",
                      marginRight: "280px",
                      color: "#773106",
                      fontFamily: "Sora",
                    }
                  : isRange
                  ? {
                      marginTop: "30px",
                      fontSize: "17px",
                      fontWeight: "500",

                      color: "#773106",
                      fontFamily: "Sora",
                    }
                  : {
                      marginTop: "19px",
                      fontSize: "12px",
                      fontWeight: "500",
                      // marginRight: "280px",
                      color: "#773106",
                      fontFamily: "Sora",
                    }
              }
            >
              A Few things to Remember
            </Typography>
            <Typography
              sx={
                !(isMobile || isTablet) && !isRange
                  ? {
                      marginLeft: "0px",
                      marginTop: "30px",
                      fontSize: "15px",
                      fontWeight: "500",
                      marginRight: "280px",
                      color: "#773106",
                      fontFamily: "Sora",
                    }
                  : isRange
                  ? {
                      marginLeft: "0px",
                      marginTop: "30px",
                      fontSize: "15px",
                      fontWeight: "500",

                      color: "#773106",
                      fontFamily: "Sora",
                    }
                  : {
                      // marginLeft: "0px",
                      marginTop: "19px",
                      fontSize: "10px",
                      fontWeight: "500",
                      // marginRight: "280px",
                      color: "#773106",
                      fontFamily: "Sora",
                    }
              }
            >
              The name should be simple, unique, pin-pointed i.e. descriptive to
              the brand, ‘Nidhi Limited’ should come as the suffix, and it must
              not offend anyone, any group, creed, or people. There are a few
              forms to be filled-
            </Typography>
            <Typography
              sx={
                !(isMobile || isTablet) && !isRange
                  ? {
                      marginLeft: "0px",
                      marginTop: "30px",
                      fontSize: "15px",
                      fontWeight: "500",
                      marginRight: "280px",
                      color: "#773106",
                      fontFamily: "Sora",
                    }
                  : isRange
                  ? {
                      marginLeft: "0px",
                      marginTop: "30px",
                      fontSize: "15px",
                      fontWeight: "500",

                      color: "#773106",
                      fontFamily: "Sora",
                    }
                  : {
                      // marginLeft: "0px",
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
              INC9-To be filed by all the subscribers to MoA
            </Typography>
            <Typography
              sx={
                !(isMobile || isTablet) && !isRange
                  ? {
                      marginLeft: "0px",
                      marginTop: "30px",
                      fontSize: "15px",
                      fontWeight: "500",
                      marginRight: "280px",
                      color: "#773106",
                      fontFamily: "Sora",
                    }
                  : isRange
                  ? {
                      marginLeft: "0px",
                      marginTop: "30px",
                      fontSize: "15px",
                      fontWeight: "500",

                      color: "#773106",
                      fontFamily: "Sora",
                    }
                  : {
                      // marginLeft: "0px",
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
              DIR 2-To be filed by all the directors of the company also to be
              signed by all the subscribers, deceleration as per rule 5 & 6 of
              Nidhi rules 2014-
            </Typography>
            <Typography
              sx={
                !(isMobile || isTablet) && !isRange
                  ? {
                      marginLeft: "0px",
                      marginTop: "30px",
                      fontSize: "15px",
                      fontWeight: "500",
                      marginRight: "280px",
                      color: "#773106",
                      fontFamily: "Sora",
                    }
                  : isRange
                  ? {
                      marginLeft: "0px",
                      marginTop: "30px",
                      fontSize: "15px",
                      fontWeight: "500",

                      color: "#773106",
                      fontFamily: "Sora",
                    }
                  : {
                      // marginLeft: "0px",
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
              Directors and Members Begin With KYC Part
            </Typography>
            <Typography
              sx={
                !(isMobile || isTablet) && !isRange
                  ? {
                      marginLeft: "0px",
                      marginTop: "30px",
                      fontSize: "15px",
                      fontWeight: "500",
                      marginRight: "280px",
                      color: "#773106",
                      fontFamily: "Sora",
                    }
                  : isRange
                  ? {
                      marginLeft: "0px",
                      marginTop: "30px",
                      fontSize: "15px",
                      fontWeight: "500",

                      color: "#773106",
                      fontFamily: "Sora",
                    }
                  : {
                      // marginLeft: "0px",
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
              The Need For Digital Signature
            </Typography>
            <Typography
              sx={
                !(isMobile || isTablet) && !isRange
                  ? {
                      marginLeft: "0px",
                      marginTop: "30px",
                      fontSize: "15px",
                      fontWeight: "500",
                      marginRight: "280px",
                      color: "#773106",
                      fontFamily: "Sora",
                    }
                  : isRange
                  ? {
                      marginLeft: "0px",
                      marginTop: "30px",
                      fontSize: "15px",
                      fontWeight: "500",

                      color: "#773106",
                      fontFamily: "Sora",
                    }
                  : {
                      // marginLeft: "0px",
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
              Consent On Name 
            </Typography>
            <Typography
              sx={
                !(isMobile || isTablet) && !isRange
                  ? {
                      marginLeft: "0px",
                      marginTop: "30px",
                      fontSize: "15px",
                      fontWeight: "500",
                      marginRight: "280px",
                      color: "#773106",
                      fontFamily: "Sora",
                    }
                  : isRange
                  ? {
                      marginLeft: "0px",
                      marginTop: "30px",
                      fontSize: "15px",
                      fontWeight: "500",

                      color: "#773106",
                      fontFamily: "Sora",
                    }
                  : {
                      // marginLeft: "0px",
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
              Articles Of Association And Memorandum Of Association(Final Incorporation)
            </Typography>
            <Typography
              sx={
                !(isMobile || isTablet) && !isRange
                  ? {
                      marginLeft: "0px",
                      marginTop: "30px",
                      fontSize: "15px",
                      fontWeight: "500",
                      marginRight: "280px",
                      color: "#773106",
                      fontFamily: "Sora",
                    }
                  : isRange
                  ? {
                      marginLeft: "0px",
                      marginTop: "30px",
                      fontSize: "15px",
                      fontWeight: "500",

                      color: "#773106",
                      fontFamily: "Sora",
                    }
                  : {
                      // marginLeft: "0px",
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
              PAN and TAN & Opening Of Your Bank Account
            </Typography>
          </Grid>
        </Grid>
      </>
    </div>
  );
};

export default Documents;
