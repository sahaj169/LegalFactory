import React from "react";
import Bullet from "../../../../Assets/Images/bullet.svg";
import pf8 from "../../../../Assets/Images/pf8.png";
import pf9 from "../../../../Assets/Images/pf9.png";
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
        !(isMobile || isTablet) ? { marginTop: "59px" } : { marginTop: "39px" ,width:"130%"}
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
          Legal Factory - Partnership Firm online registration process :
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
          Step - 1: Select an appropriate name for the firm
        </Typography>
        <Grid
        container
        sx={
          !(isMobile || isTablet)
            ? { marginTop: "110px", justifyContent: "center" }
            : { display: "none" }
        }
      >
        <img src={pf8} alt="pf8" />
      </Grid>
      <Grid
        container
        sx={
          !(isMobile || isTablet)
            ? { marginTop: "110px", justifyContent: "center" }
            : { display: "none" }
        }
      >
        <img src={pf9} alt="pf9" />
      </Grid>
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
          Step -2 :File an Application
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
          Step -3 : Preparation of Partnership deed
        </Typography>
        <Grid
        item
        sx={
          !(isMobile || isTablet)
            ? { marginTop: "20px", marginLeft: "0px" }
            : { marginTop: "0px" }
        }
      >
        <Typography
          sx={
            !(isMobile || isTablet) && !isRange
              ? { fontSize: "16px", fontFamily: "Sora", fontWeight: "bold",marginLeft: "0px" }
              : isRange
              ? { fontSize: "16px", fontFamily: "Sora", fontWeight: "bold" }
              : { fontSize: "12px", fontFamily: "Sora",my:2,fontWeight:"bold" }
          }
        >
          Below given Components Are The Parts Of Partnership Deed:
        </Typography>
      </Grid>
      <Grid item sx={!(isMobile || isTablet) && { marginLeft: "0px" }}>
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
         Details of the partners and firm such as their name, address, qualification
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
          Nature of business activities involved
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
          Capital contribution made by all partners
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
          Shares/Interest of all the partners
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
          Profit/loss sharing ratio among all the partners
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
        Rights, duties, salaries, commissions or payable amount of the partners
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
         Details of the loans provided by the partners
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
          Circumstances or process that would be followed in case of death or retirement of any designated partner
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
          Other clauses made with mutual consent of all the partners.
        </Typography>

        
      </Grid>
       
      </Grid>
      {/* <Grid item sx={!(isMobile || isTablet) && { marginLeft: "20px" }}>
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
          The Registrar of Companies (RoC) across India expect applicant to
          follow a few naming guidelines. Some of them are subjective, which
          means that approval can depend on the opinion of the officer handling
          your application. However, the more closely you follow the rules
          listed below, the better your chances of approval.
        </Typography>
      </Grid>  */}
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
          Step -4: Submission of the Documents
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
          Step -5: Verification of Documents And Issuance of Registration Certificate.
        </Typography>
      </Grid>
      
      
      
      
    </Grid>
  );
};

export default Register;
