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
              Is there a need to be Physically Present during this process?
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
              its portal
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
              What is DPIN?
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
              Designated Partner Identification Number is a unique
              identification number that is assigned to all existing and
              proposed Designated partners of an LLP. All the present or
              proposed Directors must have a DPIN.
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
              How long does it take to incorporate an LLP?
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
              The time taken for incorporation depends on the submission of
              relevant documents by the client as well as the Approvals from the
              Government authorities. IndiaFilings can help you Incorporate an
              LLP in 14-20 days.
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
              Does LLP require MoA and AoA?
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
              No, the Memorandum of Association (MOA) and the Articles of
              Association (AOA) are important documents of a company registered
              under the Companies Act, 2013. The LLP agreement governs the LLP
              and not the MOA and AOA. Thus, an LLP does not have to draft the
              MOA and AOA. It has to draft the LLP agreement.
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
              Is LLP registration mandatory?
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
              Yes, an registration of an LLP on the Ministry of Corporate (MCA)
              portal is mandatory. An LLP must obtain registration under the
              Limited Liability Partnership (LLP) Act to be a legally valid
              entity.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>
      <Grid item sx={!(isMobile || isTablet) && { marginTop: "-70px" }}>
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
              Who can be partners in an LLP?
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
              Any individual or body corporate can be a partner in an LLP.
              However, minors, persons of unsound mind and an undischarged
              insolvent cannot be partners in an LLP.
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
              How many designated partners are required in an LLP?
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
              Every LLP must have at least two designated partners, and at least
              one of them should be a resident in India. If all partners in an
              LLP are body corporates, then at least two individual nominees of
              such body corporates should act as designated partners. Any
              partner can be a designated partner in accordance with the LLP
              agreement.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  );
};

export default Faq;
