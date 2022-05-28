import React from "react";
import { Grid, Typography, useMediaQuery, useTheme } from "@mui/material";

const Register = () => {
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
          Legal Factory - Shop Act Registration process :
        </Typography>
      </Grid>
      <Grid item sx={!(isMobile || isTablet) && { marginLeft: '20px' }}>
        <Typography
          sx={
            !(isMobile || isTablet) && !isRange
              ? {
                  fontSize: '19px',
                  fontWeight: '600',
                  marginTop: '49px',
                  color: '#703C00',
                  fontFamily: 'Sora',
                }
              : isRange
              ? {
                  fontSize: '17px',
                  fontWeight: '600',
                  marginTop: '49px',
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
          Step - 1: Labour Department
        </Typography>
      </Grid>
      <Grid item sx={!(isMobile || isTablet) && { marginLeft: '20px' }}>
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
                  // marginRight: "280px",
                  fontFamily: 'Sora',
                }
          }
        >
          Every state's labour department has a website with an online
          registration form and instructions.After landing on the LDMS portal,
          click on “Establishment Registration” menu icon. Click on “Rajasthan
          Shops and Commercial Establishments Act, 1958”.
        </Typography>
      </Grid>
      <Grid item sx={!(isMobile || isTablet) && { marginLeft: '20px' }}>
        <Typography
          sx={
            !(isMobile || isTablet) && !isRange
              ? {
                  fontSize: '19px',
                  fontWeight: '600',
                  marginTop: '49px',
                  color: '#703C00',
                  fontFamily: 'Sora',
                }
              : isRange
              ? {
                  fontSize: '17px',
                  fontWeight: '600',
                  marginTop: '49px',
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
          Step -2 : Filling/Submitting the Application
        </Typography>
      </Grid>
      <Grid item sx={!(isMobile || isTablet) && { marginLeft: '20px' }}>
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
                  // marginRight: "280px",
                  fontFamily: 'Sora',
                }
          }
        >
          Form will appear in the right pane, fill the form and attach
          appropriate documents. After completing the above instructions, submit
          the form and LDMS application number will be generated. Before the
          submission you might be required to pay the general fee depending on
          the type of company and the type of licence. Many states have an
          online payment option, but DD/cash payments may also be made offline.
          {<br />}
          Keep it safe; it might be required later for retrieving information.
        </Typography>
      </Grid>
      <Grid item sx={!(isMobile || isTablet) && { marginLeft: '20px' }}>
        <Typography
          sx={
            !(isMobile || isTablet) && !isRange
              ? {
                  fontSize: '19px',
                  fontWeight: '600',
                  marginTop: '49px',
                  color: '#703C00',
                  fontFamily: 'Sora',
                }
              : isRange
              ? {
                  fontSize: '17px',
                  fontWeight: '600',
                  marginTop: '49px',
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
          Step -3 : Verification
        </Typography>
      </Grid>
      <Grid item sx={!(isMobile || isTablet) && { marginLeft: '20px' }}>
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
                  // marginRight: "280px",
                  fontFamily: 'Sora',
                }
          }
        >
          Your application is examined by the Labour Department and, if the
          application and attached documents are ok then you’ll get the
          acknowledgement message from the department on your registered mobile
          number and email. Otherwise they will appoint an inspection to verify
          the particulars you filled up and documents attached.
        </Typography>
      </Grid>
      <Grid item sx={!(isMobile || isTablet) && { marginLeft: '20px' }}>
        <Typography
          sx={
            !(isMobile || isTablet) && !isRange
              ? {
                  fontSize: '19px',
                  fontWeight: '600',
                  marginTop: '49px',
                  color: '#703C00',
                  fontFamily: 'Sora',
                }
              : isRange
              ? {
                  fontSize: '17px',
                  fontWeight: '600',
                  marginTop: '49px',
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
          Step -4: License
        </Typography>
      </Grid>
      <Grid item sx={!(isMobile || isTablet) && { marginLeft: '20px' }}>
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
                  // marginRight: "280px",
                  fontFamily: 'Sora',
                }
          }
        >
          After the verification, a valid license (certificate) is issued to
          you. This license is normally valid for one year with a renewal each
          year. You can download the certificate online.
          {<br />}
          In order to obtain the certificate offline, the registration
          application has to be filled and submitted directly to the Chief
          Inspector of the area along with the required fees. The Chief
          Inspector will then issue the registration certificate to the owner or
          proprietor after being satisfied with the correctness of the
          application.
        </Typography>
      </Grid>
    </Grid>
  )
};

export default Register;
