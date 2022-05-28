import React from "react";

import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import Bullet from "../../../../Assets/Images/bullet.svg";
import Advantages from "../../../../Assets/Images/nc4.png"

const Advantage = () => {
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
          ? { marginTop: '59px' }
          : { marginTop: '39px', width: '130%' }
      }
    >
      <Grid item sx={!(isMobile || isTablet) && { marginLeft: '20px' }}>
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
          Advantages of Registering A NIdhi Company
        </Typography>
      </Grid>

      <Grid item sx={!(isMobile || isTablet) && { marginLeft: '20px' }}>
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
          FORMATION PROCESS IS SERENE AND UNCOMPLICATED: The registration
          process of Nidhi Company offers freedom from the complex documentation
          processes throughout the procedure, moreover the registration process
          gets terminated in 10-14 days.
        </Typography>
        <Typography
          sx={
            !(isMobile || isTablet) && !isRange
              ? {
                  marginTop: '20px',
                  fontSize: '15px',
                  fontWeight: '500',
                  marginRight: '280px',
                  color: '#773106',
                  fontFamily: 'Sora',
                }
              : isRange
              ? {
                  marginTop: '20px',
                  fontSize: '15px',
                  fontWeight: '500',
                  // marginRight: "280px",
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
          LIMITED LIABILITY: This proves to be the greatest benefit of running a
          Nidhi Company in the sense that the government, bank or creditors
          cannot seize the personal assets of shareholders or even the
          directors.
        </Typography>

        <Typography
          sx={
            !(isMobile || isTablet) && !isRange
              ? {
                  marginTop: '20px',
                  fontSize: '15px',
                  fontWeight: '500',
                  marginRight: '280px',
                  color: '#773106',
                  fontFamily: 'Sora',
                }
              : isRange
              ? {
                  marginTop: '20px',
                  fontSize: '15px',
                  fontWeight: '500',
                  // marginRight: "280px",
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
          HIGH CERTAINTY VALUE: The principle of saving is deeply rooted in the
          incorporation and functioning process of Nidhi Company thereby
          resulting in a very high certainty.
        </Typography>
        <Typography
          sx={
            !(isMobile || isTablet) && !isRange
              ? {
                  marginTop: '20px',
                  fontSize: '15px',
                  fontWeight: '500',
                  marginRight: '280px',
                  color: '#773106',
                  fontFamily: 'Sora',
                }
              : isRange
              ? {
                  marginTop: '20px',
                  fontSize: '15px',
                  fontWeight: '500',
                  // marginRight: "280px",
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
          FEW GUIDELINES/ LESS RBI INTERFERENCE: The governance of Nidhi
          Companies come under the Nidhi Rules, 2014. The Nidhi Company is in
          the hands of the Central Government; RBI cannot create obstacles or
          govern the operations of a Nidhi Company.
        </Typography>
        <Typography
          sx={
            !(isMobile || isTablet) && !isRange
              ? {
                  marginTop: '20px',
                  fontSize: '15px',
                  fontWeight: '500',
                  marginRight: '280px',
                  color: '#773106',
                  fontFamily: 'Sora',
                }
              : isRange
              ? {
                  marginTop: '20px',
                  fontSize: '15px',
                  fontWeight: '500',
                  // marginRight: "280px",
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
          SEPARATE LEGAL ENTITY: As it is a separate legal entity from its
          shareholders and directors, it can own property and incur debts on its
          name, sue anybody, sue anybody or be sued by others.
        </Typography>
        <Typography
          sx={
            !(isMobile || isTablet) && !isRange
              ? {
                  marginTop: '20px',
                  fontSize: '15px',
                  fontWeight: '500',
                  marginRight: '280px',
                  color: '#773106',
                  fontFamily: 'Sora',
                }
              : isRange
              ? {
                  marginTop: '20px',
                  fontSize: '15px',
                  fontWeight: '500',
                  // marginRight: "280px",
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
          PERPETUAL EXISTENCE: This is one of the most sought off benefits/
          prime benefits of Nidhi Company. Death or departure of any member
          won't affect the Nidhi Company and it will incessantly survive till
          its legal dissolution.
        </Typography>
      </Grid>
      <Grid
        container
        sx={
          !(isMobile || isTablet)
            ? {
                marginTop: '70px',
                justifyContent: 'center',
                marginBottom: '50px',
              }
            : { display: 'none' }
        }
      >
        <img src={Advantages} alt='sp6' width='60%' height='60%' style={{}} />
      </Grid>
    </Grid>
  )
};

export default Advantage;
