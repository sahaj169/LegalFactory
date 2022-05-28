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
              Documentation Needed For Registering A Producer Company
            </Typography>
          </Grid>
          <Grid item>
          <Typography
            sx={
              !(isMobile || isTablet) && !isRange
                ? {
                    fontSize: "19px",
                    fontWeight: "600",
                    marginTop: "30px",
                    color: "#703C00",
                    fontFamily: "Sora",
                  }
                : isRange
                ? {
                    fontSize: "17px",
                    fontWeight: "600",
                    marginTop: "30px",
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
              TO BE SUBMITTED BY DIRECTORS & SHAREHOLDERS
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
                      // marginLeft: "20px",
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
              Scanned copy of PAN card or passport (foreign nationals & NRIs)
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
                      // marginLeft: "20px",
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
              Scanned copy of voter ID/passport/driving licence
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
                      // marginLeft: "20px",
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
              Scanned copy of the latest bank statement/telephone or mobile
              bill/electricity or gas bill
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
                      // marginLeft: "20px",
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
              Scanned passport-sized photograph specimen signature (blank
              document with signature [directors only])
            </Typography>
            <Typography
              sx={
                !(isMobile || isTablet) && !isRange
                  ? {
                      marginTop: "30px",
                      fontSize: "17px",
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
              NOTE: Any of the directors must self-attest the first three
              documents. In case of foreign nationals & NRI’s, all the documents
              must be notarized(if currently in India or a non-Commonwealth
              country)or apostille (if in a Commonwealth country)
            </Typography>
          </Grid>
          <Grid item>
          <Typography
            sx={
              !(isMobile || isTablet) && !isRange
                ? {
                    fontSize: "19px",
                    fontWeight: "600",
                    marginTop: "30px",
                    color: "#703C00",
                    fontFamily: "Sora",
                  }
                : isRange
                ? {
                    fontSize: "17px",
                    fontWeight: "600",
                    marginTop: "30px",
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
              FOR THE REGISTERED OFFICE
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
                      // marginLeft: "20px",
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
              Scanned copy of the latest bank statement/telephone or mobile
              bill/electricity or gas bill
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
                      // marginLeft: "20px",
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
              Scanned copy of notarized rental agreement in English
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
                      // marginLeft: "20px",
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
              Scanned copy of no-objection certificate from the property owner
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
                      // marginLeft: "20px",
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
              Scanned copy of sale deed/property deed in English (in case of
              owned property)
            </Typography>
            <Typography
              sx={
                !(isMobile || isTablet) && !isRange
                  ? {
                      marginTop: "30px",
                      fontSize: "17px",
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
              NOTE: Your registered office need not be a commercial space; it
              can be your residence, too.
            </Typography>
          </Grid>
        </Grid>
      </>
    </div>
  );
};

export default Documents;
