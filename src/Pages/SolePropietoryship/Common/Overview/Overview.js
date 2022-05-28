import React from "react";
import Bullet from "../../../../Assets/Images/bullet.svg";
import spstrip from "../../../../Assets/Images/spstrip.png";
import sp6 from "../../../../Assets/Images/sp6.png";
import sp5 from "../../../../Assets/Images/sp5.png";


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
          !(isMobile || isTablet)
            ? { marginLeft: "20px", marginTop: "59px" }
            : {
                width: "130%",
              }
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
                    width: "100%",
                  }
            }
          >
            What is a Sole Proprietorship?
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
            A Sole Proprietorship is a blessing in disguise for merchants and
            small traders involved in unsystematic mode of businesses with
            little investments. It is owned by a single person wherein there is
            no legal partition between the owner and the business. Which
            directly implies that the loss or profit of the proprietorship
            company is considered that of the individual and the income of the
            company as the income of the owner as per the Income Tax Act.
            Moreover, the owner enjoys the rights provided to a registered legal
            company although it is not a legal entity. There is unlimited
            liability and no perpetual existence.
          </Typography>
          <img src={spstrip} alt="spstrip" height="100%" width="100%" style={{marginTop:"30px"}} />
        </Grid>

        <Grid item id="Advantages">
          <Typography
            sx={
              !(isMobile || isTablet) && !isRange
                ? {
                    color: "#E99101",
                    fontSize: "26px",
                    fontWeight: "600",
                    fontFamily: "Sora",
                    marginTop:"30px"
                  }
                : isRange
                ? {
                    color: "#E99101",
                    fontSize: "24px",
                    fontWeight: "600",
                    fontFamily: "Sora",
                    marginTop:"30px"
                  }
                : {
                    color: "#E99101",
                    fontSize: "16px",
                    fontWeight: "600",
                    fontFamily: "Sora",
                    width: "100%",
                    marginTop:"30px"
                  }
            }
          >
            Advantages of having a Sole Proprietorship
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
            It can be incorporated by a single person and so it is Easy to
            Operate
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
             It does not have any specific registration requirements and the
            legal identity of the proprietor can be used by the business. Hence,
            a proprietorship can be started without any registration.
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
   The compliance requirements are very low as compared to other types of entities. 
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
            	It's economical as only one person is Sole Beneficiary
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
           	Only one person is responsible for decision making and control of the business.
          </Typography>
        </Grid>

        <Grid
        container
        sx={
          !(isMobile || isTablet)
            ? { marginTop: "110px", justifyContent: "center" }
            : { display: "none" }
        }
      >
        <img src={sp6} alt="sp6" width="60%" height="60%" style={{}} />
        <img src={sp5} alt="sp5" width="60%" height="60%" style={{marginTop:"100px"}} />
      </Grid>
    

        
      </Grid>
    </>
  );
};

export default Overview;
