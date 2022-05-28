import {
  Button,
  CardContent,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import Man from "../../Assets/Images/man.jpg";
import { Navbar } from "../../Components/Navbar/Navbar";
import useStyles from "./styles";
import BackgroundImage from "../../Assets/Images/vectors.png";
import Vectors2 from "../../Assets/Images/vectors2.png";
import Lawyer from "../../Assets/Images/lawyer.jpg";
import img1 from "../../Assets/Images/team.jpg";
import img2 from "../../Assets/Images/contract.jpg";
import img3 from "../../Assets/Images/stock.jpg";
import img4 from "../../Assets/Images/businessman_2.jpg";
import img5 from "../../Assets/Images/contract_2.jpg";
import img6 from "../../Assets/Images/company_2.jpg";
import img7 from "../../Assets/Images/startup.jpg";
import img8 from "../../Assets/Images/deal.jpg";
import img9 from "../../Assets/Images/salary.jpg";
import IciciBank from "../../Assets/Images/iciciBank.svg";
import Idfc from "../../Assets/Images/idfc.svg";
import Sbi from "../../Assets/Images/sbi.svg";
import Kotak from "../../Assets/Images/kotak.svg";
import Au from "../../Assets/Images/au.svg";
import Hdfc from "../../Assets/Images/hdfc.png";
import Bob from "../../Assets/Images/bob.png";
import Axis from "../../Assets/Images/axis.jpg";
import Ib from "../../Assets/Images/indian_bank.jpg";
import Ub from "../../Assets/Images/ub.png";
import Cm from "../../Assets/Images/chola.jpg";
import Boi from "../../Assets/Images/boi.png";
import Service_1 from "../../Assets/Images/service_1.svg";
import Service_2 from "../../Assets/Images/service_2.svg";
import Service_3 from "../../Assets/Images/service_3.svg";
import Service_4 from "../../Assets/Images/service_4.svg";
import Service_5 from "../../Assets/Images/service_5.svg";
import Service_6 from "../../Assets/Images/service_6.svg";

import Wcu_1 from "../../Assets/Images/wcu_1.svg";
import Wcu_2 from "../../Assets/Images/wcu_2.svg";
import Wcu_3 from "../../Assets/Images/wcu_3.svg";
import Wcu_4 from "../../Assets/Images/wcu_4.svg";
import Wcu_5 from "../../Assets/Images/wcu_5.svg";
import Wcu_6 from "../../Assets/Images/wcu_6.svg";
import HomeCarousel from "../../Components/HomePageCarousel/HomeCarousel";
import AboutUs from "../../Components/AboutUsAndWork/AboutUs";
import GetInTouchForm from "../../Components/GetInTouchForm/GetInTouchForm";
import Rectangle_5 from "../../Assets/Images/Rectangle_5.png";
import Footer from "../../Components/Footer/Footer";
import { useNavigate } from "react-router";


const Background1 = {
  backgroundImage: "url(" + BackgroundImage + ")",
  backgroundSize: "cover",
};

const Background2 = {
  backgroundImage: "url(" + Vectors2 + ")",
  backgroundSize: "cover",
};

const Background3 = {
  backgroundImage: "url(" + Rectangle_5 + ")",
  backgroundSize: "cover",
};

export const HomePage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isRange = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const isRange2 = useMediaQuery(theme.breakpoints.between("lg", "xl"));

  const navigate = useNavigate();

  React.useEffect(() => {
   window.scrollTo(0,0) 
  }, [])

  const list = [
    {
      image: img1,
      index: 0,
      heading: "Private Limited Company",
      description:
        "Take your business to another level by registering your company as private.",
    },
    {
      image: img2,
      index: 1,
      heading: "Limited Liability Partnership",
      description:
        "Make  your business run smoothly, limited liabilities to all the partners.",
    },
    {
      image: img3,
      index: 2,
      heading: "Search Register Company Name",
      description: "Check if your choice of name is available to you or not.",
    },
    {
      image: img4,
      index: 3,
      heading: "Shop Act Establishment",
      description: " Get your Shop & Establishment Act now under our Legal guidance.",
    },
    {
      image: img5,
      index: 4,
      heading: "Sole Proprietorship",
      description:
        "Become your own Boss, take control of your company and expand your business.",
    },
    {
      image: img6,
      index: 5,
      heading: "Nidhi Company",
      description:
        "Save and Secure your business through savings and reserve funds.",
    },
    {
      image: img7,
      index: 6,
      heading: "Producer Company",
      description:
        "Produce the best quality products and register your company as a Producer with a few steps.",
    },
    {
      image: img8,
      index: 7,
      heading: "Partnership Firm",
      description:
        "Forget your worries when you have partners to rely on, register as a Partnership Firm and rest easy.",
    },
    {
      image: img9,
      index: 8,
      heading: "Startup India Registration",
      description: "Register your startup easily and effortlessly.",
    },
  ];

  return (
    <>
      <Container fixed maxWidth>
        <div style={Background1}>
          <Grid container className={classes.all}>
            <Grid direction='column' xs={12} md={9}>
              {!(isMobile || isTablet) ? (
                <Grid>
                  <Navbar bs='SERVICES' />
                </Grid>
              ) : (
                <Grid>
                  <Navbar />
                  <img
                    width='80%'
                    height='80%'
                    src={Man}
                    alt=''
                    style={{ paddingLeft: '75px', paddingTop: '75px' }}
                  />
                </Grid>
              )}
              {!(isMobile || isTablet) ? (
                <Grid className={classes.text} xs={12}>
                  <Typography
                    variant='h4'
                    sx={{
                      display: 'flex',
                      color: '#703C00',
                      fontWeight: 'bold',
                      fontSize: '50px',
                      fontFamily: 'Sora',
                      marginTop: '100px',
                    }}
                  >
                    Set your business up for success, under our legal expertise.
                    <br />
                    Your solutions start here.
                  </Typography>
                  <Typography
                    variant='h4'
                    sx={{
                      display: 'flex',
                      fontWeight: 'bold',
                      fontSize: '25px',
                      fontFamily: 'Sora',
                      color: '#865a28',
                      paddingTop: '15px',
                    }}
                  >
                    Get the best assurance for your company.
                  </Typography>
                  <Typography
                    variant='h4'
                    sx={{
                      display: 'flex',
                      fontWeight: 'bold',
                      fontSize: '24px',
                      fontFamily: 'Sora',
                      color: '#865a28',
                      paddingTop: '15px',
                    }}
                  >
                    Your Success is Our Commitment.
                  </Typography>
                </Grid>
              ) : (
                <div style={Background1}>
                  <Grid className={classes.textMob} xs={12}>
                    <Typography
                      variant='h4'
                      sx={{
                        display: 'flex',
                        color: '#703C00',
                        fontWeight: 'bold',
                        fontSize: '43px',
                        fontFamily: 'Sora',
                      }}
                    >
                      Set your business up for success, under our legal
                      expertise.
                      <br />
                      Your solutions start here.
                    </Typography>
                    <Typography
                      variant='h4'
                      sx={{
                        display: 'flex',
                        fontWeight: 'bold',
                        fontSize: '20px',
                        fontFamily: 'Sora',
                        color: '#865a28',
                        paddingTop: '15px',
                      }}
                    >
                      Get the best assurance for your company.
                    </Typography>
                    <Typography
                      variant='h4'
                      sx={{
                        display: 'flex',
                        fontWeight: 'bold',
                        fontSize: '20px',
                        fontFamily: 'Sora',
                        color: '#865a28',
                        paddingTop: '15px',
                      }}
                    >
                      Your Success is Our Commitment.
                    </Typography>
                  </Grid>
                </div>
              )}
              {/* {!(isMobile || isTablet) ? (
              <Grid xs={12} sx={{ marginTop: '100px', paddingLeft: '100px' }}>
                <img src={Services} alt='' />
              </Grid>
            ) : (
              <Grid sx={{ marginTop: '50px' }}>
                <Grid>
                  <img width='100%' src={Services} alt='' />
                </Grid>
              </Grid>
            )} */}
              <Grid
                container
                xs={12}
                md={10}
                sm={11}
                sx={{
                  backgroundColor: '#ffe4bf',
                  marginTop: '70px',
                  paddingTop: '30px',
                  paddingLeft: ['0px', '0px', '10px', '10px', '35px'],
                  marginLeft: ['0px', '10px', '100px', '100px', '100px'],
                  borderRadius: '20px',
                  justifyContent: 'center',
                }}
              >
                <Grid
                  xs={12}
                  md={6}
                  lg={4}
                  sm={6}
                  sx={{
                    display: 'flex',
                    paddingLeft: ['30px', '20px', '20px', '0px', '0px'],
                    paddingBottom: '25px',
                  }}
                >
                  <img src={Service_1} alt='' />
                  <Typography
                    variant='h4'
                    sx={{
                      display: 'flex',
                      fontWeight: 'bold',
                      fontSize: '20px',
                      fontFamily: 'Sora',
                      color: '#865a28',
                      paddingTop: '25px',
                      paddingLeft: '10px',
                    }}
                  >
                    Financial Services
                  </Typography>
                </Grid>
                <Grid
                  xs={12}
                  md={6}
                  lg={4}
                  sm={6}
                  sx={{
                    display: 'flex',
                    paddingLeft: ['30px', '20px', '20px', '0px', '0px'],
                    paddingBottom: '25px',
                  }}
                >
                  <img src={Service_2} alt='' />
                  <Typography
                    variant='h4'
                    sx={{
                      display: 'flex',
                      fontWeight: 'bold',
                      fontSize: '20px',
                      fontFamily: 'Sora',
                      color: '#865a28',
                      paddingTop: '25px',
                      paddingLeft: '10px',
                    }}
                  >
                    Taxation Advisory
                  </Typography>
                </Grid>
                <Grid
                  xs={12}
                  md={6}
                  lg={4}
                  sm={6}
                  sx={{
                    display: 'flex',
                    paddingLeft: ['30px', '20px', '20px', '0px', '0px'],
                    paddingBottom: '25px',
                  }}
                >
                  <img src={Service_3} alt='' />
                  <Typography
                    variant='h4'
                    sx={{
                      display: 'flex',
                      fontWeight: 'bold',
                      fontSize: '20px',
                      fontFamily: 'Sora',
                      color: '#865a28',
                      paddingTop: '25px',
                      paddingLeft: '10px',
                    }}
                  >
                    Accounting Services
                  </Typography>
                </Grid>
                <Grid
                  xs={12}
                  sm={6}
                  md={6}
                  lg={4}
                  sx={{
                    display: 'flex',
                    paddingLeft: ['30px', '20px', '20px', '0px', '0px'],
                    paddingBottom: '25px',
                  }}
                >
                  <img src={Service_4} alt='' />
                  <Typography
                    variant='h4'
                    sx={{
                      display: 'flex',
                      fontWeight: 'bold',
                      fontSize: '20px',
                      fontFamily: 'Sora',
                      color: '#865a28',
                      paddingTop: '25px',
                      paddingLeft: '10px',
                    }}
                  >
                    Legal Business Services
                  </Typography>
                </Grid>
                <Grid
                  xs={12}
                  md={6}
                  lg={4}
                  sm={6}
                  sx={{
                    display: 'flex',
                    paddingLeft: ['30px', '20px', '20px', '0px', '0px'],
                    paddingBottom: '25px',
                  }}
                >
                  <img src={Service_5} alt='' />
                  <Typography
                    variant='h4'
                    sx={{
                      display: 'flex',
                      fontWeight: 'bold',
                      fontSize: '20px',
                      fontFamily: 'Sora',
                      color: '#865a28',
                      paddingTop: '25px',
                      paddingLeft: '10px',
                    }}
                  >
                    Annual Compliance
                  </Typography>
                </Grid>
                <Grid
                  xs={12}
                  md={6}
                  lg={4}
                  sm={6}
                  sx={{
                    display: 'flex',
                    paddingLeft: ['30px', '20px', '20px', '0px', '0px'],
                    paddingBottom: '25px',
                  }}
                >
                  <img src={Service_6} alt='' />
                  <Typography
                    variant='h4'
                    sx={{
                      display: 'flex',
                      fontWeight: 'bold',
                      fontSize: '20px',
                      fontFamily: 'Sora',
                      color: '#865a28',
                      paddingTop: '25px',
                      paddingLeft: '10px',
                    }}
                  >
                    Company Registration
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid direction='column' xs={12} md={3}>
              {!(isMobile || isTablet) && !isRange && !isRange2 ? (
                <Grid sx={{ marginTop: '80px' }}>
                  <img src={Man} alt='' />
                </Grid>
              ) : isRange ? (
                <Grid sx={{ marginTop: '80px' }}>
                  <img width='120%' src={Man} alt='' />
                </Grid>
              ) : isRange2 ? (
                <Grid sx={{ marginTop: '80px' }}>
                  <img width='100%' src={Man} alt='' />
                </Grid>
              ) : null}
            </Grid>
          </Grid>
        </div>
        <div style={Background2}>
          {!(isMobile || isTablet) ? (
            <Typography
              variant='h4'
              sx={{
                display: 'flex',
                justifyContent: 'center',
                color: '#703C00',
                fontWeight: 'bold',
                fontSize: '48px',
                fontFamily: 'Sora',
              }}
              className={classes.bigText}
            >
              Why Choose Us
            </Typography>
          ) : (
            <Typography
              variant='h4'
              sx={{
                display: 'flex',
                justifyContent: 'center',
                color: '#703C00',
                fontWeight: 'bold',
                fontSize: '40px',
                fontFamily: 'Sora',
                marginTop: '30px',
              }}
              className={classes.bigText}
            >
              Why Choose Us
            </Typography>
          )}

          <Grid container>
            <Grid xs={12} md={5} className={classes.center_align}>
              <img src={Lawyer} alt='' />
            </Grid>
            <Grid container xs={12} md={6} className={classes.center_align}>
              <Grid
                xs={12}
                sm={6}
                lg={4}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingTop: '50px',
                }}
              >
                <Grid
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img src={Wcu_1} alt='' />
                </Grid>
                <Typography
                  variant='h4'
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '16px',
                    fontFamily: 'Sora',
                    color: '#865a28',
                    paddingTop: '25px',
                    paddingLeft: ['30px', '70px', '70px', '70px', '70px'],
                  }}
                >
                  Dedicated Admin Manager
                </Typography>
              </Grid>
              <Grid
                xs={12}
                sm={6}
                lg={4}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingTop: '50px',
                }}
              >
                <Grid
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img src={Wcu_2} alt='' />
                </Grid>
                <Typography
                  variant='h4'
                  sx={{
                    display: 'flex',
                    fontWeight: 'bold',
                    fontSize: '16px',
                    fontFamily: 'Sora',
                    color: '#865a28',
                    paddingTop: '25px',
                    paddingLeft: ['30px', '70px', '70px', '50px', '70px'],
                    justifyContent: 'center',
                  }}
                >
                  100% Privacy Guaranteed
                </Typography>
              </Grid>
              <Grid
                xs={12}
                sm={6}
                lg={4}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingTop: '50px',
                }}
              >
                <Grid
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img src={Wcu_3} alt='' />
                </Grid>
                <Typography
                  variant='h4'
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    fontWeight: 'bold',
                    fontSize: '16px',
                    fontFamily: 'Sora',
                    color: '#865a28',
                    paddingTop: '25px',
                    paddingLeft: ['30px', '70px', '70px', '50px', '70px'],
                  }}
                >
                  Organised documentation
                </Typography>
              </Grid>
              <Grid
                xs={12}
                sm={6}
                lg={4}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingTop: '50px',
                }}
              >
                <Grid
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img src={Wcu_4} alt='' />
                </Grid>{' '}
                <Typography
                  variant='h4'
                  sx={{
                    display: 'flex',
                    fontWeight: 'bold',
                    fontSize: '16px',
                    fontFamily: 'Sora',
                    color: '#865a28',
                    paddingTop: '25px',
                    paddingLeft: ['20px', '30px', '70px', '70px', '70px'],
                    justifyContent: 'center',
                  }}
                >
                  24-7 Customer Care
                </Typography>
              </Grid>
              <Grid
                xs={12}
                sm={6}
                lg={4}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingTop: '50px',
                }}
              >
                <Grid
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img src={Wcu_5} alt='' />
                </Grid>{' '}
                <Typography
                  variant='h4'
                  sx={{
                    display: 'flex',
                    fontWeight: 'bold',
                    fontSize: '16px',
                    fontFamily: 'Sora',
                    color: '#865a28',
                    paddingTop: '25px',
                    paddingLeft: ['20px', '20px', '70px', '40px', '30px'],
                    justifyContent: 'center',
                  }}
                >
                  Affordable prices
                </Typography>
              </Grid>
              <Grid
                xs={12}
                sm={6}
                lg={4}
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingTop: '50px',
                }}
              >
                <Grid
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img src={Wcu_6} alt='' />
                </Grid>{' '}
                <Typography
                  variant='h4'
                  sx={{
                    display: 'flex',
                    fontWeight: 'bold',
                    fontSize: '16px',
                    fontFamily: 'Sora',
                    color: '#865a28',
                    paddingTop: '25px',
                    paddingLeft: ['30px', '70px', '70px', '40px', '70px'],
                    justifyContent: 'center',
                  }}
                >
                  Team of Experts On Board
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </div>
        <div>
          {!(isMobile || isTablet) ? (
            <Grid container>
              <Grid item xs={12}>
                <Typography
                  variant='h4'
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    color: '#703C00',
                    fontWeight: 'bold',
                    fontSize: '50px',
                    fontFamily: 'Sora',
                  }}
                  className={classes.bigText}
                >
                  Our Services
                </Typography>
              </Grid>
              {list.map((item) => (
                <Grid
                  item
                  lg={4}
                  md={6}
                  xs={12}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    marginTop: '-30px',
                  }}
                >
                  <CardContent className={classes.card}>
                    <Grid container>
                      <Grid xs={4}>
                        <img src={item.image} alt='' />
                      </Grid>
                      <Grid xs={8}>
                        <Typography
                          gutterBottom
                          variant='h5'
                          component='h2'
                          className={classes.header}
                          color='#703C00'
                          fontWeight='bold'
                          fontFamily='Sora'
                          display='flex'
                          justifyContent='center'
                          alignItems='center'
                          paddingTop='10px'
                        >
                          {item.heading}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Typography
                      variant='body2'
                      component='p'
                      color='#A56203'
                      fontSize='16px'
                      paddingTop='25px'
                      fontFamily='Sora'
                    >
                      {item.description}
                    </Typography>

                    {item.index === 0 ? (
                      <Button
                        style={{
                          backgroundColor: '#703C00',
                          color: 'white',
                          marginTop: '20px',
                          width: '50%',
                        }}
                        onClick={() => navigate('/privatelimited')}
                      >
                        Learn More
                      </Button>
                    ) : item.index === 1 ? (
                      <Button
                        style={{
                          backgroundColor: '#703C00',
                          color: 'white',
                          marginTop: '20px',
                          width: '50%',
                        }}
                        onClick={() =>
                          navigate('/limited-liability-partnership')
                        }
                      >
                        Learn More
                      </Button>
                    ) : item.index === 2 ? (
                      <Button
                        style={{
                          backgroundColor: '#703C00',
                          color: 'white',
                          marginTop: '20px',
                          width: '50%',
                        }}
                        onClick={() => navigate('/privatelimited')}
                      >
                        Learn More
                      </Button>
                    ) : item.index === 3 ? (
                      <Button
                        style={{
                          backgroundColor: '#703C00',
                          color: 'white',
                          marginTop: '20px',
                          width: '50%',
                        }}
                        onClick={() => navigate('/shop-act')}
                      >
                        Learn More
                      </Button>
                    ) : item.index === 4 ? (
                      <Button
                        style={{
                          backgroundColor: '#703C00',
                          color: 'white',
                          marginTop: '20px',
                          width: '50%',
                        }}
                        onClick={() => navigate('/sole-proprietorship')}
                      >
                        Learn More
                      </Button>
                    ) : item.index === 5 ? (
                      <Button
                        style={{
                          backgroundColor: '#703C00',
                          color: 'white',
                          marginTop: '20px',
                          width: '50%',
                        }}
                        onClick={() => navigate('/nidhi-company')}
                      >
                        Learn More
                      </Button>
                    ) : item.index === 6 ? (
                      <Button
                        style={{
                          backgroundColor: '#703C00',
                          color: 'white',
                          marginTop: '20px',
                          width: '50%',
                        }}
                        onClick={() => navigate('/producer-company')}
                      >
                        Learn More
                      </Button>
                    ) : item.index === 7 ? (
                      <Button
                        style={{
                          backgroundColor: '#703C00',
                          color: 'white',
                          marginTop: '20px',
                          width: '50%',
                        }}
                        onClick={() => navigate('/partnershipfirm')}
                      >
                        Learn More
                      </Button>
                    ) : item.index === 8 ? (
                      <Button
                        style={{
                          backgroundColor: '#703C00',
                          color: 'white',
                          marginTop: '20px',
                          width: '50%',
                        }}
                        onClick={() => navigate('/startup-india')}
                      >
                        Learn More
                      </Button>
                    ) : (
                      <Button
                        style={{
                          backgroundColor: '#703C00',
                          color: 'white',
                          marginTop: '20px',
                          width: '50%',
                        }}
                      >
                        Learn More
                      </Button>
                    )}
                  </CardContent>
                </Grid>
              ))}
            </Grid>
          ) : (
            <Grid container>
              <Grid item xs={12}>
                <Typography
                  variant='h4'
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    color: '#703C00',
                    fontWeight: 'bold',
                    fontSize: '40px',
                    fontFamily: 'Sora',
                    marginTop: '30px',
                  }}
                  className={classes.bigText}
                >
                  Our Services
                </Typography>{' '}
              </Grid>
              {list.map((item) => (
                <Grid
                  item
                  lg={4}
                  md={6}
                  xs={12}
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    marginTop: '-60px',
                  }}
                >
                  <CardContent className={classes.cardMob}>
                    <Grid container>
                      <Grid xs={4}>
                        <img src={item.image} alt='' />
                      </Grid>
                      <Grid xs={8}>
                        <Typography
                          gutterBottom
                          variant='h5'
                          component='h2'
                          className={classes.header}
                          color='#703C00'
                          fontWeight='bold'
                          fontFamily='Sora'
                          display='flex'
                          justifyContent='center'
                          alignItems='center'
                          paddingTop='10px'
                        >
                          {item.heading}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Typography
                      variant='body2'
                      component='p'
                      color='#A56203'
                      fontSize='16px'
                      fontFamily='Sora'
                      paddingTop='25px'
                      className={classes.center_align}
                    >
                      {item.description}
                    </Typography>
                    <Button
                      style={{
                        backgroundColor: '#703C00',
                        color: 'white',
                        marginTop: '20px',
                        width: '50%',
                      }}
                    >
                      Learn More
                    </Button>
                  </CardContent>
                </Grid>
              ))}
            </Grid>
          )}
          {!(isMobile || isTablet) ? (
            <Typography
              variant='h4'
              sx={{
                display: 'flex',
                justifyContent: 'center',
                color: '#703C00',
                fontWeight: 'bold',
                fontSize: '42px',
                fontFamily: 'Sora',
                paddingTop: '100px',
              }}
              className={classes.bigText}
            >
              We Are Trusted By
            </Typography>
          ) : (
            <Typography
              variant='h4'
              sx={{
                display: 'flex',
                justifyContent: 'center',
                color: '#703C00',
                fontWeight: 'bold',
                fontSize: '35px',
                fontFamily: 'Sora',
                paddingTop: '50px',
              }}
              className={classes.bigText}
            >
              We Are Trusted By
            </Typography>
          )}

          <div style={Background3}>
            <Grid
              container
              spacing={10}
              justifyContent='center'
              alignItems='center'
              sx={{
                marginTop: '0px',
                paddingBottom: '30px',
              }}
            >
              <Grid item>
                <img src={IciciBank} alt='IciciBank' />
              </Grid>
              <Grid item>
                <img src={Idfc} alt='Idfc' />
              </Grid>
              <Grid item>
                <img src={Sbi} alt='Sbi' />
              </Grid>
              <Grid item>
                <img src={Kotak} alt='Kotak' />
              </Grid>
              <Grid item>
                <img src={Au} alt='Au' />
              </Grid>
              <Grid
                item
                sx={{ marginTop: ['-70px', '0px', '0px', '0px', '-80px'] }}
              >
                <img src={Hdfc} alt='Hdfc' />
              </Grid>
              <Grid item sx={{ marginTop: ['-150px', '-100px'] }}>
                <img src={Bob} alt='Bob' />
              </Grid>
              <Grid item sx={{ marginTop: -10 }}>
                <img src={Cm} alt='Cm' />
              </Grid>
              <Grid item sx={{ marginTop: ['-30px', '-120px'] }}>
                <img src={Ub} alt='Ub' />
              </Grid>
              <Grid item sx={{ marginTop: ['-50px', '-70px', '-120px'] }}>
                <img src={Ib} alt='Ib' />
              </Grid>
              <Grid item sx={{ marginTop: ['-120px', '-150px'] }}>
                <img src={Axis} alt='Axis' />
              </Grid>
              <Grid item sx={{ marginTop: ['-30px','-120px', '-130px'] }}>
                <img height={100} src={Boi} alt='Boi' />
              </Grid>
            </Grid>
          </div>
          {isMobile || isTablet ? <></> : <HomeCarousel />}
          <AboutUs />
          <GetInTouchForm />
        </div>
      </Container>
      <Footer />
    </>
  )
};
