import {
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import CountUp from 'react-countup';

const AboutUs = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <div>
      <Container
        sx={!isMobile?{
          marginTop: "5%",
        }:{
          
        }}
      >
          <Typography
            variant='h4'
            sx={{
              display: 'flex',
              justifyContent: 'center',
              color: '#703C00',
              fontWeight: 'bold',
              fontSize: ['50px',"40px","50px"],
              fontFamily: 'Sora',
              paddingTop: '50px',
            }}
          >
            About Us And Work
          </Typography>
          <Typography
            variant='h7'
            sx={{
              color: '#703C00',
              display: 'flex',
              justifyContent: 'center',
              px: '2%',
              marginTop: '2%',
              fontFamily:"Sora",
              
            }}
          >
           LEGAL FACTORY is a  unit of Xpert Finance and one of the fastest growing fintech companies. We have a team of young and enthusiastic professionals who are focused on providing excellent professional services with quality, innovation, and the highest standard of client satisfaction. Our aim is to build a financial ecosystem focused on providing end-to-end support for every business and individual
          </Typography>

        <Grid
          container
          sx={{
            marginTop: "30px",
          }}
        >
          <Grid item md={3} sm={6} xs={6} sx={{}}>
            <Container
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  color: "#4A2902",
                  fontWeight: "bold",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                
                <CountUp delay={2} start={0} end={16} duration={2.75} />
              </Typography>
              <Typography
                sx={!isMobile?{
                  color: "#4A2902",
                  display: "flex",
                  justifyContent: "center",
                  fontFamily:"Sora"

                }:{
                // marginLeft:"20px"
                color: "#4A2902",
                display: "flex",
                  justifyContent: "center",
                fontSize:"12px",
                my:2,
                fontWeight:"bold",
                fontFamily:"Sora"
                
                }}
              >
                Cases Handled
              </Typography>
            </Container>
          </Grid>
          <Grid
            item
            md={3}
            sm={6}
            xs={6}
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Container
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  color: "#4A2902",
                  fontWeight: "bold",
                  display: "flex",
                  justifyContent: "center",
                  fontFamily:"Sora"
                }}
              >
              
                <CountUp delay={2} start={379} end={389} duration={2.75} />
              </Typography>
              <Typography
                sx={!isMobile?{
                  color: "#4A2902",
                  display: "flex",
                  justifyContent: "center",
                  fontFamily:"Sora"
                }:{
                  color: "#4A2902",
                  display: "flex",
                    justifyContent: "center",
                  fontSize:"12px",
                  my:2,
                  fontWeight:"bold",
                  fontFamily:"Sora"
                }}
              >
                Clients
              </Typography>
            </Container>
          </Grid>
          <Grid item md={3} sm={6} xs={6}>
            <Container
              sx={!isMobile?{
                display: "flex",
                flexDirection: "column",
              }:{
                // marginLeft:"10px"
              }}
            >
              <Typography
                variant="h3"
                sx={{
                  color: "#4A2902",
                  fontWeight: "bold",
                  display: "flex",
                  justifyContent: "center",
                  fontFamily:"Sora"
                }}
              >
                     <CountUp delay={2} start={19} end={29} duration={2.75} />
              </Typography>
              <Typography
                sx={!isMobile?{
                  color: "#4A2902",
                  display: "flex",
                  justifyContent: "center",
                  fontFamily:"Sora"
                }:{
                  color: "#4A2902",
                  display: "flex",
                    justifyContent: "center",
                  fontSize:"12px",
                  my:2,
                  fontFamily:"Sora",
                  fontWeight:"bold"
                }}
              >
                People Visiting
              </Typography>
            </Container>
          </Grid>
          <Grid item md={3} sm={6} xs={6}>
            <Container
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="h3"
                sx={!isMobile?{
                  color: "#4A2902",
                  fontWeight: "bold",
                  display: "flex",
                  justifyContent: "center",
                  fontFamily:"Sora"
                }:{
                  color: "#4A2902",
                  fontWeight: "bold",
                  display: "flex",
                  justifyContent: "center",
                  mx:3,
                  fontFamily:"Sora"
                }}
              >
                  <CountUp delay={2} start={30} end={40} duration={2.75} />
              </Typography>
              <Typography
                sx={!isMobile?{
                  color: "#4A2902",
                  display: "flex",
                  justifyContent: "center",
                  fontFamily:"Sora"
                }:{
                  color: "#4A2902",
                  display: "flex",
                    justifyContent: "center",
                  fontSize:"12px",
                  my:2,
                  fontWeight:"bold",
                  fontFamily:"Sora"
                }}
              >
                Queries Solved
              </Typography>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default AboutUs;
