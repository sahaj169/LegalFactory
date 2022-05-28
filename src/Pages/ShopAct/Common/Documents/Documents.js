import React from "react";
import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import Bullet from "../../../../Assets/Images/bullet.svg";
const Documents = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isRange = useMediaQuery(theme.breakpoints.between("md", "lg"));

  return (
    <div>
      <>
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
              Basic Documents Required
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              sx={
                !(isMobile || isTablet) && !isRange
                  ? {
                      marginTop: '30px',
                      fontSize: '19px',
                      fontWeight: '500',
                      marginRight: '280px',
                      color: '#773106',
                      fontFamily: 'Sora',
                    }
                  : isRange
                  ? {
                      marginTop: '30px',
                      fontSize: '17px',
                      fontWeight: '500',

                      color: '#773106',
                      fontFamily: 'Sora',
                    }
                  : {
                      marginTop: '19px',
                      fontSize: '12px',
                      fontWeight: '500',
                      // marginRight: "280px",
                      color: '#773106',
                      fontFamily: 'Sora',
                    }
              }
            >
              DOCUMENTS TO BE UPLOADED
            </Typography>
            <Typography
              sx={
                !(isMobile || isTablet) && !isRange
                  ? {
                      marginTop: '30px',
                      fontSize: '19px',
                      fontWeight: '500',
                      marginRight: '280px',
                      color: 'black',
                      fontFamily: 'Sora',
                    }
                  : isRange
                  ? {
                      marginTop: '30px',
                      fontSize: '17px',
                      fontWeight: '500',

                      color: 'black',
                      fontFamily: 'Sora',
                    }
                  : {
                      marginTop: '19px',
                      fontSize: '12px',
                      fontWeight: '500',
                      // marginRight: "280px",
                      color: 'black',
                      fontFamily: 'Sora',
                    }
              }
            >
              NOTE: e-filing of application, e-payment, e-submission of document
              is mandatory, no hard copies required. Approved certificates are
              issued online
            </Typography>
            <Typography
              sx={
                !(isMobile || isTablet) && !isRange
                  ? {
                      marginLeft: '20px',
                      marginTop: '30px',
                      fontSize: '15px',
                      fontWeight: '500',
                      marginRight: '280px',
                      color: '#773106',
                      fontFamily: 'Sora',
                    }
                  : isRange
                  ? {
                      marginLeft: '20px',
                      marginTop: '30px',
                      fontSize: '15px',
                      fontWeight: '500',

                      color: '#773106',
                      fontFamily: 'Sora',
                    }
                  : {
                      // marginLeft: "20px",
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
              Passport size Photograph of Employer
            </Typography>
            <Typography
              sx={
                !(isMobile || isTablet) && !isRange
                  ? {
                      marginLeft: '20px',
                      marginTop: '30px',
                      fontSize: '15px',
                      fontWeight: '500',
                      marginRight: '280px',
                      color: '#773106',
                      fontFamily: 'Sora',
                    }
                  : isRange
                  ? {
                      marginLeft: '20px',
                      marginTop: '30px',
                      fontSize: '15px',
                      fontWeight: '500',

                      color: '#773106',
                      fontFamily: 'Sora',
                    }
                  : {
                      // marginLeft: "20px",
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
              Photo of shop along with owner
            </Typography>
            <Typography
              sx={
                !(isMobile || isTablet) && !isRange
                  ? {
                      marginLeft: '20px',
                      marginTop: '30px',
                      fontSize: '15px',
                      fontWeight: '500',
                      marginRight: '280px',
                      color: '#773106',
                      fontFamily: 'Sora',
                    }
                  : isRange
                  ? {
                      marginLeft: '20px',
                      marginTop: '30px',
                      fontSize: '15px',
                      fontWeight: '500',

                      color: '#773106',
                      fontFamily: 'Sora',
                    }
                  : {
                      // marginLeft: "20px",
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
              List of Management Employees(.xls format)
            </Typography>
            <Typography
              sx={
                !(isMobile || isTablet) && !isRange
                  ? {
                      marginLeft: '20px',
                      marginTop: '30px',
                      fontSize: '15px',
                      fontWeight: '500',
                      marginRight: '280px',
                      color: '#773106',
                      fontFamily: 'Sora',
                    }
                  : isRange
                  ? {
                      marginLeft: '20px',
                      marginTop: '30px',
                      fontSize: '15px',
                      fontWeight: '500',

                      color: '#773106',
                      fontFamily: 'Sora',
                    }
                  : {
                      // marginLeft: "20px",
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
              Rates of Wages(.xls format)
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              sx={
                !(isMobile || isTablet) && !isRange
                  ? {
                      marginLeft: '20px',
                      marginTop: '30px',
                      fontSize: '15px',
                      fontWeight: '500',
                      marginRight: '280px',
                      color: '#773106',
                      fontFamily: 'Sora',
                    }
                  : isRange
                  ? {
                      marginLeft: '20px',
                      marginTop: '30px',
                      fontSize: '15px',
                      fontWeight: '500',

                      color: '#773106',
                      fontFamily: 'Sora',
                    }
                  : {
                      // marginLeft: "20px",
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
              Details of Employees working in Establishment(.xls format)
            </Typography>
            <Typography
              sx={
                !(isMobile || isTablet) && !isRange
                  ? {
                      marginLeft: '20px',
                      marginTop: '30px',
                      fontSize: '15px',
                      fontWeight: '500',
                      marginRight: '280px',
                      color: '#773106',
                      fontFamily: 'Sora',
                    }
                  : isRange
                  ? {
                      marginLeft: '20px',
                      marginTop: '30px',
                      fontSize: '15px',
                      fontWeight: '500',

                      color: '#773106',
                      fontFamily: 'Sora',
                    }
                  : {
                      // marginLeft: "20px",
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
              Employee Weekly Holidays(.xls format)
            </Typography>
            <Typography
              sx={
                !(isMobile || isTablet) && !isRange
                  ? {
                      marginLeft: '20px',
                      marginTop: '30px',
                      fontSize: '15px',
                      fontWeight: '500',
                      marginRight: '280px',
                      color: '#773106',
                      fontFamily: 'Sora',
                    }
                  : isRange
                  ? {
                      marginLeft: '20px',
                      marginTop: '30px',
                      fontSize: '15px',
                      fontWeight: '500',

                      color: '#773106',
                      fontFamily: 'Sora',
                    }
                  : {
                      // marginLeft: "20px",
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
              Address proof of Establishment [Copy of shop’s rent agreement (if
              on rent) or Shop’s ownership document proof (if owner of shop)]
            </Typography>
            <Typography
              sx={
                !(isMobile || isTablet) && !isRange
                  ? {
                      marginLeft: '20px',
                      marginTop: '30px',
                      fontSize: '15px',
                      fontWeight: '500',
                      marginRight: '280px',
                      color: '#773106',
                      fontFamily: 'Sora',
                    }
                  : isRange
                  ? {
                      marginLeft: '20px',
                      marginTop: '30px',
                      fontSize: '15px',
                      fontWeight: '500',

                      color: '#773106',
                      fontFamily: 'Sora',
                    }
                  : {
                      // marginLeft: "20px",
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
              Affidavit (Declaration Form)
            </Typography>
            <Typography
              sx={
                !(isMobile || isTablet) && !isRange
                  ? {
                      marginLeft: '20px',
                      marginTop: '30px',
                      fontSize: '15px',
                      fontWeight: '500',
                      marginRight: '280px',
                      color: '#773106',
                      fontFamily: 'Sora',
                    }
                  : isRange
                  ? {
                      marginLeft: '20px',
                      marginTop: '30px',
                      fontSize: '15px',
                      fontWeight: '500',

                      color: '#773106',
                      fontFamily: 'Sora',
                    }
                  : {
                      // marginLeft: "20px",
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
              Photo ID (PAN Card/Driving License/Aadhar Card/Passport)
            </Typography>
          </Grid>
        </Grid>
      </>
    </div>
  )
};

export default Documents;
