import React from "react";

import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

import Bullet from "../../../../Assets/Images/bullet.svg";

const Legalfactory = () => {
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
          Why LEGAL FACTORY Partnership Firm?
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          sx={
            !(isMobile || isTablet) && !isRange
              ? {
                  marginTop: "49px",
                  fontSize: "18px",
                  fontWeight: "500",
                  marginRight: "280px",
                  fontFamily: "Sora",
                }
              : isRange
              ? {
                  marginTop: "49px",
                  fontSize: "15px",
                  fontWeight: "500",

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
          LEGAL FACTORY a unit of Xpert finance is one of the the fastest going
          fintech company. Legal factory and Xpert finance team of young and
          enthusiastic qualified professionals who care focused to provide
          excellent professional services with quality, innovation and highest
          standard of client’s satisfaction in the field of Corporate Law,
          Securities Law, Capital Market Compliance, SEBI, RBI, MSMEs and
          Intellectual property rights services. We have expertise in financial
          markets in the area of Compliance, Membership, Internal Audit, Anti
          Money Laundering & Insider Trading, System Audits and Cyber Securities
          Audit .
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          sx={
            !(isMobile || isTablet) && !isRange
              ? {
                  marginTop: "49px",
                  fontSize: "18px",
                  fontWeight: "500",
                  marginRight: "280px",
                  fontFamily: "Sora",
                }
              : isRange
              ? {
                  marginTop: "49px",
                  fontSize: "15px",
                  fontWeight: "500",

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
          LEGAL FACTORY is cognizant of the new process. Our team is experienced
          like old wine and, we have helped many start up, traders,
          manufacturers, entrepreneurs, financial advisories, ad agencies,
          professionals register their businesses in India. Entire India , our
          services are comprehensive and reach every corner of the country .
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          sx={
            !(isMobile || isTablet) && !isRange
              ? {
                  marginTop: "49px",
                  fontSize: "18px",
                  fontWeight: "500",
                  marginRight: "280px",
                  fontFamily: "Sora",
                }
              : isRange
              ? {
                  marginTop: "49px",
                  fontSize: "15px",
                  fontWeight: "500",

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
          With Legal factory and Xpert finance setting up business is an easy ,
          100% reliable, secure, fast process . When you choose us to be your
          partner to register your business , you get to avail a few undeniable
          benefits and in case of amendments or changes from the government/
          regulator our experienced Dedicated compliance team takes care of them
          for you.
        </Typography>
      </Grid>
      <Grid
        item
        sx={
          !(isMobile || isTablet)
            ? { marginTop: "20px" }
            : { marginTop: "10px" }
        }
      >
        <Typography
          sx={
            !(isMobile || isTablet)
              ? {
                  fontSize: "18px",
                  color: "#E78D00",
                  fontFamily: "Sora",
                  fontWeight: "bold",
                }
              : {
                  fontSize: "13px",
                  color: "#E78D00",
                  fontFamily: "Sora",
                }
          }
        >
          We also provide assistance with:
        </Typography>
      </Grid>
      <Grid item>
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
          A first free consultation, followed by subsequent meetings to clear
          every concern you may face.
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
          Complete support on opening a Current Bank Account with partner banks.
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
          Comprehensive and on-time updates on ROC compliances.
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
          Purchase of Online Accounting Software or exclusive account manager
          for handling accounts .
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
          A Master file that contains all the documented needed to file the
          incorporation.
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
          A Dedicated Admin manager is present at all times to ensure quality of
          service and maintenance of timeliness and schedules.
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          sx={
            !(isMobile || isTablet) && !isRange
              ? {
                  marginTop: "49px",
                  fontSize: "18px",
                  fontWeight: "500",
                  marginRight: "280px",
                  fontFamily: "Sora",
                }
              : isRange
              ? {
                  marginTop: "49px",
                  fontSize: "15px",
                  fontWeight: "500",

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
          Being a seperate legal entity from the existing partnership firm, LLP
          will have its unique name pan card so it is required a new/separate
          GST Registration on the name of LLP.
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          sx={
            !(isMobile || isTablet) && !isRange
              ? {
                  marginTop: "49px",
                  fontSize: "18px",
                  fontWeight: "500",
                  marginRight: "280px",
                  fontFamily: "Sora",
                }
              : isRange
              ? {
                  marginTop: "49px",
                  fontSize: "15px",
                  fontWeight: "500",

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
          Confidentiality is one of the most important aspects of our work. We
          guarantee the privacy of our customers through three key components.
          Our customer database cannot be printed or exported. So, all the
          confidential data or personal data of our customers is strictly
          confined to our offices.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Legalfactory;
