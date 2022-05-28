import React from "react";

import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import Bullet from "../../../../Assets/Images/bullet.svg";
import pf7 from "../../../../Assets/Images/pf7.png";

const Checklist = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isRange = useMediaQuery(theme.breakpoints.between("md", "lg"));

  return (
    <Grid
      container
      direction="column"
      sx={
        !(isMobile || isTablet) ? { marginTop: "59px" } : { marginTop: "39px",width:"130%" }
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
          Checklist for company registration in India
        </Typography>
      </Grid>
      <Grid item sx={!(isMobile || isTablet) && { marginLeft: "20px" }}>
        <Typography
          sx={
            !(isMobile || isTablet) && !isRange
              ? {
                  fontSize: "20px",
                  fontWeight: "600",
                  marginTop: "30px",
                  fontFamily: "Sora",
                }
              : isRange
              ? {
                  fontSize: "18px",
                  fontWeight: "600",
                  marginTop: "30px",
                  fontFamily: "Sora",
                }
              : {
                  fontSize: "14px",
                  fontWeight: "600",
                  marginTop: "19px",
                  fontFamily: "Sora",
                }
          }
        >
          Basic checklist required for company registration are :
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
          The name shouldn’t be too similar or identical to an existing firm
          operating in the industry.
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
          The name shouldn’t contain words like crown, empress, emperor, empire
          or any other words which show sanction or authorisation of the
          government.
        </Typography>
        
        
      </Grid>
      <Grid
        container
        sx={
          !(isMobile || isTablet)
            ? { marginTop: "90px", marginBottom: "90px", justifyContent: "center" }
            : { display: "none" }
        }
      >
        <img src={pf7} alt="Checklist" />
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
              ? { fontSize: "18px", fontFamily: "Sora", fontWeight: "bold" }
              : isRange
              ? { fontSize: "18px", fontFamily: "Sora", fontWeight: "bold" }
              : { fontSize: "14px", fontFamily: "Sora" ,my:2,fontWeight:"bold"}
          }
        >
          Things Ought To Be Done: 
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
              ? { fontSize: "16px", fontFamily: "Sora", color:"#FFA511",fontWeight:"bold"}
              : isRange
              ? { fontSize: "16px", fontFamily: "Sora", color:"#FFA511" ,fontWeight:"bold"}
              : { fontSize: "12px", fontFamily: "Sora",color:"#FFA511",fontWeight:"bold" }
          }
        >
          Drafting of Partnership deed.
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
         Minimum two members as partners.
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
          Maximum number of partners equal to or less than 20.
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
          Selection of appropriate names.
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
         Principal place of business
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
          PAN card and bank account of the firm
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
        Initial investment to start the firm
        </Typography>

       

        
      </Grid>


    </Grid> 
  );
};

export default Checklist;
