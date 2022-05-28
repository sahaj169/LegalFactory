import React, { useState } from "react";
import useStyles from "./styles";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Container, Typography,useMediaQuery,
  useTheme, } from "@mui/material";
import stargirl from "../../Assets/Images/stargirl.png";

const HomeCarousel = () => {
  const classes = useStyles()
  // eslint-disable-next-line
  const [next, setnext] = useState(false)
  const theme = useTheme()
  const isRange = useMediaQuery(theme.breakpoints.between('md', 'lg'))

  return (
    <div>
      <Container
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '3%',
        }}
      >
        <Typography
          variant='h4'
          sx={{
            display: 'flex',
            justifyContent: 'center',
            color: '#703C00',
            fontWeight: 'bold',
            fontSize: '50px',
            fontFamily: 'Sora',
            paddingTop: '50px',
            paddingBottom: '30px',
          }}
        >
          Customer Testimonials
        </Typography>
      </Container>
      <Carousel
        showArrows={next}
        showStatus={next}
        autoPlay={!next}
        infiniteLoop={!next}
        className={classes.carousel}
      >
        <Container
          sx={{
            height: 400,
            display: 'flex',
          }}
        >
          <Container
            sx={{
              display: 'flex',
              flexDirection: 'column',
              marginRight: '20px',
            }}
          >
            <Typography
              variant='h5'
              sx={{
                color: '#703C00',
                fontWeight: 'bolder',
                py: 5,
                fontSize: '30px',
                fontFamily: 'sora',
              }}
            >
              Aman Agarwal, Delhi
            </Typography>

            <Typography
              variant='h7'
              sx={{
                color: ' #703C0082',
                py: 2,
                fontSize: '20px',
                fontFamily: 'sora',
              }}
            >
              I applied for a personal loan from ICICI through Xpert Finance and
              I got my loan amount within 1 week. My documents got verified
              within 2 days and I got a welcome call from Xpert Finance after I
              applied for my loan. I had few queries about my loan scheme and
              the interest rate. The customer service agents were really helpful
              and quick in resolving my doubts.
            </Typography>
          </Container>
          <Container sx={isRange ? { display: 'none' } : {}}>
            <img
              style={{
                width: '400px',
                marginTop: '10px',
              }}
              src={stargirl}
              alt='stargirl'
            ></img>
          </Container>
        </Container>
        <Container
          sx={{
            height: 400,
            display: 'flex',
          }}
        >
          <Container
            sx={{
              display: 'flex',
              flexDirection: 'column',
              marginRight: '20px',
            }}
          >
            <Typography
              variant='h5'
              sx={{
                color: '#703C00',
                fontWeight: 'bolder',
                py: 5,
                fontFamily: 'Sora',
                fontSize: '30px',
              }}
            >
              Akshay Jain, Delhi
            </Typography>

            <Typography
              variant='h7'
              sx={{
                color: ' #703C0082',
                py: 2,
                fontSize: '20px',
                fontFamily: 'Sora',
              }}
            >
              I have been an avid investor on Mutual Funds for the last 10
              years. Xpert Finance's direct mutual funds is a great offering and
              the platform is extremely user-friendly. Best in Ajmer and
              Rajasthan region for mutual funds.
            </Typography>
          </Container>
          <Container sx={isRange ? { display: 'none' } : {}}>
            <img
              style={{
                width: '400px',
                marginTop: '10px',
              }}
              src={stargirl}
              alt='stargirl'
            ></img>
          </Container>
        </Container>
        <Container
          sx={{
            height: 400,
            display: 'flex',
          }}
        >
          <Container
            sx={{
              display: 'flex',
              flexDirection: 'column',
              marginRight: '20px',
            }}
          >
            <Typography
              variant='h5'
              sx={{
                color: '#703C00',
                fontWeight: 'bolder',
                py: 5,
                fontFamily: 'Sora',
                fontSize: '30px',
              }}
            >
              Deepak Jain, Pune
            </Typography>

            <Typography
              variant='h7'
              sx={{
                color: ' #703C0082',
                py: 2,
                fontFamily: 'Sora',
                fontSize: '20px',
              }}
            >
              Using ICICI Sapphiro card, I got 10,000 JP miles and jet airways
              tickets with my card. This was like wings to my passion for
              travelling. Thanks to Xpert Finance, Ajmer for helping me choose
              the best credit card for me
            </Typography>
          </Container>
          <Container sx={isRange ? { display: 'none' } : {}}>
            <img
              style={{
                width: '400px',
                marginTop: '10px',
              }}
              src={stargirl}
              alt='stargirl'
            ></img>
          </Container>
        </Container>
      </Carousel>
    </div>
  )
};

export default HomeCarousel;
