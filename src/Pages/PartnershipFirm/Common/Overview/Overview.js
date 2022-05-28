import React from "react";
import Bullet from "../../../../Assets/Images/bullet.svg";
import pfstrip from "../../../../Assets/Images/pfstrip.png";


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
          !(isMobile || isTablet) ?{ marginLeft: "20px", marginTop: "59px" }:{width:"130%"}
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
            How to set up a Partnership Firm in India ?
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
            General Partnership is a well recognised corporate structure wherein
            two or more partners work in mutual alliance with unlimited
            liability for the debts of the business, registration of which is
            done under the Partnership Act, 1932. <br/>
            However this option suits home
            businesses wherein this unlimited liability dies/loses its effect as
            there are no debts to be put on, moreover there are many benefits
            introduced by the govt for registering a Partnership Firm. Count on
            Legal Factory experts to register and to know the latest deed
            format.<br/>
             Partnership Firm a profit-oriented organisation wherein all
            the partners share the profits and losses in proportion to their
            ownership. The Capital amount is often huge and it is mandatory for
            all partners to be on the same path before taking any decision.
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            sx={
              !(isMobile || isTablet) && !isRange
                ? {
                    
                    fontSize: "20px",
                    fontWeight: "600",
                    fontFamily: "Sora",
                    marginTop:"20px"
                  }
                : isRange
                ? {
                   
                    fontSize: "20px",
                    fontWeight: "600",
                    fontFamily: "Sora",
                    marginTop:"20px"
                  }
                : {
                    
                    fontSize: "14px",
                    fontWeight: "600",
                    fontFamily: "Sora",
                    marginTop:"20px"
                  }
            }>
              BENEFITS UNDER PARTNERSHIP FIRM REGISTRATION
            </Typography>
        </Grid>
        <Grid item>
          <Typography
            sx={
              !(isMobile || isTablet) && !isRange
                ? {
                    marginTop: "41px",
                    fontSize: "15px",
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
                    fontSize: "10px",
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
            Easiest Business Structure
          </Typography>
          <Typography
            sx={
              !(isMobile || isTablet) && !isRange
                ? {
                    marginTop: "41px",
                    fontSize: "15px",
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
                    fontSize: "10px",
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
            Ease in Decision Making
          </Typography>
          <Typography
            sx={
              !(isMobile || isTablet) && !isRange
                ? {
                    marginTop: "41px",
                    fontSize: "15px",
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
                    fontSize: "10px",
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
            Raising Funds
          </Typography>
          <Typography
            sx={
              !(isMobile || isTablet) && !isRange
                ? {
                    marginTop: "41px",
                    fontSize: "15px",
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
                    fontSize: "10px",
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
            Easy Management without any Disputes
          </Typography>
          <Typography
            sx={
              !(isMobile || isTablet) && !isRange
                ? {
                    marginTop: "41px",
                    fontSize: "15px",
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
                    fontSize: "10px",
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
            Ability to file case against Third Parties
          </Typography>
          <Typography
            sx={
              !(isMobile || isTablet) && !isRange
                ? {
                    marginTop: "41px",
                    fontSize: "15px",
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
                    fontSize: "10px",
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
          Can file suit against co-partners
          </Typography>
          <Typography
            sx={
              !(isMobile || isTablet) && !isRange
                ? {
                    marginTop: "41px",
                    fontSize: "15px",
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
                    fontSize: "10px",
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
            Easy Conversion of the Firm
          </Typography>
          <Typography
            sx={
              !(isMobile || isTablet) && !isRange
                ? {
                    marginTop: "41px",
                    fontSize: "15px",
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
                    fontSize: "10px",
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
            Enjoys Higher Credibility
          </Typography>
          <Typography
            sx={
              !(isMobile || isTablet) && !isRange
                ? {
                    marginTop: "41px",
                    fontSize: "15px",
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
                    fontSize: "10px",
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
            Ability to Claim Set-off
          </Typography>
        </Grid>
        <img src={pfstrip} alt="pfstrip" height="100%" width="100%" style={{marginTop:"30px"}} />
        
      </Grid>
      {/* <Grid
        container
        sx={
          !(isTablet || isMobile) && !isRange
            ? { marginTop: "50px" }
            : isRange
            ? { display: "none" }
            : { display: "none" }
        }
      >
         <Grid item xs={4}>
          {isRange ? (
            <img
              src={Reading}
              alt="Reading"
              height="100%"
              width="100%"
              style={{ marginLeft: "-30px" }}
            />
          ) : (
            <img src={Reading} alt="Reading" style={{ marginLeft: "-30px" }} />
          )}
        </Grid>
        <Grid item xs={3}>
          {isRange ? (
            <img src={Ltd} alt="Reading" height="100%" width="100%" />
          ) : (
            <img src={Ltd} alt="Reading" />
          )}
        </Grid>
        <Grid item xs={3}>
          {isRange ? (
            <img src={pfstrip} alt="Reading" height="100%" width="260%" />
          ) : (
            <img src={pfstrip} alt="Reading" />
          )}
        </Grid> 
      </Grid> */}
    </>
  );
};

export default Overview;
