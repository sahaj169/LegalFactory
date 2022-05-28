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
            {/* <Typography
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
              Identity and Address Proof
            </Typography> */}
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
              Application for registration of partnership(Form 1)
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
              Certified original copy of partnership deed.
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
              Specimen of an affidavit certifying all the details mentioned in
              the partnership deed and documents are correct.
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
              PAN card and address proof of the partners.
            </Typography>
          </Grid>
          <Grid item>
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
              Proof of principal place of business of the firm.
            </Typography>
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
              NOTE: If the documents satisfy the registrar, the firm will be
              entered into the register of firms and a certificate of
              registration will be issued.
            </Typography>
          </Grid>
        </Grid>
      </>
    </div>
  );
};

export default Documents;
