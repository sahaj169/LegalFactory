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
          : { marginTop: "39px" ,width:"130%"}
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
              What minimum number of partners are required in a Partnership
              Firm?
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
              Minimum 2 members are required to start a partnership firm
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
              What maximum number of partners are permitted in a Partnership
              Firm?
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
              At most 20 members are permitted in a partnership firm
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
              Can we convert a partnership firm to a private limited company?
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
              Yes you can do so by filing a prescribed form with the authority
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
              Who are the partners in a Partnership Firm?
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
              The partners residing in India can only become the partners in a
              Partnership firm. Foreign individual who wish to start their
              company can opt for Private Limited Company registration
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
              What are Capital Requirements for the Partnership firm
              Registration in India?
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
              There is no minimum capital requirement for this registration in
              our country. All you need is current bank account balance, and
              rest of the documents as stated above
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
              Does it require for a partnership form to file an annual return to
              the Registrar of firms?
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
              According to the Partnership Act,1932, there is no such provision
              of audit. However, if the turnover is more than INR 2 Crore, then
              it is mandatory to get the books of account audited
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
              How to apply for the PAN of the Partnership firm?
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
              You can apply for the partnership firm once the partnership deed
              is notarized. You can take our assistance in case you need to
              apply for PAN
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
              How much time does it take to register a partnership firm in
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
              The registration of a partnership firm in India may take approx
              10-12 working days. However, the time taken to issue a certificate
              of incorporation may differ as per the regulations of the
              concerned state. The registration of a partnership firm is subject
              to government processing time which depends on the particular
              state
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
              When my partnership turns invalid?/In what circumstances my
              partnership turns invalid?
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
              A court may deem the partnership agreement invalid when the
              partnership agreement is not registered in the eye law and
              dissolve the partnership if the object of the business is not
              legal
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
              At what instance my certificate of registration can be cancelled?
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
              Sometimes a partnership certification of incorporation can be
              revoked which can be termed as dissolution. When all partners or
              except one partner is declared insolvent or if the firm is
              carrying unlawful activities like corporate malpractice, trading
              in drugs or other illegal products, or making business operations
              with countries that may harm the interest of the country; in such
              cases the dissolution can be brought upon automatically
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
              How to quit the partnership among partners?
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
              If it is a partnership of will, then they can do so by dissolving
              the partnership by notice if the partners of the firm wished to
              end the partnership of the firm. This can also be done in
              accordance with the terms laid out in the Partnership Deed of the
              firm, or they can do so by producing a separate agreement
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
              Is there any scope of liability under the parameters of
              partnerships?
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
              Every partner is jointly and severally accountable for any
              acts/activities of the firm committed throughout the course of
              business while he or she is a partner. This implies that if a
              third party is injured or a penalty is imposed during the course
              of business, all parties will be held accountable, even if one of
              the partners caused the injury or loss
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
              Glossary  of Terms : 
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
<Typography sx={{
fontWeight:"bold"
}}> ACKNOWLEDGEMENT: </Typography>A statement, written or oral, made before a person authorized by law to administer oaths(such as a notary public)

<Typography sx={{
fontWeight:"bold",
marginTop:"15px"
}}> EMPLOYMENT AGREEMENT:</Typography> An agreement between an employer and an employee. This differs from other agreements, in that it is governed by employment law, which may take precedence over standard contract law.

<Typography sx={{
fontWeight:"bold",
marginTop:"15px"
}}> GENERAL PARTNER:</Typography> A partner in a limited partnership who has authority to engage in operating the business.

<Typography sx={{
fontWeight:"bold",
marginTop:"15px"
}}> REGISTERED OFFICE: </Typography>The official address of the company, as designated with the secretary of the state. Any documents delivered to this address are considered to be legally served by the company.

<Typography sx={{
fontWeight:"bold",
marginTop:"15px"
}}> PARTNERSHIP AT WILL:</Typography> A partnership in which the partners have not agreed to remain partners until the expiration of a definite term or the completion of a particular undertaking.

<Typography sx={{
fontWeight:"bold",
marginTop:"15px"
}}> INSTRUMENT:</Typography> A legal term for a document.

<Typography sx={{
fontWeight:"bold",
marginTop:"15px"
}}> DISSOLUTION: </Typography>The termination of a partnership.

            </Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  );
};

export default Faq;
