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
          FAQ'S
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
              No, the entire process is now automated and handled online. You
              will receive the DIN numbers and Certificate of Incorporation by
              e-mail from Ministry of Corporate Affairs(MCA).)
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
              Timeline for setting up a Private Limited Company in India?
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
              It generally takes 30 business days to incorporate a Producer
              Company
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
              What are the rules that bind the naming of a Producer Company?
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
              Every company has two parts to its name. The first part is unique
              to each one. For example, ‘HONDA’ or ‘NIVIA’. The second part
              describes the business activity of the company. For example,
              ‘bikes’ or ‘cream’. This second part must be as descriptive as
              possible. Hence, the name of the company must end with ‘Producer
              Company Limited’s.
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
              Are the shares of a Producer Company transferrable?
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
              Yes, they are transferable-members of the producer company
              transfer shares along with the special rights
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
              How is a nominee appointed by the members in a Producer Company?
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
              The members of the company need to nominate a person in a
              specified manner within 3 months of becoming a member of the
              Producer Company.
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
              What is a Digital Signature Certificate?
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
              A Digital Signature Certificate, or DSC, is issued by six
              certifying authorities in India(such as e-Mudhra and n-Code). It
              is nothing but an electronic version of a physical signature. It
              can be used to verify documents in the company registration
              process.
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
              Can my Producer Company survive perpetually?
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
              All companies are legal entities by themselves. Therefore, they
              have a perpetual existence. The only way a producer company can
              cease to exist(other than shutting it down voluntarily) is if the
              annual compliances are not met or if the creditors/courts force
              its closure
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
              What is the tenure of the directorship period in Producer Company?
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
              The minimum period is 1 year while the maximum period for
              Directorship is 5 years
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
              // marginTop: "8px",
              // marginBottom: "8px",
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
              What are the benefits of incorporating a Producer Company?
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
              The topmost benefits are limited liability and better management
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>

      <Grid item sx={!(isMobile || isTablet) && { marginTop: "-40px" }}>
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
              // marginTop: "8px",
              // marginBottom: "8px",
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
              Will the books of a Producer Company need auditing?
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
              Yes, a producer company must have its books audited from its very
              first year. And in case turnover crosses Rs. 5 Crores, it must
              employ a full time company secretary to manage its affairs
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
              What is the requirement of board meeting?
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
              The minimum number of board meetings required is 4 and there
              should be a gap of 3 months between two board meetings.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>
    </Grid>
  );
};

export default Faq;
