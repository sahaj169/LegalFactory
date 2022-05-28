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
              : { marginTop: "39px",width:"130%" }
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
                     
                      marginRight: "280px",
                      color: "#773106",
                      fontFamily: "Sora",
                      fontWeight:"bold"
                    }
                  : isRange
                  ? {
                      marginTop: "30px",
                      fontSize: "15px",
                      fontWeight:"bold",

                      color: "#773106",
                      fontFamily: "Sora",
                    }
                  : {
                      marginTop: "19px",
                      fontSize: "12px",
                      fontWeight:"bold",
                      // marginRight: "280px",
                      color: "#773106",
                      fontFamily: "Sora",
                    }
              }
            >
              Identity and Address Proof
            </Typography>
            <Typography
              sx={
                !(isMobile || isTablet) && !isRange
                  ? {
                      marginLeft: "20px",
                      marginTop: "30px",
                      fontSize: "18px",
                      fontWeight: "500",
                      marginRight: "280px",
                      color: "#773106",
                      fontFamily: "Sora",
                    }
                  : isRange
                  ? {
                      marginLeft: "20px",
                      marginTop: "30px",
                      fontSize: "15px",
                      fontWeight: "500",

                      color: "#773106",
                      fontFamily: "Sora",
                    }
                  : {
                      // marginLeft: "20px",
                      marginTop: "19px",
                      fontSize: "12px",
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
              Scanned copy of PAN card or passport (foreign nationals & NRIs)
            </Typography>
            <Typography
              sx={
                !(isMobile || isTablet) && !isRange
                  ? {
                      marginLeft: "20px",
                      marginTop: "30px",
                      fontSize: "18px",
                      fontWeight: "500",
                      marginRight: "280px",
                      color: "#773106",
                      fontFamily: "Sora",
                    }
                  : isRange
                  ? {
                      marginLeft: "20px",
                      marginTop: "30px",
                      fontSize: "15px",
                      fontWeight: "500",

                      color: "#773106",
                      fontFamily: "Sora",
                    }
                  : {
                      // marginLeft: "20px",
                      marginTop: "19px",
                      fontSize: "12px",
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
              Scanned copy of voter ID/passport/driving licence
            </Typography>
            <Typography
              sx={
                !(isMobile || isTablet) && !isRange
                  ? {
                      marginLeft: "20px",
                      marginTop: "30px",
                      fontSize: "18px",
                      fontWeight: "500",
                      marginRight: "280px",
                      color: "#773106",
                      fontFamily: "Sora",
                    }
                  : isRange
                  ? {
                      marginLeft: "20px",
                      marginTop: "30px",
                      fontSize: "15px",
                      fontWeight: "500",

                      color: "#773106",
                      fontFamily: "Sora",
                    }
                  : {
                      // marginLeft: "20px",
                      marginTop: "19px",
                      fontSize: "12px",
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
              Scanned copy of the latest bank statement/telephone or mobile
              bill/electricity or gas bill
            </Typography>
            <Typography
              sx={
                !(isMobile || isTablet) && !isRange
                  ? {
                      marginLeft: "20px",
                      marginTop: "30px",
                      fontSize: "18px",
                      fontWeight: "500",
                      marginRight: "280px",
                      color: "#773106",
                      fontFamily: "Sora",
                    }
                  : isRange
                  ? {
                      marginLeft: "20px",
                      marginTop: "30px",
                      fontSize: "15px",
                      fontWeight: "500",

                      color: "#773106",
                      fontFamily: "Sora",
                    }
                  : {
                      // marginLeft: "20px",
                      marginTop: "19px",
                      fontSize: "12px",
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
              Scanned passport-sized photograph specimen signature (blank
              document with signature [directors only])
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              sx={
                !(isMobile || isTablet) && !isRange
                  ? {
                      marginTop: "30px",
                      fontSize: "19px",
                      fontWeight: "bold",
                      marginRight: "280px",
                      color: "#773106",
                      fontFamily: "Sora",
                    }
                  : isRange
                  ? {
                      marginTop: "30px",
                      fontSize: "17px",
                      fontWeight: "bold",

                      color: "#773106",
                      fontFamily: "Sora",
                    }
                  : {
                      marginTop: "19px",
                      fontSize: "12px",
                      fontWeight: "bold",
                      // marginRight: "280px",
                      color: "#773106",
                      fontFamily: "Sora",
                    }
              }
            >
              Registered Office Proof
            </Typography>
            <Typography
              sx={
                !(isMobile || isTablet) && !isRange
                  ? {
                      marginLeft: "20px",
                      marginTop: "30px",
                      fontSize: "18px",
                      fontWeight: "500",
                      marginRight: "280px",
                      color: "#773106",
                      fontFamily: "Sora",
                    }
                  : isRange
                  ? {
                      marginLeft: "20px",
                      marginTop: "30px",
                      fontSize: "15px",
                      fontWeight: "500",

                      color: "#773106",
                      fontFamily: "Sora",
                    }
                  : {
                      // marginLeft: "20px",
                      marginTop: "19px",
                      fontSize: "12px",
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
              Scanned copy of the latest bank statement/telephone or mobile
              bill/electricity or gas bill
            </Typography>
            <Typography
              sx={
                !(isMobile || isTablet) && !isRange
                  ? {
                      marginLeft: "20px",
                      marginTop: "30px",
                      fontSize: "18px",
                      fontWeight: "500",
                      marginRight: "280px",
                      color: "#773106",
                      fontFamily: "Sora",
                    }
                  : isRange
                  ? {
                      marginLeft: "20px",
                      marginTop: "30px",
                      fontSize: "15px",
                      fontWeight: "500",

                      color: "#773106",
                      fontFamily: "Sora",
                    }
                  : {
                      // marginLeft: "20px",
                      marginTop: "19px",
                      fontSize: "12px",
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
              Scanned copy of notarized rental agreement in English
            </Typography>
            <Typography
              sx={
                !(isMobile || isTablet) && !isRange
                  ? {
                      marginLeft: "20px",
                      marginTop: "30px",
                      fontSize: "18px",
                      fontWeight: "500",
                      marginRight: "280px",
                      color: "#773106",
                      fontFamily: "Sora",
                    }
                  : isRange
                  ? {
                      marginLeft: "20px",
                      marginTop: "30px",
                      fontSize: "15px",
                      fontWeight: "500",

                      color: "#773106",
                      fontFamily: "Sora",
                    }
                  : {
                      // marginLeft: "20px",
                      marginTop: "19px",
                      fontSize: "12px",
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
              Scanned copy of no-objection certificate from the property owner
            </Typography>
            <Typography
              sx={
                !(isMobile || isTablet) && !isRange
                  ? {
                      marginLeft: "20px",
                      marginTop: "30px",
                      fontSize: "18px",
                      fontWeight: "500",
                      marginRight: "280px",
                      color: "#773106",
                      fontFamily: "Sora",
                    }
                  : isRange
                  ? {
                      marginLeft: "20px",
                      marginTop: "30px",
                      fontSize: "15px",
                      fontWeight: "500",

                      color: "#773106",
                      fontFamily: "Sora",
                    }
                  : {
                      // marginLeft: "20px",
                      marginTop: "19px",
                      fontSize: "12px",
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
              Scanned copy of sale deed/property deed in English (in case of
              owned property)
            </Typography>
          </Grid>
        </Grid>
      </>
    </div>
  );
};

export default Documents;
