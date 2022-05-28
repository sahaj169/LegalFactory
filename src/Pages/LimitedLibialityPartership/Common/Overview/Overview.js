import React from "react";
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
        direction="column"
        sx={
          !(isMobile || isTablet)
            ? { marginLeft: "20px", marginTop: "59px" }
            : {
                width: "130%",
              }
        }
      >
        <Grid item>
          <Typography
            sx={
              !(isMobile || isTablet) && !isRange
                ? {
                    color: "#E99101",
                    fontSize: "26px",
                    fontWeight: "600",
                    fontFamily: "Sora",
                  }
                : isRange
                ? {
                    color: "#E99101",
                    fontSize: "24px",
                    fontWeight: "600",
                    fontFamily: "Sora",
                  }
                : {
                    color: "#E99101",
                    fontSize: "16px",
                    fontWeight: "600",
                    fontFamily: "Sora",
                    width: "100%",
                  }
            }
          >
            What is Limited Liability Partnership?
          </Typography>
        </Grid>
        <Grid item>
          <Typography
            sx={
              !(isMobile || isTablet) && !isRange
                ? {
                    marginTop: "30px",
                    fontSize: "18px",
                    fontWeight: "500",
                    marginRight: "280px",
                    fontFamily: "Sora",
                  }
                : isRange
                ? {
                    marginTop: "30px",
                    fontSize: "15px",
                    fontWeight: "500",
                    // marginRight: "280px",
                    fontFamily: "Sora",
                  }
                : {
                    marginTop: "19px",
                    fontSize: "12px",
                    fontWeight: "500",
                    // marginRight: "100px",
                    fontFamily: "Sora",
                  }
            }
          >
            LLP is an upcoming most famous preferred type of organisation with
            the benefit of Partnership Firm and Limited Liability Company, two
            birds with one stone. This Act was initiated in 2008 in India. A
            minimum number of two partners are required to incorporate an LLP
            with no maximum limit, and at least one of those partners should be
            an Indian resident. The key feature behind such organisation is easy
            maintenance and limited liability to the owners.
          </Typography>
        </Grid>
        
      </Grid>
      {/* <Grid
        container
        sx={
          {}
          // !(isTablet || isMobile) && !isRange ? { marginTop: "50px" } : isRange? {display:"none"}: { display: "none" }
        }
      >
        <img
          src={Image3}
          alt="plstrip"
          height="100%"
          width="100%"
          style={{ marginTop: "30px" }}
        />
      </Grid> */}
      
    </>
  );
};

export default Overview;
