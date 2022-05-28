import React from "react";

import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import Bullet from "../../../../Assets/Images/bullet.svg";


const Advantage = () => {
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
          Advantages of Limited Liability Partnership
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
          Separate Legal Entity: An LLP like a company, is a separate legal
          entity. It helps gain the trust of various stakeholders and customers.
          Even though one of the partners left, the business still remains, as
          it is distinct from its partners. Ownership can be transferred simply
          as any person can easily be inducted as a designated partner and the
          ownership switches to them.
        </Typography>
        <Typography
          sx={
            !(isMobile || isTablet) && !isRange
              ? {
                  marginTop: "20px",
                  fontSize: "15px",
                  fontWeight: "500",
                  marginRight: "280px",
                  color: "#773106",
                  fontFamily: "Sora",
                }
              : isRange
              ? {
                  marginTop: "20px",
                  fontSize: "15px",
                  fontWeight: "500",
                  // marginRight: "280px",
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
          Limited Liability: The partnership is structured in such a way that
          the partners are only liable only to the contributions made by them,
          meaning that they are liable to pay only the amount of contribution
          made by them and are personally not liable for any loss in business.
          The partners have no personal liabilities, and thus they are free to
          operate as credible businessmen.
        </Typography>

        <Typography
          sx={
            !(isMobile || isTablet) && !isRange
              ? {
                  marginTop: "20px",
                  fontSize: "15px",
                  fontWeight: "500",
                  marginRight: "280px",
                  color: "#773106",
                  fontFamily: "Sora",
                }
              : isRange
              ? {
                  marginTop: "20px",
                  fontSize: "15px",
                  fontWeight: "500",
                  // marginRight: "280px",
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
          Minimum Capital Contribution: It can be registered without any minimum
          capital, i.e. there is no requirement of having a minimum paid-up
          capital before going for incorporation. Having a minimum capital
          amount of less than 25 lakhs and a turnover below 40 lakhs per year,so
          it does not require any formal audits.
        </Typography>
      </Grid>
      {/* <Grid
        container
        sx={
          !(isMobile || isTablet)
            ? {
                marginTop: "70px",
                justifyContent: "center",
                marginBottom: "50px",
              }
            : { display: "none" }
        }
      >
        <img src={Advantages} alt="sp6" width="60%" height="60%" style={{}} />
      </Grid> */}
    </Grid>
  );
};

export default Advantage;
