import React from "react";
import PropTypes from "prop-types";
import useStyles from "./styles";

import sp1 from "../../Assets/Images/sp1.png";
import sp2 from "../../Assets/Images/sp2.png";
import SecondHero from "../../Assets/Images/secondHero.png";
import SecondHeroRight from "../../Assets/Images/secondHeroRight.png";
import SecondHeroLeft from "../../Assets/Images/secondHeroLeft.png";
import coc from "../../Assets/Images/coc.png";
import sp3 from "../../Assets/Images/sp3.png";
import sp4 from "../../Assets/Images/sp4.png";
import MobileHero from "../../Assets/Images/mobileHero.png";

import {
  Grid,
  Typography,
  Container,
  Tabs,
  Tab,
  Fab,
  Dialog,
  DialogContent,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { Box } from "@mui/system";
import Overview from "./Common/Overview/Overview";
import Checklist from "./Common/Checklist/Checklist";
import Register from "./Common/Register/Register";
import Documents from "./Common/Documents/Documents";
import Legalfactory from "./Common/LegalFactory/Legalfactory";
import Faq from "./Common/Faq/Faq";
import GetInTouchFromPl from "../../Components/GetInTouchFormPrivateLimited/GetInTouchFromPl";
import GetInTouchFromPl2 from "../../Components/GetInTouchFormPrivateLimited2/GetInTouchPl2";
import { Navbar } from "../../Components/Navbar/Navbar";
import CallIcon from "@mui/icons-material/Call";
import Footer from "../../Components/Footer/Footer";

const BackgroundSecondHero = {
  backgroundImage: "url(" + SecondHero + ")",
  backgroundSize: "cover",
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const SolePropietoryship = () => {
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isRange = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isRange2 = useMediaQuery(theme.breakpoints.between("lg", "xl"));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Container fixed maxWidth>
        <Fab
          onClick={handleClickOpen}
          variant="extended"
          className={classes.fabButton}
          sx={
            !(isMobile || isTablet)
              ? {
                  position: "fixed",
                  zIndex: "1",
                  bottom: "2%",
                  right: "1%",
                }
              : isRange
              ? {
                  display: "none",
                }
              : isMobile
              ? {
                  position: "fixed",
                  zIndex: "1",
                  bottom: "2%",
                  right: "1%",
                  width: "20%",
                }
              : isTablet && {
                  position: "fixed",
                  zIndex: "1",
                  bottom: "2%",
                  right: "1%",
                  width: "10%",
                }
          }
        >
          <CallIcon />{" "}
          <Typography
            sx={
              !isMobile && !isTablet
                ? {
                    fontWeight: "bolder",
                    fontFamily: "Sora",
                  }
                : {
                    display: "None",
                  }
            }
          >
            {" "}
            Get In Touch{" "}
          </Typography>
        </Fab>
        <Dialog
          sx={
            isMobile
              ? {
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }
              : isTablet && {
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                }
          }
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: { borderRadius: 20 },
          }}
        >
          <DialogContent
            sx={
              !isMobile
                ? {
                    display: "flex",
                    justifyContent: "center",
                    px: 0,
                    width: 400,
                  }
                : {
                    display: "flex",
                    justifyContent: "center",
                    px: 0,
                    width: 300,
                  }
            }
          >
            <GetInTouchFromPl2 service="Sole Proprietorship" />
          </DialogContent>
        </Dialog>

        <Navbar bs="SOLE PROPRIETORSHIP" />

        <div
          style={{
            marginTop: "80px",
          }}
        >
          <Grid
            container
            alignItems="stretch"
            sx={
              isMobile || isTablet
                ? {
                    background:
                      "linear-gradient(135deg, #FFC251 0.05%, #FFA600 0.15%)",
                  }
                : {
                    background:
                      "linear-gradient(106.08deg, #EAA31F 9.92%, rgba(255, 255, 255, 0) 82.59%)",
                  }
            }
          >
            <Grid item xs={12} md={4}>
              <Grid container spacing={0}>
                {!(isMobile || isTablet) && !isRange ? (
                  <>
                    <Grid item>
                      <img style={{ width: "340px" }} src={sp1} alt="sp1" />
                    </Grid>
                    <Grid
                      item
                      sx={{ marginTop: "-50px", marginBottom: "-40px" }}
                    >
                      <img src={sp2} alt="sp2" style={{ width: "364px" }} />
                    </Grid>
                  </>
                ) : isRange ? (
                  <>
                    <Grid item sx={{ marginTop: "0px", marginBottom: "0px" }}>
                      <img src={sp1} alt="sp1" style={{ width: "280px" }} />
                    </Grid>
                    <Grid
                      item
                      sx={{ marginTop: "-40px", marginBottom: "-10px" }}
                    >
                      <img src={sp2} alt="sp2" style={{ width: "300px" }} />
                    </Grid>
                  </>
                ) : (
                  <Grid
                    item
                    sx={{
                      width: "100%",
                    }}
                  >
                    {/* <Container sx={{
                      display:"flex",
                      justifyContent:"center",
                      width:'12%'
                    }} */}
                    {/* </Container> */}
                    <img
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        width: "100%",
                      }}
                      src={MobileHero}
                      alt="sp1"
                    />
                  </Grid>
                )}
              </Grid>
            </Grid>
            <Grid item md={4} xs={12}>
              <Grid
                container
                direction="column"
                justifyContent="center"
                sx={{ marginTop: "100px" }}
              >
                <Grid item>
                  <Typography
                    variant="h4"
                    sx={
                      !(isMobile || isTablet) && !isRange
                        ? {
                            color: "#703C00",
                            fontSize: "40px",
                            fontWeight: "700",
                            fontFamily: "Sora",
                          }
                        : isRange
                        ? {
                            color: "#703C00",
                            fontSize: "20px",
                            fontWeight: "700",
                            fontFamily: "Sora",
                          }
                        : {
                            color: "white",
                            padding: "0 20px 0 20px",
                            fontFamily: "Sora",
                          }
                    }
                  >
                    Want to become your own Boss?
                  </Typography>
                </Grid>
                <Grid item sx={{ marginTop: "29px", marginBottom: "40px" }}>
                  <Typography
                    sx={
                      isMobile || isTablet
                        ? {
                            color: "white",
                            padding: "0 20px 0 20px",
                            fontFamily: "Sora",
                          }
                        : {
                            color: "#703C00",
                            fontSize: "20px",
                            fontWeight: "700",
                            fontFamily: "Sora",
                          }
                    }
                  >
                    Register your company as Sole Proprietorship, Join us now
                    and get a FREE CONSULTATION from an expert
                  </Typography>
                </Grid>
                <Grid item sx={{ marginTop: "19px", marginBottom: "40px" }}>
                  <Typography
                    sx={
                      isMobile || isTablet
                        ? {
                            color: "white",
                            padding: "0 20px 0 20px",
                            fontFamily: "Sora",
                          }
                        : {
                            color: "#703C00",
                            fontSize: "20px",
                            fontWeight: "700",
                            fontFamily: "Sora",
                          }
                    }
                  >
                    Start your journey to success at just{" "}
                    <span style={{ color: "red", fontFamily: "Sora" }}>
                      Rs 499*
                    </span>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              item
              md={4}
              xs={12}
              sx={
                !(isMobile || isTablet) && !isRange
                  ? {
                      my: 2,
                    }
                  : isRange
                  ? {}
                  : {
                      display: "none",
                    }
              }
            >
              {" "}
              <div
                className={!isRange ? classes.getInTouch : classes.getInTouch2}
              >
                <GetInTouchFromPl service="Sole Proprietorship" />
              </div>
            </Grid>
          </Grid>
        </div>
        {!(isMobile || isTablet) ? (
          <div style={BackgroundSecondHero}>
            <Grid container>
              <Grid item xs={3} style={{ position: "relative" }}>
                <img
                  style={{ marginTop: "19rem" }}
                  src={SecondHeroLeft}
                  alt="SecondHeroLeft"
                />
                <img
                  style={
                    isRange
                      ? { marginTop: "40px", width: "120px" }
                      : {
                          position: "absolute",
                          bottom: "0",
                          left: "0",
                          width: "150px",
                        }
                  }
                  src={coc}
                  alt="coc"
                />
              </Grid>
              <Grid xs={6}>
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Grid item sx={{ marginTop: "111px", width: "120%" }}>
                    <Typography
                      sx={
                        !(isMobile || isTablet) && !isRange && !isRange2
                          ? {
                              color: "#E59501",
                              fontWeight: "700",
                              fontSize: "35px",
                              fontFamily: "Sora",
                            }
                          : isRange
                          ? {
                              color: "#E59501",
                              fontWeight: "700",
                              fontSize: "23px",
                              fontFamily: "Sora",
                            }
                          : isRange2
                          ? {
                              color: "#E59501",
                              fontWeight: "700",
                              fontSize: "30px",
                              fontFamily: "Sora",
                            }
                          : {}
                      }
                    >
                      Why registering for Sole Proprietorship is
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      sx={
                        !(isMobile || isTablet) && !isRange && !isRange2
                          ? {
                              color: "#E59501",
                              fontWeight: "700",
                              fontSize: "35px",
                              fontFamily: "Sora",
                              paddingRight: "200px",
                            }
                          : isRange
                          ? {
                              color: "#E59501",
                              fontWeight: "700",
                              fontSize: "23px",
                              fontFamily: "Sora",
                              paddingRight: "100px",
                            }
                          : isRange2
                          ? {
                              color: "#E59501",
                              fontWeight: "700",
                              fontSize: "30px",
                              fontFamily: "Sora",
                              paddingRight: "100px",
                            }
                          : {}
                      }
                    >
                      beneficial for you?
                    </Typography>
                  </Grid>

                  <Grid item sx={{ marginTop: "32px" }}>
                    <Typography
                      sx={
                        !(isMobile || isTablet) && !isRange && !isRange2
                          ? {
                              color: "#724B04",
                              fontWeight: "700",
                              fontSize: "22px",
                              paddingRight: "200px",
                              fontFamily: "Sora",
                            }
                          : isRange
                          ? {
                              color: "#724B04",
                              fontWeight: "700",
                              fontSize: "13px",
                              fontFamily: "Sora",
                              paddingRight: "100px",
                            }
                          : isRange2
                          ? {
                              color: "#724B04",
                              fontWeight: "700",
                              fontSize: "18px",
                              fontFamily: "Sora",
                              paddingRight: "100px",
                            }
                          : {}
                      }
                    >
                      As an owner you have high privacy and it is
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      sx={
                        !(isMobile || isTablet) && !isRange && !isRange2
                          ? {
                              color: "#724B04",
                              fontWeight: "700",
                              fontSize: "22px",
                              fontFamily: "Sora",
                              paddingRight: "200px",
                            }
                          : isRange
                          ? {
                              color: "#724B04",
                              fontWeight: "700",
                              fontSize: "13px",
                              fontFamily: "Sora",
                              paddingRight: "100px",
                            }
                          : isRange2
                          ? {
                              color: "#724B04",
                              fontWeight: "700",
                              fontSize: "18px",
                              fontFamily: "Sora",
                              paddingRight: "100px",
                            }
                          : {}
                      }
                    >
                      easily established and operational process.
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  container
                  justifyContent="center"
                  alignItems="center"
                  spacing={25}
                >
                  <Grid md={4} xs={12} sm={12} item sx={{ marginTop: "80px" }}>
                    <Typography
                      style={
                        !(isMobile || isTablet) && !isRange
                          ? {
                              color: "#E78D00",
                              fontSize: "36px",
                              fontFamily: "Sora",
                            }
                          : isRange && {
                              color: "#E78D00",
                              fontSize: "26px",
                              fontFamily: "Sora",
                            }
                      }
                    >
                      1.
                    </Typography>
                    {isRange ? (
                      <img src={sp3} alt="sp3" height="50px" width="50px" />
                    ) : (
                      <img src={sp3} alt="sp3" height="80px" width="80px" />
                    )}

                    <Typography
                      sx={
                        !(isMobile || isTablet) && !isRange && !isRange2
                          ? {
                              fontSize: "12px",
                              marginTop: "20px",
                              color: "#724B04",
                              fontFamily: "Sora",
                              fontWeight: "bold",
                            }
                          : isRange || isRange2
                          ? {
                              fontSize: "12px",
                              marginTop: "20px",
                              color: "#724B04",
                              fontFamily: "Sora",
                              fontWeight: "bold",
                              width: "150px",
                            }
                          : {
                              fontSize: "6px",
                              marginTop: "20px",
                              color: "#724B04",
                              fontFamily: "Sora",
                              fontWeight: "bold",
                            }
                      }
                    >
                      We help you make the correct decision for government
                      registration
                    </Typography>
                  </Grid>
                  <Grid
                    md={4}
                    xs={12}
                    sm={12}
                    item
                    sx={{
                      marginTop: "20px",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Typography
                      style={
                        !(isMobile || isTablet) && !isRange
                          ? {
                              color: "#E78D00",
                              fontSize: "36px",
                              fontFamily: "Sora",
                            }
                          : isRange && {
                              color: "#E78D00",
                              fontSize: "26px",
                              fontFamily: "Sora",
                            }
                      }
                    >
                      2.
                    </Typography>
                    {isRange ? (
                      <img src={sp4} alt="sp4" height="50px" width="50px" />
                    ) : (
                      <img src={sp4} alt="sp4" height="80px" width="80px" />
                    )}
                    <Typography
                      sx={
                        !(isMobile || isTablet) && !isRange && !isRange2
                          ? {
                              fontSize: "12px",
                              marginTop: "20px",
                              color: "#724B04",
                              fontFamily: "Sora",
                              fontWeight: "bold",
                            }
                          : isRange || isRange2
                          ? {
                              fontSize: "12px",
                              marginTop: "20px",
                              color: "#724B04",
                              fontFamily: "Sora",
                              fontWeight: "bold",
                              width: "150px",
                            }
                          : {}
                      }
                    >
                      Connecting you with a verified vendor to file the
                      application
                    </Typography>
                  </Grid>
                  <Grid md={4} xs={12} sm={12} item sx={{ marginTop: "80px" }}>
                    <Typography
                      style={
                        !(isMobile || isTablet) && !isRange
                          ? {
                              color: "#E78D00",
                              fontSize: "36px",
                              fontFamily: "Sora",
                            }
                          : isRange
                          ? {
                              color: "#E78D00",
                              fontSize: "26px",
                              fontFamily: "Sora",
                            }
                          : {}
                      }
                    >
                      3.
                    </Typography>
                    {isRange ? (
                      <img src={sp3} alt="sp3" height="50px" width="50px" />
                    ) : (
                      <img src={sp3} alt="sp3" height="80px" width="80px" />
                    )}
                    <Typography
                      sx={
                        !(isMobile || isTablet) && !isRange && !isRange2
                          ? {
                              fontSize: "12px",
                              marginTop: "20px",
                              color: "#724B04",
                              fontFamily: "Sora",
                              fontWeight: "bold",
                            }
                          : isRange || isRange2
                          ? {
                              fontSize: "12px",
                              marginTop: "20px",
                              color: "#724B04",
                              fontFamily: "Sora",
                              fontWeight: "bold",
                              width: "150px",
                            }
                          : {}
                      }
                    >
                      24/7 support until your registration is complete
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item md={3} sx={{}} style={{ position: "relative" }}>
                <img
                  style={{ marginTop: "11rem" }}
                  src={SecondHeroRight}
                  alt="SecondHeroRight"
                  className={classes.secondHeroRight}
                />
                <img
                  style={
                    isRange
                      ? {
                          marginTop: "40px",
                          width: "120px",
                          position: "absolute",
                          bottom: "0",
                          right: "0",
                        }
                      : {
                          position: "absolute",
                          bottom: "0",
                          right: "0",
                          width: "150px",
                        }
                  }
                  src={coc}
                  alt="coc"
                />
              </Grid>
            </Grid>
          </div>
        ) : (
          <>
            <div style={{ padding: "20px 20px 0 20px" }}>
              <GetInTouchFromPl2 service="Sole Proprietorship" />
            </div>

            <div style={BackgroundSecondHero}>
              <Grid container justifyContent="center" alignItems="center">
                <Grid
                  item
                  sx={{ marginTop: "111px", padding: "0 40px 0 40px" }}
                  xs={12}
                >
                  <Typography
                    sx={{
                      color: "#E59501",
                      fontWeight: "700",
                      fontSize: "25px",
                      fontFamily: "Sora",
                    }}
                  >
                    Why registering for Sole Proprietorship is beneficial for
                    you?
                  </Typography>
                </Grid>

                <Grid
                  item
                  sx={{
                    marginTop: "32px",
                    padding: "0 40px 0 40px",
                    marginBottom: "70px",
                  }}
                  xs={12}
                >
                  <Typography
                    sx={{
                      color: "#724B04",
                      fontWeight: "700",
                      fontSize: "18px",
                      fontFamily: "Sora",
                    }}
                  >
                    As an owner you have high privacy and it is easily
                    established and operational process.
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                container
                justifyContent="center"
                alignItems="center"
                spacing={12}
                sx={{ padding: "0 50px 40px 40px" }}
              >
                <Grid xs={12} sm={7} md={4} item sx={{}}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <img
                      src={sp3}
                      alt="sp3"
                      style={
                        isMobile
                          ? {
                              width: "60%",
                              marginLeft: "30px",
                            }
                          : {
                              width: "100%",
                            }
                      }
                    />
                    <Typography
                      sx={{
                        fontSize: "14px",
                        marginTop: "20px",
                        color: "#724B04",
                        fontFamily: "Sora",
                        fontWeight: "bold",
                        marginLeft: "10px",
                      }}
                    >
                      We help you make the correct decision for government
                      registration
                    </Typography>
                  </div>
                </Grid>
                <Grid
                  xs={12}
                  sm={7}
                  md={4}
                  item
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <img
                      src={sp4}
                      alt="sp4"
                      style={
                        isMobile
                          ? {
                              width: "60%",
                              marginLeft: "30px",
                            }
                          : {
                              Width: "100%",
                            }
                      }
                    />
                    <Typography
                      sx={{
                        fontSize: "14px",
                        marginTop: "20px",
                        color: "#724B04",
                        fontFamily: "Sora",
                        fontWeight: "bold",
                        marginLeft: "10px",
                      }}
                    >
                      Connecting you with a verified vendor to file the
                      application
                    </Typography>
                  </div>
                </Grid>
                <Grid xs={12} sm={6} md={4} item sx={{}}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                    }}
                  >
                    <img
                      src={sp3}
                      alt="sp3"
                      style={
                        isMobile
                          ? {
                              width: "60%",
                              marginLeft: "30px",
                            }
                          : {
                              width: "100%",
                            }
                      }
                    />
                    <Typography
                      sx={{
                        fontSize: "14px",
                        marginTop: "20px",
                        color: "#724B04",
                        fontFamily: "Sora",
                        fontWeight: "bold",
                        marginLeft: "10px",
                      }}
                    >
                      24/7 support until your registration is complete
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </div>
          </>
        )}

        <Grid container>
          <Grid
            item
            xs={2}
            sx={
              isMobile || isTablet ? { display: "none" } : { marginTop: "60px" }
            }
          >
            <Container
              className={classes.container}
              sx={{ position: "sticky", top: 100 }}
            >
              <Box
                sx={
                  !(isMobile || isTablet) && !isRange && !isRange2
                    ? {
                        backgroundColor: "white",
                        width: "155px",
                        height: "40%",
                        marginLeft: "-24px",
                        padding: "46px",
                        boxShadow: "0px 4px 5px 5px rgba(0, 0, 0, 0.25)",
                      }
                    : isRange
                    ? {
                        backgroundColor: "white",
                        width: "59px",
                        height: "35%",
                        marginLeft: "-24px",
                        padding: "46px",
                        boxShadow: "0px 4px 5px 5px rgba(0, 0, 0, 0.25)",
                      }
                    : isRange2
                    ? {
                        backgroundColor: "white",
                        width: "130px",
                        height: "35%",
                        marginLeft: "-24px",
                        padding: "46px",
                        boxShadow: "0px 4px 5px 5px rgba(0, 0, 0, 0.25)",
                      }
                    : {}
                }
              >
                <Tabs
                  classes={{
                    indicator: classes.indicator,
                  }}
                  orientation="vertical"
                  variant="scrollable"
                  value={value}
                  onChange={handleChange}
                  aria-label="Vertical tabs example"
                  sx={{
                    position: "absolute",
                    left: "0",
                    marginLeft: "1px",
                    top: "0",
                    width: "100%",
                  }}
                  TabIndicatorProps={{
                    style: {
                      backgroundColor: "white",
                      width: "5px",
                    },
                  }}
                >
                  <Tab
                    href="#Overview"
                    label={
                      <span
                        className={
                          isRange && !isRange2
                            ? classes.tabs1
                            : isRange2
                            ? classes.tabs2
                            : classes.tabs
                        }
                      >
                        Overview
                      </span>
                    }
                    {...a11yProps(0)}
                  />
                  <Tab
                    href="#Advantages"
                    label={
                      <span
                        className={
                          isRange && !isRange2
                            ? classes.tabs1
                            : isRange2
                            ? classes.tabs2
                            : classes.tabs
                        }
                      >
                        Advantages
                      </span>
                    }
                    {...a11yProps(1)}
                  />
                  <Tab
                    href="#Checklists"
                    label={
                      <span
                        className={
                          isRange && !isRange2
                            ? classes.tabs1
                            : isRange2
                            ? classes.tabs2
                            : classes.tabs
                        }
                      >
                        Checklist
                      </span>
                    }
                    {...a11yProps(2)}
                  />
                  <Tab
                    href="#How_to_register"
                    label={
                      <span
                        className={
                          isRange && !isRange2
                            ? classes.tabs1
                            : isRange2
                            ? classes.tabs2
                            : classes.tabs
                        }
                      >
                        How to Register?
                      </span>
                    }
                    {...a11yProps(3)}
                  />
                  <Tab
                    href="#Documents_required"
                    label={
                      <span
                        className={
                          isRange && !isRange2
                            ? classes.tabs1
                            : isRange2
                            ? classes.tabs2
                            : classes.tabs
                        }
                      >
                        Documents Required
                      </span>
                    }
                    {...a11yProps(4)}
                  />
                  <Tab
                    href="#Why_legal_factory"
                    label={
                      <span
                        className={
                          isRange && !isRange2
                            ? classes.tabs1
                            : isRange2
                            ? classes.tabs2
                            : classes.tabs
                        }
                      >
                        Why Legal Factory?
                      </span>
                    }
                    {...a11yProps(5)}
                  />

                  <Tab
                    href="#Faqs"
                    label={
                      <span
                        className={
                          isRange && !isRange2
                            ? classes.tabs1
                            : isRange2
                            ? classes.tabs2
                            : classes.tabs
                        }
                      >
                        FAQ'S
                      </span>
                    }
                    {...a11yProps(6)}
                  />
                </Tabs>
              </Box>
            </Container>
          </Grid>
          <Grid item xs={10}>
            <TabPanel value={value} index={0}>
              <div id="Overview">
                <Overview />
              </div>
              <Checklist />
              <Register />
              <Documents />
              <Legalfactory />
              <Faq />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <div>
                <Overview />
              </div>
              <Checklist />
              <Register />
              <Documents />
              <Legalfactory />
              <Faq />
            </TabPanel>

            <TabPanel value={value} index={2}>
              {/* <Checklist /> */}
              <Overview />
              <div id="Checklists">
                <Checklist />
              </div>
              <Register />
              <Documents />
              <Legalfactory />
              <Faq />
            </TabPanel>
            <TabPanel value={value} index={3}>
              {/* <Register /> */}
              <Overview />
              <Checklist />
              <div id="How_to_register">
                <Register />
              </div>
              <Documents />
              <Legalfactory />
              <Faq />
            </TabPanel>
            <TabPanel value={value} index={4}>
              {/* <Documents /> */}
              <Overview />
              <Checklist />
              <Register />
              <div id="Documents_required">
                <Documents />
              </div>
              <Legalfactory />
              <Faq />
            </TabPanel>
            <TabPanel value={value} index={5}>
              {/* <Legalfactory /> */}
              <Overview />
              <Checklist />
              <Register />
              <Documents />
              <div id="Why_legal_factory">
                <Legalfactory />
              </div>
              <Faq />
            </TabPanel>
            <TabPanel value={value} index={6}>
              {/* <Faq /> */}
              <Overview />
              <Checklist />
              <Register />
              <Documents />
              <Legalfactory />
              <div id="Faqs">
                <Faq />
              </div>
            </TabPanel>
            <TabPanel value={value} index={7}>
              {/* <Faq /> */}
              <Overview />
              <Checklist />
              <Register />
              <Documents />
              <Legalfactory />
              <Faq />
            </TabPanel>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default SolePropietoryship;
