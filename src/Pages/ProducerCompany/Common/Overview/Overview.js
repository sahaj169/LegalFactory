import React from "react";
import Reading from "../../../../Assets/Images/pc3.png";
import PCTypes from "../../../../Assets/Images/pcTypes.png"

import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

const Overview = (props) => {
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
            What is Producer Company?
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
            India is an agricultural country whose 60% economy is governed by
            agriculture. But these primary producers & farmers struggle hard to
            get their share of profit. Thereby Producer company was introduced
            with the arrival of Companies Act,2013. A Producer company is
            basically for agro based businesses supportive to marginal and small
            scale farmers, registered with the Ministry of Corporate
            Affairs(MCA) wherein 10 committee members along with 2 institutions
            make up the entire producer company. It can only have equity
            capital, require a minimum of 5 directors and an authorized capital
            of 5 lakh. The procedure to form a Producer company resembles that
            of a private limited company.
          </Typography>
        </Grid>

        <Grid item id='Categories'>
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
            Categories of Producer Company
          </Typography>
        </Grid>

        <Grid item sx={{}}>
          <Typography
            sx={
              !(isMobile || isTablet) && !isRange
                ? {
                    fontSize: '19px',
                    fontWeight: '600',
                    marginTop: '30px',
                    color: '#703C00',
                    fontFamily: 'Sora',
                  }
                : isRange
                ? {
                    fontSize: '17px',
                    fontWeight: '600',
                    marginTop: '30px',
                    color: '#703C00',
                    fontFamily: 'Sora',
                  }
                : {
                    fontSize: '13px',
                    fontWeight: '600',
                    marginTop: '19px',
                    color: '#703C00',
                    fontFamily: 'Sora',
                  }
            }
          >
            PRODUCTION BUSINESSES:
          </Typography>
          <Typography
            sx={
              !(isMobile || isTablet) && !isRange
                ? {
                    marginTop: '20px',
                    fontSize: '18px',
                    fontWeight: '500',
                    marginRight: '280px',
                    fontFamily: 'Sora',
                  }
                : isRange
                ? {
                    marginTop: '20px',
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
            The main functions of producer companies comprises production,
            procurement or manufacture of any primary produce for its
            members(for further sale) and to others.
          </Typography>
        </Grid>

        <Grid item sx={{}}>
          <Typography
            sx={
              !(isMobile || isTablet) && !isRange
                ? {
                    fontSize: '19px',
                    fontWeight: '600',
                    marginTop: '30px',
                    color: '#703C00',
                    fontFamily: 'Sora',
                  }
                : isRange
                ? {
                    fontSize: '17px',
                    fontWeight: '600',
                    marginTop: '30px',
                    color: '#703C00',
                    fontFamily: 'Sora',
                  }
                : {
                    fontSize: '13px',
                    fontWeight: '600',
                    marginTop: '19px',
                    color: '#703C00',
                    fontFamily: 'Sora',
                  }
            }
          >
            MARKETING BUSINESSES:
          </Typography>
          <Typography
            sx={
              !(isMobile || isTablet) && !isRange
                ? {
                    marginTop: '20px',
                    fontSize: '18px',
                    fontWeight: '500',
                    marginRight: '280px',
                    fontFamily: 'Sora',
                  }
                : isRange
                ? {
                    marginTop: '20px',
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
            Even a business involved in the marketing or promotion of primary
            produce or provision of educational services to members and others
            can constitute itself as a producer company.
          </Typography>
        </Grid>

        <Grid item sx={{}}>
          <Typography
            sx={
              !(isMobile || isTablet) && !isRange
                ? {
                    fontSize: '19px',
                    fontWeight: '600',
                    marginTop: '30px',
                    color: '#703C00',
                    fontFamily: 'Sora',
                  }
                : isRange
                ? {
                    fontSize: '17px',
                    fontWeight: '600',
                    marginTop: '30px',
                    color: '#703C00',
                    fontFamily: 'Sora',
                  }
                : {
                    fontSize: '13px',
                    fontWeight: '600',
                    marginTop: '19px',
                    color: '#703C00',
                    fontFamily: 'Sora',
                  }
            }
          >
            TECHNICAL SERVICE BUSINESSES:
          </Typography>
          <Typography
            sx={
              !(isMobile || isTablet) && !isRange
                ? {
                    marginTop: '20px',
                    fontSize: '18px',
                    fontWeight: '500',
                    marginRight: '280px',
                    fontFamily: 'Sora',
                  }
                : isRange
                ? {
                    marginTop: '20px',
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
            Any business offering technical assistance to producers, providing
            training & educational services or conducting research and
            development can register as a producer company.
          </Typography>
        </Grid>

        <Grid item sx={{}}>
          <Typography
            sx={
              !(isMobile || isTablet) && !isRange
                ? {
                    fontSize: '19px',
                    fontWeight: '600',
                    marginTop: '30px',
                    color: '#703C00',
                    fontFamily: 'Sora',
                  }
                : isRange
                ? {
                    fontSize: '17px',
                    fontWeight: '600',
                    marginTop: '30px',
                    color: '#703C00',
                    fontFamily: 'Sora',
                  }
                : {
                    fontSize: '13px',
                    fontWeight: '600',
                    marginTop: '19px',
                    color: '#703C00',
                    fontFamily: 'Sora',
                  }
            }
          >
            FINANCING BUSINESSES:
          </Typography>
          <Typography
            sx={
              !(isMobile || isTablet) && !isRange
                ? {
                    marginTop: '20px',
                    fontSize: '18px',
                    fontWeight: '500',
                    marginRight: '280px',
                    fontFamily: 'Sora',
                  }
                : isRange
                ? {
                    marginTop: '20px',
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
            Businesses that finance activities within the producer section,
            whether it’s the assembly , marketing or development domain, is
            eligible to register itself as a producer company.
          </Typography>
        </Grid>

        <Grid item sx={{}}>
          <Typography
            sx={
              !(isMobile || isTablet) && !isRange
                ? {
                    fontSize: '19px',
                    fontWeight: '600',
                    marginTop: '30px',
                    color: '#703C00',
                    fontFamily: 'Sora',
                  }
                : isRange
                ? {
                    fontSize: '17px',
                    fontWeight: '600',
                    marginTop: '30px',
                    color: '#703C00',
                    fontFamily: 'Sora',
                  }
                : {
                    fontSize: '13px',
                    fontWeight: '600',
                    marginTop: '19px',
                    color: '#703C00',
                    fontFamily: 'Sora',
                  }
            }
          >
            INFRASTRUCTURE BUSINESSES:
          </Typography>
          <Typography
            sx={
              !(isMobile || isTablet) && !isRange
                ? {
                    marginTop: '20px',
                    fontSize: '18px',
                    fontWeight: '500',
                    marginRight: '280px',
                    fontFamily: 'Sora',
                  }
                : isRange
                ? {
                    marginTop: '20px',
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
            Businesses that give infrastructure to the producers like
            electricity, water resources or land utilization along with
            irrigation techniques or consultations can register themselves as a
            producer company
          </Typography>
          <Grid
            container
            sx={
              !(isMobile || isTablet)
                ? { marginTop: '70px', justifyContent: 'center', marginBottom: '50px'}
                : { display: 'none' }
            }
          >
            <img src={PCTypes} alt='sp6' width='60%' height='60%' style={{}} />
            
          </Grid>
        </Grid>

        <div id='Advantages'>
          <Grid item>
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
              Advantages of a Producer Company
            </Typography>
          </Grid>
        </div>

        <Grid item sx={{}}>
          <Typography
            sx={
              !(isMobile || isTablet) && !isRange
                ? {
                    fontSize: '19px',
                    fontWeight: '600',
                    marginTop: '30px',
                    color: '#703C00',
                    fontFamily: 'Sora',
                  }
                : isRange
                ? {
                    fontSize: '17px',
                    fontWeight: '600',
                    marginTop: '30px',
                    color: '#703C00',
                    fontFamily: 'Sora',
                  }
                : {
                    fontSize: '13px',
                    fontWeight: '600',
                    marginTop: '19px',
                    color: '#703C00',
                    fontFamily: 'Sora',
                  }
            }
          >
            SEPARATE LEGAL ENTITY:
          </Typography>
          <Typography
            sx={
              !(isMobile || isTablet) && !isRange
                ? {
                    marginTop: '20px',
                    fontSize: '18px',
                    fontWeight: '500',
                    marginRight: '280px',
                    fontFamily: 'Sora',
                  }
                : isRange
                ? {
                    marginTop: '20px',
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
            In any Business there exists a risk of not being able to repay their
            liabilities. It is necessary evil. In the event that this occurs, an
            individual producer is personally liable for all the debts of the
            business. The members though, have unlimited liability as the
            company itself is an entity. Therefore, the amount lost would only
            be the one invested in the business; however, the personal property
            of the directors would be safe.
          </Typography>
        </Grid>

        <Grid item sx={{}}>
          <Typography
            sx={
              !(isMobile || isTablet) && !isRange
                ? {
                    fontSize: '19px',
                    fontWeight: '600',
                    marginTop: '30px',
                    color: '#703C00',
                    fontFamily: 'Sora',
                  }
                : isRange
                ? {
                    fontSize: '17px',
                    fontWeight: '600',
                    marginTop: '30px',
                    color: '#703C00',
                    fontFamily: 'Sora',
                  }
                : {
                    fontSize: '13px',
                    fontWeight: '600',
                    marginTop: '19px',
                    color: '#703C00',
                    fontFamily: 'Sora',
                  }
            }
          >
            ECONOMIC ADVANTAGES:
          </Typography>
          <Typography
            sx={
              !(isMobile || isTablet) && !isRange
                ? {
                    marginTop: '20px',
                    fontSize: '18px',
                    fontWeight: '500',
                    marginRight: '280px',
                    fontFamily: 'Sora',
                  }
                : isRange
                ? {
                    marginTop: '20px',
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
            Out of all the Indian farmers , only 15% own over two acres of land.
            The majority of them are, therefore, unable to unlock the advantages
            that come with economies of scale. However, with a producer company,
            multiple farmers can work as a collective and lower costs, reduce
            risk and even get access to better credit facilities. Hence,
            enabling them to do better planning and bargaining with buyers.
          </Typography>
        </Grid>

        <Grid item sx={{}}>
          <Typography
            sx={
              !(isMobile || isTablet) && !isRange
                ? {
                    fontSize: '19px',
                    fontWeight: '600',
                    marginTop: '30px',
                    color: '#703C00',
                    fontFamily: 'Sora',
                  }
                : isRange
                ? {
                    fontSize: '17px',
                    fontWeight: '600',
                    marginTop: '30px',
                    color: '#703C00',
                    fontFamily: 'Sora',
                  }
                : {
                    fontSize: '13px',
                    fontWeight: '600',
                    marginTop: '19px',
                    color: '#703C00',
                    fontFamily: 'Sora',
                  }
            }
          >
            FLEXIBLE MANAGEMENT:
          </Typography>
          <Typography
            sx={
              !(isMobile || isTablet) && !isRange
                ? {
                    marginTop: '20px',
                    fontSize: '18px',
                    fontWeight: '500',
                    marginRight: '280px',
                    fontFamily: 'Sora',
                  }
                : isRange
                ? {
                    marginTop: '20px',
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
            Instead of a single farmer that manages the entire business, work
            within the producer company can be divided between its directors. It
            is mainly managed by the Board of Management, who have a tenure of
            five years. The Producer company, also has a separate legal
            existence, which means that it isn't affected by the death of any of
            its members
          </Typography>
        </Grid>

        <Grid item sx={{}}>
          <Typography
            sx={
              !(isMobile || isTablet) && !isRange
                ? {
                    fontSize: '19px',
                    fontWeight: '600',
                    marginTop: '30px',
                    color: '#703C00',
                    fontFamily: 'Sora',
                  }
                : isRange
                ? {
                    fontSize: '17px',
                    fontWeight: '600',
                    marginTop: '30px',
                    color: '#703C00',
                    fontFamily: 'Sora',
                  }
                : {
                    fontSize: '13px',
                    fontWeight: '600',
                    marginTop: '19px',
                    color: '#703C00',
                    fontFamily: 'Sora',
                  }
            }
          >
            TAX EXCLUSION/EXEMPTION
          </Typography>
          <Typography
            sx={
              !(isMobile || isTablet) && !isRange
                ? {
                    marginTop: '20px',
                    fontSize: '18px',
                    fontWeight: '500',
                    marginRight: '280px',
                    fontFamily: 'Sora',
                  }
                : isRange
                ? {
                    marginTop: '20px',
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
            Any registered Producer Company can enjoy tax benefits like
            exemption from agricultural income under the section 10(1) of the
            income tax act, 1961. The exemption varies on the activities that
            the farmers carry out such as the agriculture income is 100%
            exempted from the income tax while the income that is earned from
            the production of green tea is 60% exempted as per the law.
          </Typography>
          <img
            src={Reading}
            alt='spstrip'
            height='100%'
            width='100%'
            style={{ marginTop: '30px' }}
          />
        </Grid>
      </Grid>
    </>
  )
};

export default Overview;
