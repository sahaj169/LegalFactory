import React from "react";
import Image3 from "../../../../Assets/Images/nc3.png";

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
            What is NIDHI COMPANY ?
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
            A Nidhi Company or a Mutual Benefit Finance Company is an NBFC(a
            Non-Banking Financing Company) which was registered under the
            Section 406 of Companies Act, 2013 for the sake of cheering the
            shareholders to invest within the company i.e. its a blessing in
            disguise for those who aspire to launch into loan &/or finance
            business wherein companies acquire from the members and confer to
            their members. And hence Nidhi Companies are widely known as Nidhi
            Banks. Regulated by the Ministry of Corporate Affairs, while the RBI
            monitors all its financial dealings.
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
            Nidhi Company activities fall under the ambit of RBI. In this
            category of NBFC, Directors are free from the shackles of
            eligibility norms of least qualification. A minimum of 7 members are
            required to start a Nidhi Company, out of which 3 must be the
            Directors of the company. It is mandatory/ binding to all Nidhi
            Companies to put Nidhi Ltd. at the end of their names at any cost.
            It is registered as a public company and should have “Nidhi Limited”
            as the last words of its name.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        sx={
          {}
          // !(isTablet || isMobile) && !isRange ? { marginTop: "50px" } : isRange? {display:"none"}: { display: "none" }
        }
      >
        <img
          src={Image3}
          alt='plstrip'
          height='100%'
          width='100%'
          style={{ marginTop: '30px' }}
        />
      </Grid>
      {/* <Grid
        container
        sx={
          {}
          // !(isTablet || isMobile) && !isRange ? { marginTop: "50px" } : isRange? {display:"none"}: { display: "none" }
        }
      >
        <img
          src={plstrip}
          alt="plstrip"
          height="100%"
          width="100%"
          style={{ marginTop: "30px" }}
        />
      </Grid> */}
    </>
  )
};

export default Overview;
