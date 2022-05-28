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
                      fontSize: "18px",
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
                      fontSize: "12px",
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
              Is there a need to be physically present during this process?
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
              required. The Government of India in its efforts to streamline and
              promote ease of doing business has made the entire process through
              its portal.
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
                      fontSize: "18px",
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
                      fontSize: "12px",
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
              What are the timeline for setting up a private limited company in
              India?
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
              completed it shall take a maximum timeline of 10-12 days.
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
                      fontSize: "18px",
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
                      fontSize: "12px",
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
              Are there any guidelines for picking a name for a private limited
              company?
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
              The Registrar of Companies (RoC) across India expects the
              applicant to follow a few naming guidelines. Some of them are
              subjective, which means that approval can depend on the opinion of
              the officer handling your application. Moreover, The Trademark
              Team at Legal Factory can assist you in getting a particular name
              Trademarked and Logo and which shall be helpful for picking a
              particular company name, you can contact our support team
              to understand the rules and have a better chance of approval.
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
                      fontSize: "18px",
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
                      fontSize: "12px",
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
              What is a DSC?
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
              Digital signature (DSC) is the digital code used for signing all
              documents related to the company.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>
      <Grid item sx={!(isMobile || isTablet) && { marginTop: "0px" }}>
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
                      fontSize: "18px",
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
                      fontSize: "12px",
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
              Can a private limited company have perpetual succession ?
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
              A company has perpetual succession and a company has a separate
              legal existence as compared to its shareholders and directors.
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
                      fontSize: "18px",
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
                      fontSize: "12px",
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
              Is it necessary to audit the company accounts ?
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
              Yes, a private limited company must hire an auditor, no matter
              what its revenues. In fact, an auditor must be appointed within 30
              days of incorporation.
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
                      fontSize: "18px",
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
                      fontSize: "12px",
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
              What are the important documents are required to complete the
              process?
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
              The basic documents that are required are - <br />
              - Copy of PAN Card (must for all resident copy of the latest bank
              statement/telephone or mobile bill/electricity or gas bill
              shareholders / directors ) or Passport (Foreign Nationals & NRIs){" "}
              <br />
              - Copy of Voter’s ID/Passport/Driver’s License/aadhar card Any of
              one <br />
              - Copy of the latest bank statement/telephone or mobile
              bill/electricity or gas bill(i.e not older than 2 months and
              payment proof of same.) <br />
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
                      fontSize: "18px",
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
                      fontSize: "12px",
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
              Can you explain EMoa and eAoA of a private limited company.
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
              The legal factory team shall assist in compiling and drafting the
              Memorandum Of Association (EMoa) and Articles Of Association
              (eAoA) of the company and also ensure that they are complied with
              the Company Act Rules and Laws.The EMoa and eAoA are very
              important in administering and managing a company business , also
              it is a very important formation document which shall be required
              for day to day operations.
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
                      fontSize: "18px",
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
                      fontSize: "12px",
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
              How much does it cost to setup your company or do company
              incorporation ?
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
              You can request a callback and get a free 15 minutues consultation
              so that we can understand your business requirements and create a
              customised package to suit your needs. After that you can start
              the company registration process by paying Rs 499.
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
                      fontSize: "18px",
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
                      fontSize: "12px",
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
              Is there a limit on the minimum capital needed to form a Private
              Limited Company?
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
              Normally the minimum paid capital with which the people start a
              private limited company is 1 lakh rupees, as such the act does not
              specify the minimum paid up capital requirement.
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
                      fontSize: "18px",
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
                      fontSize: "12px",
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
              Is it possible that the director of a private limited company is
              also a salaried person?
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
              Yes, a salaried person can become the director in Private limited,
              LLP or OPC. You will need to check the employment agreement if
              that allows you for such provisions. In most of the cases, the
              employers are quite comfortable with the fact that their employee
              is a director in another company.
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
                      fontSize: "18px",
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
                      fontSize: "12px",
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
              Can we legally convert limited liability partnership (LLP) to a
              Private Limited Company?
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
              Yes, an LLP can be converted into a company and vice versa since
              Corporatization is the need of the hour. The entire world is
              gradually drifting towards one global market without any trade
              barriers between the countries.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  );
};

export default Faq;
