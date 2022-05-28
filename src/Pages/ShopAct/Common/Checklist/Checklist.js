import React from "react";

import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import Bullet from "../../../../Assets/Images/bullet.svg";
import ChecklistImage from "../../../../Assets/Images/shopActChecklist.png";

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
          Checklist for Shop Act Establishment
        </Typography>
      </Grid>
      <Grid item sx={!(isMobile || isTablet) && { marginLeft: "20px" }}>
        <Typography
          sx={
            !(isMobile || isTablet) && !isRange
              ? {
                  fontSize: "18px",
                  fontWeight: "600",
                  marginTop: "30px",
                  fontFamily: "Sora",
                }
              : isRange
              ? {
                  fontSize: "16px",
                  fontWeight: "600",
                  marginTop: "30px",
                  fontFamily: "Sora",
                }
              : {
                  fontSize: "12px",
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
          Shop or business address proof
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
          ID proof
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
          PAN card
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
          Payment challan
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
          Additional business licenses necessary to start a business.
        </Typography>
      </Grid>
      <Grid
        container
        sx={
          !(isMobile || isTablet)
            ? {
                marginTop: "0px",
                justifyContent: "center",
                marginBottom: "-50px",
              }
            : { display: "none" }
        }
      >
        {/* <img src={Info} alt='Info' /> */}
      </Grid>
      <Grid
        item
        sx={
          !(isMobile || isTablet) && { marginLeft: "20px", marginTop: "50px" }
        }
      >
        <Typography
          sx={
            !(isMobile || isTablet) && !isRange
              ? {
                  fontSize: "18px",
                  fontWeight: "600",
                  marginTop: "30px",
                  fontFamily: "Sora",
                }
              : isRange
              ? {
                  fontSize: "16px",
                  fontWeight: "600",
                  marginTop: "30px",
                  fontFamily: "Sora",
                }
              : {
                  fontSize: "12px",
                  fontWeight: "600",
                  marginTop: "19px",
                  fontFamily: "Sora",
                }
          }
        >
          Some Records that are maintained under the enactment of Shop &
          Establishment Act :
        </Typography>
        <Typography
          sx={
            !(isMobile || isTablet) && !isRange
              ? {
                  marginTop: "21px",
                  fontSize: "18px",
                  fontWeight: "500",
                  marginRight: "280px",
                  fontFamily: "Sora",
                }
              : isRange
              ? {
                  marginTop: "21px",
                  fontSize: "15px",
                  fontWeight: "500",
                  // marginRight: "280px",
                  fontFamily: "Sora",
                }
              : {
                  marginTop: "19px",

                  fontWeight: "500",
                  // marginRight: "100px",
                  fontFamily: "Sora",
                  fontSize: "12px",
                }
          }
        >
          Under the Shop & Establishment Act, every business has to seek
          approval from the Department of Labour and keep up-to-date registers
          regarding details of employment, fines, deductions and advances,
          salary and holidays. However, the requirements may vary from state to
          state. Files related to annual holidays and the number of employees
          need to be submitted to the office of the Municipal Corporation
          annually further no Regular return needs to be filed under this Act.
          {<br />}
          However some of the records that might need to be maintained under the
          Act are:
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
          National holidays
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
          Hours of work including over-time
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
          Prohibition of employment of children
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
          Terms & conditions
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
          Employment of young person/women
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
          Opening and closing hours
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
          Conditions on providing the wages
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
          Weekly holidays and wages on holidays
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
          Time of payment
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
          Leave policy
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
          Work Environment
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
          Accidents
        </Typography>

        <Grid
        container
        sx={
          !(isMobile || isTablet)
            ? { marginTop: "110px", justifyContent: "center" }
            : { display: "none" }
        }
      >
        <img src={ChecklistImage} alt="pf8" style={{ width: "762px", height: "673px"}} />
      </Grid>
      </Grid>
    </Grid>
  );
};

export default Checklist;
