import React from "react";
import Bullet from "../../../../Assets/Images/bullet.svg";
import Reading from "../../../../Assets/Images/sa1.png";
import Ltd from "../../../../Assets/Images/sa2.png";
import Discuss from "../../../../Assets/Images/sa3.png";

import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

const Overview = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isRange = useMediaQuery(theme.breakpoints.between("md", "lg"));

  return (
    <>
      <Grid
        container
        direction='column'
        sx={
          !(isMobile || isTablet)
            ? { marginLeft: '20px', marginTop: '59px' }
            : {
                width: '130%',
              }
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
                    width: '100%',
                  }
            }
          >
            What is Shop Act Registration ?
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            sx={
              !(isMobile || isTablet) && !isRange
                ? {
                    marginTop: '30px',
                    fontSize: '18px',
                    fontWeight: '500',
                    marginRight: '280px',
                    fontFamily: 'Sora',
                  }
                : isRange
                ? {
                    marginTop: '30px',
                    fontSize: '15px',
                    fontWeight: '500',
                    // marginRight: "280px",
                    fontFamily: 'Sora',
                  }
                : {
                    marginTop: '19px',
                    fontSize: '12px',
                    fontWeight: '500',
                    // marginRight: "100px",
                    fontFamily: 'Sora',
                  }
            }
          >
            The Labour Department of every state regulates the Shop &
            Establishment Act in their own state. And although the general
            provisions of the Act are the same in all states they differ
            slightly when states issue the registration under the Act. Shops
            coming under the Act are the ones where selling of the goods takes
            place either by retail or wholesale or where services are rendered
            to customers like every cafeteria, cinemas, restaurants, offices,
            etc places of entertainment or who have a connection with trade or
            business. The Shop and Establishment Act regulates the functioning
            of businesses wherein any trade is carried out. Not only does this
            apply to commercial establishments but also to charitable trusts,
            profit-run educational institutions.
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            sx={
              !(isMobile || isTablet) && !isRange
                ? {
                    color: 'black',
                    fontSize: '20px',
                    fontWeight: '600',
                    fontFamily: 'Sora',
                    marginTop: '40px',
                  }
                : isRange
                ? {
                    color: 'black',
                    fontSize: '18px',
                    fontWeight: '600',
                    fontFamily: 'Sora',
                  }
                : {
                    color: 'black',
                    fontSize: '10px',
                    fontWeight: '600',
                    fontFamily: 'Sora',
                    width: '100%',
                  }
            }
          >
            STATUTORY MEANING TO COMMERCIAL ESTABLISHMENTS
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            sx={
              !(isMobile || isTablet) && !isRange
                ? {
                    marginTop: '21px',
                    fontSize: '18px',
                    fontWeight: '500',
                    marginRight: '280px',
                    fontFamily: 'Sora',
                  }
                : isRange
                ? {
                    marginTop: '21px',
                    fontSize: '15px',
                    fontWeight: '500',
                    // marginRight: "280px",
                    fontFamily: 'Sora',
                  }
                : {
                    marginTop: '19px',

                    fontWeight: '500',
                    // marginRight: "100px",
                    fontFamily: 'Sora',
                    fontSize: '12px',
                  }
            }
          >
            Commercial establishments are generally defined as a commercial,
            banking, trading or insurance establishment or administrative
            service in which persons are employed for office work. It includes a
            hotel, boarding or eating house, restaurant, cafe, theatre, or other
            public entertainment or amusement places. However, factories and
            industries are not governed by the Act.
          </Typography>
        </Grid>
        <Grid item id='Advantages'>
          <Typography
            sx={
              !(isMobile || isTablet) && !isRange
                ? {
                    color: '#E99101',
                    fontSize: '26px',
                    fontWeight: '600',
                    fontFamily: 'Sora',
                    marginTop: '30px',
                  }
                : isRange
                ? {
                    color: '#E99101',
                    fontSize: '24px',
                    fontWeight: '600',
                    fontFamily: 'Sora',
                    marginTop: '30px',
                  }
                : {
                    color: '#E99101',
                    fontSize: '16px',
                    fontWeight: '600',
                    fontFamily: 'Sora',
                    width: '100%',
                    marginTop: '30px',
                  }
            }
          >
            Advantages Enjoyed by the businesses under Shop & Establishment Act
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            sx={
              !(isMobile || isTablet) && !isRange
                ? {
                    marginTop: '21px',
                    fontSize: '18px',
                    fontWeight: '500',
                    marginRight: '280px',
                    fontFamily: 'Sora',
                  }
                : isRange
                ? {
                    marginTop: '21px',
                    fontSize: '15px',
                    fontWeight: '500',
                    // marginRight: "280px",
                    fontFamily: 'Sora',
                  }
                : {
                    marginTop: '19px',

                    fontWeight: '500',
                    // marginRight: "100px",
                    fontFamily: 'Sora',
                    fontSize: '12px',
                  }
            }
          >
            The main purpose of the Shop and Establishment Act was to make sure
            that all employees get equal rights and benefits regardless of their
            workplace. And since it comes under the labour laws, it requires the
            owners to adhere to the rules and maintain a certain record of
            consistency whether it's the working hours of the business or the
            work environment, they have to keep in mind the national and
            religious leaves along with keeping a track record of the holiday
            wages.{<br />} Basic benefits include:
          </Typography>
        </Grid>
        <Grid item sx={!(isMobile || isTablet) && { marginLeft: '0px' }}>
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
            A legal entity proof for carrying on a trade, business or
            profession.
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
            It ensures a peace of mind for employer & employee about their
            safety in terms of health and financial status.
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
            Availing Government benefits that are provided from time to time
            only to those registered under this Act.
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
            Evidence for opening a current bank account for business purposes.
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
            It transforms into a legal entity that inherently solidifies the
            position of the business as a reliable contender in the market.
            Consequently, the establishment would start building trust with
            target customers which in turn helps it to cement its position in
            the market.
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
            It helps to resolve disputes emerging in a shop or establishment,
            in a legal manner.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        sx={
          !(isTablet || isMobile) && !isRange
            ? { marginTop: '50px' }
            : isRange
            ? { display: 'none' }
            : { display: 'none' }
        }
      >
        <Grid item xs={4}>
          {isRange ? (
            <img
              src={Reading}
              alt='Reading'
              height='100%'
              width='100%'
              style={{ marginLeft: '-30px' }}
            />
          ) : (
            <img
              src={Reading}
              alt='Reading'
              style={{ marginLeft: '15px', width: '100%', height: '100%' }}
            />
          )}
        </Grid>
        <Grid item xs={4}>
          {isRange ? (
            <img src={Ltd} alt='Reading' height='100%' width='100%' />
          ) : (
            <img
              src={Ltd}
              alt='Reading'
              style={{ marginLeft: '12px', width: '100%', height: '100%' }}
            />
          )}
        </Grid>
        <Grid item xs={4}>
          {isRange ? (
            <img src={Discuss} alt='Reading' height='100%' width='260%' />
          ) : (
            <img
              src={Discuss}
              alt='Reading'
              style={{ marginLeft: '12px', width: '90%', height: '100%' }}
            />
          )}
        </Grid>
      </Grid>
    </>
  )
};

export default Overview;
