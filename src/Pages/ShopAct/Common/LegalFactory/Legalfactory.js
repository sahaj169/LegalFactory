import React from "react";

import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

import Bullet from "../../../../Assets/Images/bullet.svg";

const Legalfactory = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isRange = useMediaQuery(theme.breakpoints.between("md", "lg"));

  return (
    <Grid
      container
      direction='column'
      sx={
        !(isMobile || isTablet)
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
          Why LEGAL FACTORY ?
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          sx={
            !(isMobile || isTablet) && !isRange
              ? {
                  marginTop: '49px',
                  fontSize: '18px',
                  fontWeight: '500',
                  marginRight: '280px',
                  fontFamily: 'Sora',
                }
              : isRange
              ? {
                  marginTop: '49px',
                  fontSize: '15px',
                  fontWeight: '500',

                  fontFamily: 'Sora',
                }
              : {
                  marginTop: '19px',
                  fontSize: '12px',
                  fontWeight: '500',
                  // marginRight: "280px",
                  fontFamily: 'Sora',
                }
          }
        >
          LEGAL FACTORY, saves you from going through the long tedious process
          of delivering and handling every aspect of the registration. We simply
          do it for you with minimum efforts from your side, so you can focus on
          your business and leave the legalities for us to handle.
        </Typography>
      </Grid>
      <Grid item>
        <Typography
          sx={
            !(isMobile || isTablet) && !isRange
              ? {
                  marginTop: '30px',
                  fontSize: '15px',
                  fontWeight: '500',
                  marginRight: '280px',
                  color: '#773106',
                  fontFamily: 'Sora',
                }
              : isRange
              ? {
                  marginTop: '30px',
                  fontSize: '15px',
                  fontWeight: '500',

                  color: '#773106',
                  fontFamily: 'Sora',
                }
              : {
                  marginTop: '19px',
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
          We take care of all the paperwork ensuring an interactive process with
          the government.
        </Typography>
        <Typography
          sx={
            !(isMobile || isTablet) && !isRange
              ? {
                  marginTop: '30px',
                  fontSize: '15px',
                  fontWeight: '500',
                  marginRight: '280px',
                  color: '#773106',
                  fontFamily: 'Sora',
                }
              : isRange
              ? {
                  marginTop: '30px',
                  fontSize: '15px',
                  fontWeight: '500',

                  color: '#773106',
                  fontFamily: 'Sora',
                }
              : {
                  marginTop: '19px',
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
          100% transparency on the incorporation process to give you a realistic
          expectations.
        </Typography>
        <Typography
          sx={
            !(isMobile || isTablet) && !isRange
              ? {
                  marginTop: '30px',
                  fontSize: '15px',
                  fontWeight: '500',
                  marginRight: '280px',
                  color: '#773106',
                  fontFamily: 'Sora',
                }
              : isRange
              ? {
                  marginTop: '30px',
                  fontSize: '15px',
                  fontWeight: '500',

                  color: '#773106',
                  fontFamily: 'Sora',
                }
              : {
                  marginTop: '19px',
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
          We connect you with reliable professionals, with whom you can work to
          fulfill all your legal requirements.
        </Typography>
        <Typography
          sx={
            !(isMobile || isTablet) && !isRange
              ? {
                  marginTop: '30px',
                  fontSize: '15px',
                  fontWeight: '500',
                  marginRight: '280px',
                  color: '#773106',
                  fontFamily: 'Sora',
                }
              : isRange
              ? {
                  marginTop: '30px',
                  fontSize: '15px',
                  fontWeight: '500',

                  color: '#773106',
                  fontFamily: 'Sora',
                }
              : {
                  marginTop: '19px',
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
          With an every growing family of experienced business advisors, we
          offer 24/7 support.
        </Typography>
        <Typography
          sx={
            !(isMobile || isTablet) && !isRange
              ? {
                  marginTop: '30px',
                  fontSize: '15px',
                  fontWeight: '500',
                  marginRight: '280px',
                  color: '#773106',
                  fontFamily: 'Sora',
                }
              : isRange
              ? {
                  marginTop: '30px',
                  fontSize: '15px',
                  fontWeight: '500',

                  color: '#773106',
                  fontFamily: 'Sora',
                }
              : {
                  marginTop: '19px',
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
          100% Privacy Guaranteed. All the confidential data or personal data
          of our customers is strictly confined and not accessible without
          permission.
        </Typography>
      </Grid>
    </Grid>
  )
};

export default Legalfactory;
