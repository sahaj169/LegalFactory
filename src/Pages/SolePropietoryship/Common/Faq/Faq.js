import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Bullet from "../../../../Assets/Images/bullet.svg";

const Faq = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isRange = useMediaQuery(theme.breakpoints.between("md", "lg"));

  return (
    <Grid
      container
      direction="column"
      sx={
        !(isMobile || isTablet) && !isRange
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
          FAQs
        </Typography>
      </Grid>
      <Grid
        item
        sx={
          !(isMobile || isTablet)
            ? { marginTop: "25px" }
            : { marginTop: "20px" }
        }
      >
        <Accordion
          sx={
            !(isMobile || isTablet) && !isRange
              ? { width: "75%", boxShadow: "none", marginLeft: "-13px" }
              : isRange
              ? {
                  width: "100%",
                  boxShadow: "none",
                  marginLeft: "-13px",
                }
              : { width: "100%", boxShadow: "none", marginLeft: "-13px" }
          }
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              sx={
                !(isMobile || isTablet) && !isRange
                  ? {
                      fontSize: "15px",
                      fontWeight: "500",
                      marginRight: "280px",
                      color: "#773106",
                      fontFamily: "Sora",
                     
                    }
                  : isRange
                  ? {
                      fontSize: "15px",
                      fontWeight: "500",

                      color: "#773106",
                      fontFamily: "Sora",
                      marginTop: "0px",
                    }
                  : {
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
              Do I need to be physically present during this process?
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{ background: "rgba(233, 148, 16, 0.17)", boxShadow: "none" }}
          >
            <Typography
              sx={
                !(isMobile || isTablet) && !isRange
                  ? {
                      fontSize: "15px",
                      fontWeight: "500",
                      marginRight: "280px",
                      color: "#773106",
                      fontFamily: "Sora",
                    }
                  : isRange
                  ? {
                      fontSize: "15px",
                      fontWeight: "500",

                      color: "#773106",
                      fontFamily: "Sora",
                    }
                  : {
                      fontSize: "10px",
                      fontWeight: "500",
                      // marginRight: "280px",
                      color: "#773106",
                      fontFamily: "Sora",
                    }
              }
            >
              No, the entire process is online and thus no physical presence is
              required.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>

    
      <Grid item sx={!(isMobile || isTablet) && { marginTop: "-20px" }}>
        <Accordion
          sx={
            !(isMobile || isTablet) && !isRange
              ? { width: "75%", boxShadow: "none", marginLeft: "-13px" }
              : isRange
              ? {
                  width: "100%",
                  boxShadow: "none",
                  marginLeft: "-13px",
                }
              : { width: "100%", boxShadow: "none", marginLeft: "-13px" }
          }
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              sx={
                !(isMobile || isTablet) && !isRange
                  ? {
                      fontSize: "15px",
                      fontWeight: "500",
                      marginRight: "280px",
                      color: "#773106",
                      fontFamily: "Sora",
                      
                    }
                  : isRange
                  ? {
                      fontSize: "15px",
                      fontWeight: "500",

                      color: "#773106",
                      fontFamily: "Sora",
                      marginTop: "0px",
                    }
                  : {
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
              Timeline for setting up a private limited company in India?
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{ background: "rgba(233, 148, 16, 0.17)", boxShadow: "none" }}
          >
            <Typography
              sx={
                !(isMobile || isTablet) && !isRange
                  ? {
                      fontSize: "15px",
                      fontWeight: "500",
                      marginRight: "280px",
                      color: "#773106",
                      fontFamily: "Sora",
                    }
                  : isRange
                  ? {
                      fontSize: "15px",
                      fontWeight: "500",

                      color: "#773106",
                      fontFamily: "Sora",
                    }
                  : {
                      fontSize: "10px",
                      fontWeight: "500",
                      // marginRight: "280px",
                      color: "#773106",
                      fontFamily: "Sora",
                    }
              }
            >
              The legal factory team shall assist in filing of all the documents
              with the registrar of company once all the documentation is been
              completed it shall take a maximum timeline of 15 days
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>
      <Grid item>
        <Accordion
          sx={
            !(isMobile || isTablet) && !isRange
              ? { width: "75%", boxShadow: "none", marginLeft: "-13px" }
              : isRange
              ? {
                  width: "100%",
                  boxShadow: "none",
                  marginLeft: "-13px",
                }
              : { width: "100%", boxShadow: "none", marginLeft: "-13px" }
          }
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              sx={
                !(isMobile || isTablet) && !isRange
                  ? {
                      fontSize: "15px",
                      fontWeight: "500",
                      marginRight: "280px",
                      color: "#773106",
                      fontFamily: "Sora",
                      marginTop: "0px",
                    }
                  : isRange
                  ? {
                      fontSize: "15px",
                      fontWeight: "500",

                      color: "#773106",
                      fontFamily: "Sora",
                      marginTop: "0px",
                    }
                  : {
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
              Who can get sole proprietorship registration?
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{ background: "rgba(233, 148, 16, 0.17)", boxShadow: "none" }}
          >
            <Typography
              sx={
                !(isMobile || isTablet) && !isRange
                  ? {
                      fontSize: "15px",
                      fontWeight: "500",
                      marginRight: "280px",
                      color: "#773106",
                      fontFamily: "Sora",
                    }
                  : isRange
                  ? {
                      fontSize: "15px",
                      fontWeight: "500",

                      color: "#773106",
                      fontFamily: "Sora",
                    }
                  : {
                      fontSize: "10px",
                      fontWeight: "500",
                      // marginRight: "280px",
                      color: "#773106",
                      fontFamily: "Sora",
                    }
              }
            >
              Any Indian Citizen with a current account in the name of his/her
              business can get a sole proprietorship registration.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>
      <Grid item>
        <Accordion
          sx={
            !(isMobile || isTablet) && !isRange
              ? { width: "75%", boxShadow: "none", marginLeft: "-13px" }
              : isRange
              ? {
                  width: "100%",
                  boxShadow: "none",
                  marginLeft: "-13px",
                }
              : { width: "100%", boxShadow: "none", marginLeft: "-13px" }
          }
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              sx={
                !(isMobile || isTablet) && !isRange
                  ? {
                      fontSize: "15px",
                      fontWeight: "500",
                      marginRight: "280px",
                      color: "#773106",
                      fontFamily: "Sora",
                      marginTop: "0px",
                    }
                  : isRange
                  ? {
                      fontSize: "15px",
                      fontWeight: "500",

                      color: "#773106",
                      fontFamily: "Sora",
                      marginTop: "0px",
                    }
                  : {
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
              What businesses are commonly run as Sole Proprietorships?
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{ background: "rgba(233, 148, 16, 0.17)", boxShadow: "none" }}
          >
            <Typography
              sx={
                !(isMobile || isTablet) && !isRange
                  ? {
                      fontSize: "15px",
                      fontWeight: "500",
                      marginRight: "280px",
                      color: "#773106",
                      fontFamily: "Sora",
                    }
                  : isRange
                  ? {
                      fontSize: "15px",
                      fontWeight: "500",

                      color: "#773106",
                      fontFamily: "Sora",
                    }
                  : {
                      fontSize: "10px",
                      fontWeight: "500",
                      // marginRight: "280px",
                      color: "#773106",
                      fontFamily: "Sora",
                    }
              }
            >
              Most local businesses are run as sole proprietorships, from
              grocery stores to fast-food vendors, and even small traders and
              manufacturers. Larger businesses can too operate as Sole
              Proprietorship
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>
      <Grid item sx={!(isMobile || isTablet) && { marginTop: "-10px" }}>
        <Accordion
          sx={
            !(isMobile || isTablet) && !isRange
              ? { width: "75%", boxShadow: "none", marginLeft: "-13px" }
              : isRange
              ? {
                  width: "100%",
                  boxShadow: "none",
                  marginLeft: "-13px",
                }
              : { width: "100%", boxShadow: "none", marginLeft: "-13px" }
          }
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{
              marginBottom: "8px",
              marginTop: "8px",
            }}
          >
            <Typography
              sx={
                !(isMobile || isTablet) && !isRange
                  ? {
                      fontSize: "15px",
                      fontWeight: "500",
                      marginRight: "280px",
                      color: "#773106",
                      fontFamily: "Sora",
                      marginTop: "0px",
                    }
                  : isRange
                  ? {
                      fontSize: "15px",
                      fontWeight: "500",

                      color: "#773106",
                      fontFamily: "Sora",
                      marginTop: "0px",
                    }
                  : {
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
              What licenses are required for proprietorship registration?
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{ background: "rgba(233, 148, 16, 0.17)", boxShadow: "none" }}
          >
            <Typography
              sx={
                !(isMobile || isTablet) && !isRange
                  ? {
                      fontSize: "15px",
                      fontWeight: "500",
                      marginRight: "280px",
                      color: "#773106",
                      fontFamily: "Sora",
                    }
                  : isRange
                  ? {
                      fontSize: "15px",
                      fontWeight: "500",

                      color: "#773106",
                      fontFamily: "Sora",
                    }
                  : {
                      fontSize: "10px",
                      fontWeight: "500",
                      // marginRight: "280px",
                      color: "#773106",
                      fontFamily: "Sora",
                    }
              }
            >
              It generally differs from state to state as in Maharashtra a Shop
              and Act license is required and for West Bengal, the trade license
              is required.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>
      <Grid item sx={!(isMobile || isTablet) && { marginTop: "-20px" }}>
        <Accordion
          sx={
            !(isMobile || isTablet) && !isRange
              ? { width: "75%", boxShadow: "none", marginLeft: "-13px" }
              : isRange
              ? {
                  width: "100%",
                  boxShadow: "none",
                  marginLeft: "-13px",
                }
              : { width: "100%", boxShadow: "none", marginLeft: "-13px" }
          }
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{
              marginTop: "8px",
              marginBottom: "8px",
            }}
          >
            <Typography
              sx={
                !(isMobile || isTablet) && !isRange
                  ? {
                      fontSize: "15px",
                      fontWeight: "500",
                      marginRight: "280px",
                      color: "#773106",
                      fontFamily: "Sora",
                      marginTop: "0px",
                    }
                  : isRange
                  ? {
                      fontSize: "15px",
                      fontWeight: "500",

                      color: "#773106",
                      fontFamily: "Sora",
                      marginTop: "13px",
                    }
                  : {
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
              What is the role of the proprietor in sole proprietorship?
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{ background: "rgba(233, 148, 16, 0.17)", boxShadow: "none" }}
          >
            <Typography
              sx={
                !(isMobile || isTablet) && !isRange
                  ? {
                      fontSize: "15px",
                      fontWeight: "500",
                      marginRight: "280px",
                      color: "#773106",
                      fontFamily: "Sora",
                    }
                  : isRange
                  ? {
                      fontSize: "15px",
                      fontWeight: "500",

                      color: "#773106",
                      fontFamily: "Sora",
                    }
                  : {
                      fontSize: "10px",
                      fontWeight: "500",
                      // marginRight: "280px",
                      color: "#773106",
                      fontFamily: "Sora",
                    }
              }
            >
              The proprietor owns, controls, and manages the sole
              proprietorships. He/She has a complete hold over the
              proprietorship
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  );
};

export default Faq;
