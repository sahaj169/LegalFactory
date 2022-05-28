import useStyles from "./Styles";
import React from "react";
import {
  Avatar,
  IconButton,
  Typography,
  Grid,
  useMediaQuery,
  useTheme,
  Container,
} from "@mui/material";
import logo2 from "../../Assets/Images/favicon.png";
import { FaFacebookF } from "react-icons/fa";
import CopyrightIcon from "@mui/icons-material/Copyright";

import {
  AiOutlineInstagram,
  AiOutlineWhatsApp,
  AiFillLinkedin,
} from "react-icons/ai";
import { useNavigate } from "react-router";
// import gplay from "../../Assets/Images/gplay.png";
// import appStore from "../../Assets/Images/appStore.png";

const Footer = () => {
  const classes = useStyles();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTab = useMediaQuery(theme.breakpoints.down("md"));

  const navigate = useNavigate();
  return (
    <div className={classes.OuterDiv}>
      <div style={{ backgroundColor: "#4A2902" }}>
        <Container fixed maxWidth>
          <div className={isMobile ? classes.UpperDivMobile : classes.UpperDiv}>
            <div
              className={classes.logoDiv}
              style={
                isTab
                  ? {
                      marginLeft: "0%",
                    }
                  : {
                      marginLeft: "5%",
                      width:"30%"
                    }
              }
            >
              <div className={classes.subLogoDiv}>
                <Avatar
                  src={logo2}
                  sx={{
                    py:[2,2,0,1,2],
                    height: ["100%","70%","100%","70%","70%"],
                    width: ["30%", "40%", "30%","15%","15%",],
                    cursor: "pointer",
                  }}
                  className={classes.avatar}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/");
                  }}
                />
                <Typography
                  variant="h6"
                  sx={
                    isMobile
                      ? {
                          color: "white",
                          py: 5,
                          px: 2,
                          fontWeight: "bold",
                        }
                      : {
                          color: "white",
                          py: [5, 7, 3],
                          px: [0, 1, 2],
                          fontWeight: "bold",
                          cursor: "pointer",
                          fontFamily:"Sora"
                        }
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/");
                  }}
                >
                  Legal Factory
                </Typography>
              </div>
              {/* <Typography
            variant="h7"
            sx={{
              color: "white",
              mx: 1,
              my: 3,
              fontFamily: "Sora",
              fontWeight: "bold",
            }}
          >
            Mobile App Available On :
          </Typography>

          <Button
            sx={{
              width: "200px",
              height: "80px",
            }}
          >
            <img alt="google play store" src={gplay} className={classes.Image} />
          </Button>
          <Button
            sx={{
              width: "200px",
              height: "80px",
            }}
            className={classes.appButton}
          >
            <img alt="app store"  src={appStore} className={classes.Image2} />
          </Button> */}

              <Typography
                variant="h7"
                sx={{
                  color: "white",
                  mx: [1, 0, 1],
                  my: 2,
                  fontFamily: "Sora",
                  fontWeight: "bold",
                }}
              >
                Connect With Us On :
              </Typography>
              <Container
                sx={{
                  display: "flex",
                  marginBottom: "30px",
                  paddingLeft: ["0px", "0px", "6px"],
                  paddingRight: "50px",
                  marginLeft: ["5px", "0px", "0px"],
                  marginRight: "40px",
                  justifyContent: "left",
                }}
              >
                <IconButton
                  sx={{
                    border: "solid",
                    color: "white",
                    height: "40px",
                    width: "40px",
                    marginRight: ["40px", "20px", "20px"],
                  }}
                >
                  <a
                    style={{
                      color: "white",
                      paddingTop: "7px",
                    }}
                    href="https://www.facebook.com/legalfatory"
                  >
                    <FaFacebookF />
                  </a>
                </IconButton>
                <IconButton
                  sx={{
                    border: "solid",
                    color: "white",
                    height: "40px",
                    width: "40px",
                    marginRight: ["40px", "20px", "20px"],
                  }}
                >
                  <a
                    style={{
                      color: "white",
                      paddingTop: "7px",
                    }}
                    href="https://www.linkedin.com/company/legal-factory-xpert"
                  >
                    <AiFillLinkedin />
                  </a>
                </IconButton>
                <IconButton
                  sx={{
                    border: "solid",
                    color: "white",
                    height: "40px",
                    width: "40px",
                    marginRight: ["40px", "20px", "20px"],
                  }}
                >
                  <a
                    style={{
                      color: "white",
                      paddingTop: "7px",
                    }}
                    href="https://www.instagram.com/legal._.factory/"
                  >
                    <AiOutlineInstagram />
                  </a>
                </IconButton>

                <IconButton
                  sx={{
                    border: "solid",
                    color: "white",
                    height: "40px",
                    width: "40px",
                    marginRight: ["20px", "20px", "20px"],
                  }}
                >
                  <a
                    style={{
                      color: "white",
                      paddingTop: "7px",
                    }}
                    href="https://api.whatsapp.com/send?phone=9587754754"
                  >
                    <AiOutlineWhatsApp />
                  </a>
                </IconButton>
              </Container>
            </div>

            <div
              className={isMobile ? classes.ServicesMobile : classes.Services}
            >
              <Grid container spacing={isMobile ? 2 : 12}>
                <Grid item md={4} sm={4} xs={4} sx={{}}>
                  <div className={classes.servicesSub}>
                    <Typography
                      sx={
                        !isMobile
                          ? {
                              color: "white",
                              fontFamily: "Sora",
                              fontWeight: "bold",
                              my: 1,
                             
                            }
                          : {
                              color: "white",
                              fontFamily: "Sora",
                              fontWeight: "bold",
                            }
                      }
                      variant="h5"
                    >
                      Services
                    </Typography>
                    <Typography
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/privatelimited");
                      }}
                      sx={
                        !isMobile
                          ? {
                              color: "white",
                              fontFamily: "Sora",
                              my: [1,1,2],
                              cursor: "pointer",
                              fontSize:"14px"
                            }
                          : {
                              color: "white",
                              fontFamily: "Sora",
                              my: 1,
                              fontSize:"13px"
                              
                            }
                      }
                      variant="h7"
                    >
                      Private Limited Company
                    </Typography>
                    <Typography
                      sx={!isMobile?{
                        color: "white",
                        fontFamily: "Sora",
                        my: 1,
                        fontSize:"14px",
                        cursor:"pointer"
                      }:{
                        color: "white",
                        fontFamily: "Sora",
                        my: 1,
                        fontSize:"13px",
                        cursor:"pointer"
                      }}
                      variant="h7"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/limited-liability-partnership");
                      }}
                    >
                      Limited Liability Partnership
                    </Typography>
                    <Typography
                      sx={!isMobile?{
                        color: "white",
                        fontFamily: "Sora",
                        my: [1,1,2],
                        fontSize:"14px",
                        cursor:"pointer"
                      }:{
                        color: "white",
                        fontFamily: "Sora",
                        my: [1,1,2],
                        fontSize:"13px",
                        cursor:"pointer"
                      }}
                      variant="h7"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/shop-act");
                      }}
                    >
                      Shop Act Establishment
                    </Typography>
                    {/* <Typography
                  sx={{
                    color: "white",
                    fontFamily: "Sora",
                    my:1
                  }}
                  variant="h7"
                >
               Sole Proprietorship
                </Typography> */}
                  </div>
                </Grid>
                <Grid
                  item
                  md={4}
                  sm={4}
                  xs={4}
                  sx={{
                    marginTop: [1, 8, 1],
                  }}
                >
                  <div className={classes.servicesSub}>
                    <Typography
                      sx={
                        !isMobile
                          ? {
                              color: "white",
                              fontFamily: "Sora",
                              my: [1,2,1],
                              display: [0, "none", "inline"],
                              fontSize:"14px",
                              cursor:"pointer"

                            }
                          : {
                              color: "white",
                              fontFamily: "Sora",
                              marginTop: 4,
                              fontSize:"13px"
                            }
                            
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/nidhi-company");
                      }}
                      variant="h7"
                    >
                      Nidhi Company
                    </Typography>
                    <Typography
                      sx={
                        !isMobile
                          ? {
                              color: "white",
                              fontFamily: "Sora",
                              marginTop: [2,2,2],
                              fontSize:"14px",
                              cursor:"pointer"
                            }
                          : {
                              color: "white",
                              fontFamily: "Sora",
                              marginTop: 2,
                              fontSize:"13px"
                            }
                            
                      }
                      variant="h7"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/producer-company");
                      }}
                    >
                      Producer Company
                    </Typography>
                    <Typography
                      sx={
                        !isMobile
                          ? {
                              color: "white",
                              fontFamily: "Sora",
                              marginTop: [2,2,2],
                              cursor:"pointer",
                              fontSize:"14px"
                            }
                          : {
                              color: "white",
                              fontFamily: "Sora",
                              my: 2,
                              fontSize:"13px"
                            }
                      }
                      variant="h7"
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/partnershipfirm");
                      }}
                    >
                      Partnership Firm
                    </Typography>
                    <Typography
                      sx={
                        !isMobile
                          ? {
                              color: "white",
                              fontFamily: "Sora",
                              marginTop:[0,2,2],
                              cursor:"pointer",
                              fontSize:"14px"
                            }
                          : {
                              color: "white",
                              fontFamily: "Sora",
                              my: 0,
                              visibility: "collapse",
                              fontSize:"13px"
                            }
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/startup-india");
                      }}
                    
                      variant="h7"
                    >
                      StartUp India Registration
                    </Typography>

                    <Typography
                      sx={
                        !isMobile
                          ? {
                              color: "white",
                              fontFamily: "Sora",
                              my: [1, 0, 1],
                              marginTop: [1, 7, 3],
                              display:["none","none","block"],
                              fontSize:"14px",
                              cursor:"pointer"
                            }
                          : {
                              color: "white",
                              fontFamily: "Sora",
                              marginTop: 2,
                              display:"none",
                              fontSize:"13px"
                            }
                      }
                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/sole-proprietorship");
                      }}
                      variant="h7"
                    >
                      Sole Proprietorship
                    </Typography>
                  </div>
                </Grid>
                <Grid
                  item
                  md={4}
                  sm={4}
                  xs={4}
                  sx={{
                    my: 2,
                  }}
                >
                  <div className={classes.servicesSub}>
                    <Typography
                      sx={
                        !isMobile
                          ? {
                              color: "white",
                              fontFamily: "Sora",
                              my: [1, 0, 1],
                              marginTop: [1, 7, 1],
                              display:["block","block","none"],
                              fontSize:"14px"
                              
                            }
                          : {
                              color: "white",
                              fontFamily: "Sora",
                              marginTop: 2,
                              fontSize:"13px"
                            }
                      }
                      variant="h7"
                    >
                      Sole Proprietorship
                    </Typography>

                    <Typography
                      sx={
                        !isMobile
                          ? {
                              color: "white",
                              fontFamily: "Sora",
                              my: 1,
                              display: "none",
                              cursor:"pointer"
                            }
                          : {
                              color: "white",
                              fontFamily: "Sora",
                              my: 2,
                              fontSize:"13px"
                            }
                      }
                      variant="h7"

                      onClick={(e) => {
                        e.preventDefault();
                        navigate("/startup-india");
                      }}
                    >
                      StartUp India Registration
                    </Typography>
                    <Typography
                      sx={
                        !isMobile
                          ? {
                              color: "white",
                              fontFamily: "Sora",
                              my: 2,
                              display: ["none", "inline", "none"],
                              fontSize:"14px"
                            }
                          : {
                              color: "white",
                              fontFamily: "Sora",
                              marginTop: 4,
                              display: "none",
                              fontSize:"12px"
                            }
                      }
                      variant="h7"
                    >
                      Nidhi Company
                    </Typography>
                    <Typography
                      sx={
                        !isMobile
                          ? {
                              color: "white",
                              fontFamily: "Sora",
                              fontWeight: "bold",
                              marginTop: [0,1,0],
                              marginBottom:[0,1,1],
                              width:100,
                              cursor:"pointer",
                              fontSize:[15,15,20]
                              

                            }
                          : {
                              color: "white",
                              fontFamily: "Sora",
                              fontWeight: "bold",
                              my: 0,
                              width:100,
                              fontSize:15

                            }
                      }
                      variant="h6"
                      onClick={
                      (e)=>{
                        e.preventDefault()
                      navigate("/about-us")
                      }
                      }
                    >
                      About Us
                    </Typography>
                    <Typography
                      sx={
                        !isMobile
                          ? {
                              color: "white",
                              fontFamily: "Sora",
                              fontWeight: "bold",
                              my: 1,
                              display: ["none", "block", "inline"],
                              width:120,
                              cursor:"pointer",
                              fontSize:[15,15,20]
                        
                              
                            }
                          : {
                              color: "white",
                              fontFamily: "Sora",
                              fontWeight: "bold",
                              my: 2,
                              width:120,
                              fontSize:15,

                            
                              // display:"none"
                            }
                      }
                      variant="h6"
                      onClick={
                        (e)=>{
                          e.preventDefault()
                        navigate("/contact-us")
                        }
                        }
                    >
                      Contact Us
                    </Typography>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </Container>
      </div>

      <div className={isMobile ? classes.bottomDivMobile : classes.bottomDiv}>
        <Typography
          sx={{
            display: "flex",
            justifyContent: "center",
            fontWeight: "bold",
            py: 2,
            color: "#4A2902",
            fontFamily:"Sora"
          }}
        >
          <CopyrightIcon />
          2022 LegalFactory
        </Typography>
      </div>
    </div>
  );
};

export default Footer;
