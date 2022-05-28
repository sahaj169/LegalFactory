import React from "react";
import Vectors from "../../Assets/Images/vectors.png";
import Vectors2 from "../../Assets/Images/vectors2.png";
import Discuss from "../../Assets/Images/Group_circle.png";
import Discuss1 from "../../Assets/Images/discuss1.svg";
import Discuss2 from "../../Assets/Images/discuss2.svg";
import Aero from "../../Assets/Images/aero.svg";
import Taj from "../../Assets/Images/taj.png";

import {
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Navbar } from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const Background = {
  backgroundImage: "url(" + Vectors + ")",
  backgroundSize: "cover",
};


const AboutUsPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isRange = useMediaQuery(theme.breakpoints.between("md", "lg"));
 
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Container fixed maxWidth sx={{}}>
        <Navbar bs="About Us" />
        <div
          style={{
            marginTop: "80px",
            // background: "#E5E5E5",
          }}
        >
          <div style={Background}>
            <Grid
              container
              sx={
                isMobile || isTablet
                  ? {
                      alignItems: "center",
                      justifyContent: "center",
                    }
                  : {}
              }
            >
              <Grid
                item
                xs={3}
                sx={(isMobile || isTablet) && { display: "none" }}
              >
                <img
                  src={Discuss}
                  alt="Discuss"
                  height="350px"
                  width="350px"
                  style={{ marginLeft: "3px", backgroundColor: "white" }}
                />
              </Grid>
              <Grid
                item
                xs={9}
                sx={
                  (isMobile || isTablet) && !isRange
                    ? {
                        marginTop: "10px",
                      }
                    : isRange
                    ? {
                        marginTop: "30px",
                        paddingLeft: "150px",
                      }
                    : {
                        marginTop: "30px",
                        paddingRight: "50px",
                        paddingLeft: "90px",
                      }
                }
              >
                <Typography
                  sx={
                    (isMobile || isTablet) && !isRange
                      ? {
                          color: "#703C00",
                          fontSize: "28px",
                          fontWeight: "700",
                          fontFamily: "Sora",
                        }
                      : {
                          color: "#703C00",
                          fontSize: "38px",
                          fontWeight: "700",
                          fontFamily: "Sora",
                        }
                  }
                >
                  About Us
                </Typography>
                <Typography
                  sx={
                    isMobile || isTablet
                      ? {
                          marginTop: "65px",
                          fontFamily: "Sora",
                          color: "#603B00",
                          fontSize: "18px",
                        }
                      : {
                          marginTop: "65px",
                          fontFamily: "Sora",
                          color: "#603B00",
                          fontSize: "18px",
                        }
                  }
                >
                  With the highest growth rate, our nation has become the
                  biggest investment destination in the world. A huge market
                  filled with opportunities and a young generation eager to make
                  their impact on it have set up many businesses. These
                  start-up’s have become enormous growth opportunities as many
                  of the now blooming businesses like Amazon, once started as
                  small local startups by young individuals.
                </Typography>
              </Grid>
            </Grid>
          </div>

          <Grid
            container
            sx={
              isMobile || isTablet
                ? {
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "80px",
                  }
                : { marginTop: "80px" }
            }
          >
            {!(isMobile || isTablet) ? (
              <div
                style={{
                  backgroundImage: `url(${Vectors2})`,
                  backgroundSize: "cover",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                {/* <Grid
                  item
                  xs={5}
                  sx={!(isMobile || isTablet) && { paddingRight: "0px" }}
                > */}
                <div>
                  <Typography
                    sx={{
                      fontFamily: "Sora",
                      color: "#603B00",
                      fontSize: "18px",
                    }}
                  >
                    That's why we introduce you LEGAL FACTORY - A unit of Xpert
                    Finance is one of the fastest growing fintech companies. We
                    have a team of young and enthusiastic professionals who are
                    focused on providing excellent professional services with
                    quality, innovation, and the highest standard of client
                    satisfaction. Our aim is to build a financial ecosystem
                    focused on providing end-to-end support for every business
                    and individual.
                  </Typography>
                  <Typography
                    sx={{
                      marginTop: "35px",
                      fontFamily: "Sora",
                      color: "#603B00",
                      fontSize: "18px",
                    }}
                  >
                    We have expertise in financial market in the areas of
                    Business setup, Compliance, taxation laws, Internal Audit,
                    Anti Money Laundering intellectual property rights (IPR),
                    trademarks, and start-up registration and fundraising
                  </Typography>
                  <Typography
                    sx={{
                      marginTop: "35px",
                      fontFamily: "Sora",
                      color: "#603B00",
                      fontSize: "18px",
                    }}
                  >
                    LEGAL FACTORY is cognizant of the new process. With a team
                    full of experienced experts, we have helped many start-ups,
                    traders, entrepreneurs, professionals, etc register their
                    businesses in India. Besides that we also assist individuals
                    in their financial management and making compliances. Pan
                    India, our services are comprehensive and reach every corner
                    of the country.
                  </Typography>{" "}
                </div>

                <div>
                  <img
                    style={
                      isRange
                        ? {
                            width: "250px",
                            paddingTop: "80px",
                          }
                        : {}
                    }
                    src={Discuss1}
                    alt="discuss1"
                  />
                </div>
                {/* </Grid>
                </Grid> */}
              </div>
            ) : (
              <Grid
                item
                xs={9}
                sx={!(isMobile || isTablet) && { paddingRight: "40px" }}
              >
                <Typography
                  sx={{
                    fontFamily: "Sora",
                    color: "#603B00",
                    fontSize: "18px",
                  }}
                >
                  That's why we introduce you LEGAL FACTORY - A unit of Xpert
                  Finance is one of the fastest growing fintech companies. We
                  have a team of young and enthusiastic professionals who are
                  focused on providing excellent professional services with
                  quality, innovation, and the highest standard of client
                  satisfaction. Our aim is to build a financial ecosystem
                  focused on providing end-to-end support for every business and
                  individual.
                </Typography>
                <Typography
                  sx={{
                    marginTop: "35px",
                    fontFamily: "Sora",
                    color: "#603B00",
                    fontSize: "18px",
                  }}
                >
                  We have expertise in financial market in the areas of Business
                  setup, Compliance, taxation laws, Internal Audit, Anti Money
                  Laundering intellectual property rights (IPR), trademarks, and
                  start-up registration and fundraising
                </Typography>
                <Typography
                  sx={{
                    marginTop: "35px",
                    fontFamily: "Sora",
                    color: "#603B00",
                    fontSize: "18px",
                  }}
                >
                  LEGAL FACTORY is cognizant of the new process. With a team
                  full of experienced experts, we have helped many start-ups,
                  traders, entrepreneurs, professionals, etc register their
                  businesses in India. Besides that we also assist individuals
                  in their financial management and making compliances. Pan
                  India, our services are comprehensive and reach every corner
                  of the country.
                </Typography>
              </Grid>
            )}
          </Grid>
          <Grid
            container
            sx={
              isMobile || isTablet
                ? {
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: "50px",
                  }
                : { marginTop: "50px" }
            }
          >
            <Grid item xs={9}>
              <Typography
                sx={
                  isMobile || isTablet
                    ? {
                        color: "#703C00",
                        fontSize: "28px",
                        fontWeight: "700",
                        fontFamily: "Sora",
                      }
                    : {
                        color: "#703C00",
                        fontSize: "38px",
                        fontWeight: "700",
                        fontFamily: "Sora",
                      }
                }
              >
                Why Choose Legal Factory?
              </Typography>
              <Typography
                sx={{
                  marginTop: "35px",
                  fontFamily: "Sora",
                  color: "#603B00",
                  fontSize: "18px",
                }}
              >
                A decade of experience in financial, Legal, and Advisory matters
                One of the Top companies in financial engineering, business
                setup, and Advisory matters.Vast network Team of Lawyers, CA and
                CS, Developers, and Technocrats other management consultants.
              </Typography>
            </Grid>
            <Grid
              item
              xs={3}
              sx={(isMobile || isTablet) && { display: "none" }}
            >
              <img
                style={isRange ? { width: "230px" } : {}}
                src={Discuss2}
                height="350px"
                width="350px"
                alt="Discuss2"
              />
            </Grid>
            <img
              src={Aero}
              alt="Aero"
              style={
                isMobile || isTablet
                  ? { display: "none" }
                  : { marginTop: "-20rem" }
              }
            />
          </Grid>
          <Grid
            container
            direction="column"
            sx={
              isMobile || isTablet
                ? {
                    marginTop: "40px",
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                  }
                : {
                    marginTop: "-10rem",
                    justifyContent: "center",
                    alignItems: "center",
                  }
            }
          >
            <Grid item>
              {isMobile || isTablet ? (
                <Typography
                  sx={{
                    color: "#703C00",
                    fontSize: "26px",
                    fontWeight: "700",
                    fontFamily: "Sora",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  Our Network Offices
                </Typography>
              ) : (
                <Typography
                  sx={{
                    color: "#703C00",
                    fontSize: "38px",
                    fontWeight: "700",
                    fontFamily: "Sora",
                  }}
                >
                  Pan India service. Our network Offices{" "}
                </Typography>
              )}
            </Grid>
            <Grid item sx={{ marginTop: "40px" }}>
              {isMobile || isTablet ? (
                <Grid
                  container
                  justifyContent="center"
                  alignItems="center"
                  spacing={2}
                >
                  <Grid item>
                    <Typography
                      sx={
                        isMobile || isTablet
                          ? {
                              color: "#8E4D00",
                              fontSize: "13px",
                              fontWeight: "500",
                            }
                          : {
                              color: "#8E4D00",
                              fontSize: "23px",
                              fontWeight: "500",
                            }
                      }
                    >
                      Singapore
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      sx={
                        isMobile || isTablet
                          ? {
                              color: "#8E4D00",
                              fontSize: "13px",
                              fontWeight: "500",
                            }
                          : {
                              color: "#8E4D00",
                              fontSize: "23px",
                              fontWeight: "500",
                            }
                      }
                    >
                      Mumbai
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      sx={
                        isMobile || isTablet
                          ? {
                              color: "#8E4D00",
                              fontSize: "13px",
                              fontWeight: "500",
                            }
                          : {
                              color: "#8E4D00",
                              fontSize: "23px",
                              fontWeight: "500",
                            }
                      }
                    >
                      Kolkata
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      sx={
                        isMobile || isTablet
                          ? {
                              color: "#8E4D00",
                              fontSize: "13px",
                              fontWeight: "500",
                            }
                          : {
                              color: "#8E4D00",
                              fontSize: "23px",
                              fontWeight: "500",
                            }
                      }
                    >
                      Ahmedabad
                    </Typography>
                  </Grid>
                </Grid>
              ) : (
                <Grid
                  container
                  justifyContent="center"
                  alignItems="center"
                  spacing={10}
                >
                  <Grid item>
                    <Typography
                      sx={
                        isMobile || isTablet
                          ? {
                              color: "#8E4D00",
                              fontSize: "13px",
                              fontWeight: "500",
                            }
                          : {
                              color: "#8E4D00",
                              fontSize: "23px",
                              fontWeight: "500",
                            }
                      }
                    >
                      Singapore
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      sx={
                        isMobile || isTablet
                          ? {
                              color: "#8E4D00",
                              fontSize: "13px",
                              fontWeight: "500",
                            }
                          : {
                              color: "#8E4D00",
                              fontSize: "23px",
                              fontWeight: "500",
                            }
                      }
                    >
                      Mumbai
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      sx={
                        isMobile || isTablet
                          ? {
                              color: "#8E4D00",
                              fontSize: "13px",
                              fontWeight: "500",
                            }
                          : {
                              color: "#8E4D00",
                              fontSize: "23px",
                              fontWeight: "500",
                            }
                      }
                    >
                      Kolkata
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      sx={
                        isMobile || isTablet
                          ? {
                              color: "#8E4D00",
                              fontSize: "13px",
                              fontWeight: "500",
                            }
                          : {
                              color: "#8E4D00",
                              fontSize: "23px",
                              fontWeight: "500",
                            }
                      }
                    >
                      Ahmedabad
                    </Typography>
                  </Grid>
                </Grid>
              )}
            </Grid>
            <Grid
              item
              sx={
                isMobile || isTablet
                  ? { marginTop: "30px", marginBottom: "30px" }
                  : { marginTop: "70px" }
              }
            >
              {isMobile || isTablet ? (
                <Grid
                  container
                  justifyContent="center"
                  alignItems="center"
                  spacing={4}
                >
                  <Grid item>
                    <Typography
                      sx={
                        isMobile || isTablet
                          ? {
                              color: "#8E4D00",
                              fontSize: "13px",
                              fontWeight: "500",
                            }
                          : {
                              color: "#8E4D00",
                              fontSize: "23px",
                              fontWeight: "500",
                            }
                      }
                    >
                      Jaipur
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      sx={
                        isMobile || isTablet
                          ? {
                              color: "#8E4D00",
                              fontSize: "13px",
                              fontWeight: "500",
                            }
                          : {
                              color: "#8E4D00",
                              fontSize: "23px",
                              fontWeight: "500",
                            }
                      }
                    >
                      Ajmer
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      sx={
                        isMobile || isTablet
                          ? {
                              color: "#8E4D00",
                              fontSize: "13px",
                              fontWeight: "500",
                            }
                          : {
                              color: "#8E4D00",
                              fontSize: "23px",
                              fontWeight: "500",
                            }
                      }
                    >
                      Bhavnagar
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      sx={
                        isMobile || isTablet
                          ? {
                              color: "#8E4D00",
                              fontSize: "13px",
                              fontWeight: "500",
                            }
                          : {
                              color: "#8E4D00",
                              fontSize: "23px",
                              fontWeight: "500",
                            }
                      }
                    >
                      Surat
                    </Typography>
                  </Grid>
                  
                </Grid>
              ) : (
                <Grid
                  container
                  justifyContent="center"
                  alignItems="center"
                  spacing={10}
                >
                  <Grid item>
                    <Typography
                      sx={
                        isMobile || isTablet
                          ? {
                              color: "#8E4D00",
                              fontSize: "13px",
                              fontWeight: "500",
                            }
                          : {
                              color: "#8E4D00",
                              fontSize: "23px",
                              fontWeight: "500",
                            }
                      }
                    >
                      Jaipur
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      sx={
                        isMobile || isTablet
                          ? {
                              color: "#8E4D00",
                              fontSize: "13px",
                              fontWeight: "500",
                            }
                          : {
                              color: "#8E4D00",
                              fontSize: "23px",
                              fontWeight: "500",
                            }
                      }
                    >
                      Ajmer
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      sx={
                        isMobile || isTablet
                          ? {
                              color: "#8E4D00",
                              fontSize: "13px",
                              fontWeight: "500",
                            }
                          : {
                              color: "#8E4D00",
                              fontSize: "23px",
                              fontWeight: "500",
                            }
                      }
                    >
                      Bhavnagar
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      sx={
                        isMobile || isTablet
                          ? {
                              color: "#8E4D00",
                              fontSize: "13px",
                              fontWeight: "500",
                            }
                          : {
                              color: "#8E4D00",
                              fontSize: "23px",
                              fontWeight: "500",
                            }
                      }
                    >
                      Surat
                    </Typography>
                  </Grid>
                </Grid>
              )}
            </Grid>
          </Grid>
          <img
            src={Taj}
            height="100%"
            width="100%"
            alt="taj"
            style={
              isMobile || isTablet
                ? { display: "none" }
                : { marginBottom: "-4px" }
            }
          />
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default AboutUsPage;
