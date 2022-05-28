import React from 'react'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

import Bullet from '../../../../Assets/Images/bullet.svg'

const Faq = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const isTablet = useMediaQuery(theme.breakpoints.down('md'))
  const isRange = useMediaQuery(theme.breakpoints.between('md', 'lg'))

  return (
    <Grid
      container
      direction='column'
      sx={
        !(isMobile || isTablet) && !isRange
          ? { marginLeft: '20px', marginTop: '59px' }
          : { marginTop: '39px', width: '130%' }
      }
    >
      <Grid item>
        <Typography
          sx={
            !(isMobile || isTablet) && !isRange
              ? {
                  color: '#E99101',
                  fontSize: '26px',
                  fontWeight: '600',
                  fontFamily: 'Sora',
                }
              : isRange
              ? {
                  color: '#E99101',
                  fontSize: '24px',
                  fontWeight: '600',
                  fontFamily: 'Sora',
                }
              : {
                  color: '#E99101',
                  fontSize: '16px',
                  fontWeight: '600',
                  fontFamily: 'Sora',
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
            ? { marginTop: '25px' }
            : { marginTop: '20px' }
        }
      >
        <Accordion
          sx={
            !(isMobile || isTablet) && !isRange
              ? { width: '75%', boxShadow: 'none', marginLeft: '-13px' }
              : isRange
              ? {
                  width: '100%',
                  boxShadow: 'none',
                  marginLeft: '-13px',
                }
              : { width: '100%', boxShadow: 'none', marginLeft: '-13px' }
          }
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography
              sx={
                !(isMobile || isTablet) && !isRange
                  ? {
                      fontSize: '15px',
                      fontWeight: '500',
                      marginRight: '280px',
                      color: '#773106',
                      fontFamily: 'Sora',
                      marginTop: '0px',
                    }
                  : isRange
                  ? {
                      fontSize: '15px',
                      fontWeight: '500',

                      color: '#773106',
                      fontFamily: 'Sora',
                      marginTop: '0px',
                    }
                  : {
                      fontSize: '10px',
                      fontWeight: '500',
                      // marginRight: "280px",
                      color: '#773106',
                      fontFamily: 'Sora',
                    }
              }
            >
              <img
                src={Bullet}
                alt='Bullet'
                style={
                  !(isMobile || isTablet)
                    ? { marginRight: '15px' }
                    : { height: '7px', width: '7px', marginRight: '10px' }
                }
              />
              Do I need to be Physically present for the process?
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{ background: 'rgba(233, 148, 16, 0.17)', boxShadow: 'none' }}
          >
            <Typography
              sx={
                !(isMobile || isTablet) && !isRange
                  ? {
                      fontSize: '15px',
                      fontWeight: '500',
                      marginRight: '280px',
                      color: '#773106',
                      fontFamily: 'Sora',
                    }
                  : isRange
                  ? {
                      fontSize: '15px',
                      fontWeight: '500',

                      color: '#773106',
                      fontFamily: 'Sora',
                    }
                  : {
                      fontSize: '10px',
                      fontWeight: '500',
                      // marginRight: "280px",
                      color: '#773106',
                      fontFamily: 'Sora',
                    }
              }
            >
              No, the entire process is online and thus no physical presence is
              required.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>
      <Grid item sx={!(isMobile || isTablet) && { marginTop: "-20px" }}>
        <Accordion
          sx={
            !(isMobile || isTablet) && !isRange
              ? { width: '75%', boxShadow: 'none', marginLeft: '-13px' }
              : isRange
              ? {
                  width: '100%',
                  boxShadow: 'none',
                  marginLeft: '-13px',
                }
              : { width: '100%', boxShadow: 'none', marginLeft: '-13px' }
          }
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography
              sx={
                !(isMobile || isTablet) && !isRange
                  ? {
                      fontSize: '15px',
                      fontWeight: '500',
                      marginRight: '280px',
                      color: '#773106',
                      fontFamily: 'Sora',
                      marginTop: '0px',
                    }
                  : isRange
                  ? {
                      fontSize: '15px',
                      fontWeight: '500',

                      color: '#773106',
                      fontFamily: 'Sora',
                      marginTop: '0px',
                    }
                  : {
                      fontSize: '10px',
                      fontWeight: '500',
                      // marginRight: "280px",
                      color: '#773106',
                      fontFamily: 'Sora',
                    }
              }
            >
              <img
                src={Bullet}
                alt='Bullet'
                style={
                  !(isMobile || isTablet)
                    ? { marginRight: '15px' }
                    : { height: '7px', width: '7px', marginRight: '10px' }
                }
              />
              What is the timeline for the entire process?
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{ background: 'rgba(233, 148, 16, 0.17)', boxShadow: 'none' }}
          >
            <Typography
              sx={
                !(isMobile || isTablet) && !isRange
                  ? {
                      fontSize: '15px',
                      fontWeight: '500',
                      marginRight: '280px',
                      color: '#773106',
                      fontFamily: 'Sora',
                    }
                  : isRange
                  ? {
                      fontSize: '15px',
                      fontWeight: '500',

                      color: '#773106',
                      fontFamily: 'Sora',
                    }
                  : {
                      fontSize: '10px',
                      fontWeight: '500',
                      // marginRight: "280px",
                      color: '#773106',
                      fontFamily: 'Sora',
                    }
              }
            >
              The legal Factory team shall assist in filing of all the
              documents, once the verification of your documents is complete it
              shall take a minimum of 15 days to receive the Certificate offline
              but in case of online it takes upto 3 days in some stated for you
              to receive your certificate.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>
      <Grid item>
        <Accordion
          sx={
            !(isMobile || isTablet) && !isRange
              ? { width: '75%', boxShadow: 'none', marginLeft: '-13px' }
              : isRange
              ? {
                  width: '100%',
                  boxShadow: 'none',
                  marginLeft: '-13px',
                }
              : { width: '100%', boxShadow: 'none', marginLeft: '-13px' }
          }
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography
              sx={
                !(isMobile || isTablet) && !isRange
                  ? {
                      fontSize: '15px',
                      fontWeight: '500',
                      marginRight: '280px',
                      color: '#773106',
                      fontFamily: 'Sora',
                      marginTop: '0px',
                    }
                  : isRange
                  ? {
                      fontSize: '15px',
                      fontWeight: '500',

                      color: '#773106',
                      fontFamily: 'Sora',
                      marginTop: '0px',
                    }
                  : {
                      fontSize: '10px',
                      fontWeight: '500',
                      // marginRight: "280px",
                      color: '#773106',
                      fontFamily: 'Sora',
                    }
              }
            >
              <img
                src={Bullet}
                alt='Bullet'
                style={
                  !(isMobile || isTablet)
                    ? { marginRight: '15px' }
                    : { height: '7px', width: '7px', marginRight: '10px' }
                }
              />
              When is a license under the Shops and Establishments Act required?
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{ background: 'rgba(233, 148, 16, 0.17)', boxShadow: 'none' }}
          >
            <Typography
              sx={
                !(isMobile || isTablet) && !isRange
                  ? {
                      fontSize: '15px',
                      fontWeight: '500',
                      marginRight: '280px',
                      color: '#773106',
                      fontFamily: 'Sora',
                    }
                  : isRange
                  ? {
                      fontSize: '15px',
                      fontWeight: '500',

                      color: '#773106',
                      fontFamily: 'Sora',
                    }
                  : {
                      fontSize: '10px',
                      fontWeight: '500',
                      // marginRight: "280px",
                      color: '#773106',
                      fontFamily: 'Sora',
                    }
              }
            >
              Every commercial establishment is required to register under this
              Act within 30 days of commencement of work. This is often required
              as a proof of business like while opening a current account in a
              bank.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>
      <Grid item>
        <Accordion
          sx={
            !(isMobile || isTablet) && !isRange
              ? { width: '75%', boxShadow: 'none', marginLeft: '-13px' }
              : isRange
              ? {
                  width: '100%',
                  boxShadow: 'none',
                  marginLeft: '-13px',
                }
              : { width: '100%', boxShadow: 'none', marginLeft: '-13px' }
          }
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography
              sx={
                !(isMobile || isTablet) && !isRange
                  ? {
                      fontSize: '15px',
                      fontWeight: '500',
                      marginRight: '280px',
                      color: '#773106',
                      fontFamily: 'Sora',
                      marginTop: '0px',
                    }
                  : isRange
                  ? {
                      fontSize: '15px',
                      fontWeight: '500',

                      color: '#773106',
                      fontFamily: 'Sora',
                      marginTop: '0px',
                    }
                  : {
                      fontSize: '10px',
                      fontWeight: '500',
                      // marginRight: "280px",
                      color: '#773106',
                      fontFamily: 'Sora',
                    }
              }
            >
              <img
                src={Bullet}
                alt='Bullet'
                style={
                  !(isMobile || isTablet)
                    ? { marginRight: '15px' }
                    : { height: '7px', width: '7px', marginRight: '10px' }
                }
              />
              What is the eligibility for getting a shops & establishments
              license?
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{ background: 'rgba(233, 148, 16, 0.17)', boxShadow: 'none' }}
          >
            <Typography
              sx={
                !(isMobile || isTablet) && !isRange
                  ? {
                      fontSize: '15px',
                      fontWeight: '500',
                      marginRight: '280px',
                      color: '#773106',
                      fontFamily: 'Sora',
                    }
                  : isRange
                  ? {
                      fontSize: '15px',
                      fontWeight: '500',

                      color: '#773106',
                      fontFamily: 'Sora',
                    }
                  : {
                      fontSize: '10px',
                      fontWeight: '500',
                      // marginRight: "280px",
                      color: '#773106',
                      fontFamily: 'Sora',
                    }
              }
            >
              There are two major pre-requisites for one to be able to become
              the applicant of trade shops and establishment license, they are:
              {<br />}
              1. The person must have attained the age of 18 years and
              {<br />}
              2. They must not have any criminal records in their name.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Grid>
      <Grid item sx={!(isMobile || isTablet) && { marginTop: '0px' }}>
        <Accordion
          sx={
            !(isMobile || isTablet) && !isRange
              ? { width: '75%', boxShadow: 'none', marginLeft: '-13px' }
              : isRange
              ? {
                  width: '100%',
                  boxShadow: 'none',
                  marginLeft: '-13px',
                }
              : { width: '100%', boxShadow: 'none', marginLeft: '-13px' }
          }
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
            sx={{
              marginBottom: '8px',
              marginTop: '8px',
            }}
          >
            <Typography
              sx={
                !(isMobile || isTablet) && !isRange
                  ? {
                      fontSize: '15px',
                      fontWeight: '500',
                      marginRight: '280px',
                      color: '#773106',
                      fontFamily: 'Sora',
                      marginTop: '0px',
                    }
                  : isRange
                  ? {
                      fontSize: '15px',
                      fontWeight: '500',

                      color: '#773106',
                      fontFamily: 'Sora',
                      marginTop: '0px',
                    }
                  : {
                      fontSize: '10px',
                      fontWeight: '500',
                      // marginRight: "280px",
                      color: '#773106',
                      fontFamily: 'Sora',
                    }
              }
            >
              <img
                src={Bullet}
                alt='Bullet'
                style={
                  !(isMobile || isTablet)
                    ? { marginRight: '15px' }
                    : { height: '7px', width: '7px', marginRight: '10px' }
                }
              />
              Whom Shop Act Application is Applicable?
            </Typography>
          </AccordionSummary>
          <AccordionDetails
            sx={{ background: 'rgba(233, 148, 16, 0.17)', boxShadow: 'none' }}
          >
            <Typography
              sx={
                !(isMobile || isTablet) && !isRange
                  ? {
                      fontSize: '15px',
                      fontWeight: '500',
                      marginRight: '280px',
                      color: '#773106',
                      fontFamily: 'Sora',
                    }
                  : isRange
                  ? {
                      fontSize: '15px',
                      fontWeight: '500',

                      color: '#773106',
                      fontFamily: 'Sora',
                    }
                  : {
                      fontSize: '10px',
                      fontWeight: '500',
                      // marginRight: "280px",
                      color: '#773106',
                      fontFamily: 'Sora',
                    }
              }
            >
              Shops Act Application is mandatory in some cases for businesses,
              as long as they qualify as an “Establishment” under the Shops and
              Establishment Act. So if you run a business in Maharashtra, you
              need to obtain Shop Act License under Bombay Shops and
              Establishments Act, 2018.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Grid> 
    </Grid>
  )
}

export default Faq
