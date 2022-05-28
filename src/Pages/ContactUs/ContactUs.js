import {
  Button,
  Card,
  CardMedia,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Box,
} from "@mui/material";
import React from "react";
import { Navbar } from "../../Components/Navbar/Navbar";
import useStyles from "./styles";
import laptopWoman from "../../Assets/Images/laptopWoman.png";
import PhoneIcon from "../../Assets/Images/PhoneIcon.jpg";
import Mail from "../../Assets/Images/mail.jpg";
import Pin from "../../Assets/Images/pin.jpg";
import Map from "../../Assets/Images/map.jpeg";
import Arrow from "../../Assets/Images/secondHeroRight.png";
import Footer from "../../Components/Footer/Footer";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { submitDetailsHome } from "../../Actions/GetInTouchForm";

const ContactUs = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isRange = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch();

  React.useEffect(() => {
    window.scrollTo(0,0) 
   }, [])

  const handleClose = () => {
    setOpen(false);
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validate = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(30, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    phoneNumber: Yup.string()
      .matches(phoneRegExp, "Phone number is not valid")
      .min(5, "Too Short!")
      .max(10, "Too Long!")
      .required("Required"),
    city: Yup.string()
      .min(2, "Too Short!")
      .max(20, "Too Long!")
      .required("Required"),
    query: Yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      city: "",
      query: "",
    },
    validationSchema: validate,
    onSubmit: (values) => {
      dispatch(
        submitDetailsHome({
          Name: values.name,
          Email: values.email,
          City: values.city,
          Phone: values.phoneNumber,
          Query: values.query,
          AgentCode: 0,
          GST: 0,
          EnquiryDate: new Date(),
          InvoiceNumber: 0,
          Invoice: "",
          LastModified: "",
          OTP: 0,
          OTPGenerated: "",
          OTPVerified: false,
          Password: "",
          PaymentLink: "",
          PaymentMode: "",
          ProfilePic: "",
          Service: "Contact",
          Source: "Web",
          FormJSON: {
            name: "nil",
            gmail: "nil",
          },
          Status: "In Progress",
          Type: "Lead",
        })
      );
      setOpen(true);
    },
  });

  return (
    <>
      <Container fixed maxWidth>
        <Navbar bs='CONTACT US' />
        <div>
          <div className={classes.heading}>
            <Typography
              variant='h4'
              sx={{
                display: 'flex',
                justifyContent: 'center',
                color: '#703C00',
                fontWeight: 'bold',
                fontSize: ['40px', '50px', '50px'],
                fontFamily: 'Sora',
                paddingTop: '50px',
              }}
            >
              Contact Us
            </Typography>
          </div>
          <div
            className={
              isMobile
                ? classes.OuterDivMobile
                : isRange
                ? classes.OuterDivRange
                : classes.OuterDiv
            }
          >
            <Container
              sx={{
                display: 'flex',
                flexDirection: 'column',
                marginLeft: ['0%', '10%', '20%'],
                justifyContent: 'center',
                width: ['100%', '100%', '60%', '100%'],
              }}
            >
              <form onSubmit={formik.handleSubmit}>
                <TextField
                  id='name'
                  name='name'
                  placeholder='Name*'
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                  variant='standard'
                  sx={
                    isMobile
                      ? {
                          backgroundColor: '#FFEDD1',
                          my: 2,
                          width: '90%',
                          borderRadius: '20px',
                          height: '40px',
                          px: 2,
                          py: 1,
                          '& input::placeholder': {
                            fontFamily: 'Sora',
                          },
                        }
                      : {
                          backgroundColor: '#FFEDD1',
                          my: 2,
                          width: '400px',
                          borderRadius: '20px',
                          height: '40px',
                          px: 2,
                          paddingTop: '10px',
                          '& input::placeholder': {
                            fontFamily: 'Sora',
                          },
                        }
                  }
                  InputProps={{
                    disableUnderline: true,
                  }}
                />
                <TextField
                  id='email'
                  name='email'
                  placeholder='Email*'
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  variant='standard'
                  sx={
                    isMobile
                      ? {
                          backgroundColor: '#FFEDD1',
                          my: 2,
                          width: '90%',
                          borderRadius: '20px',
                          height: '40px',
                          px: 2,
                          py: 1,
                          '& input::placeholder': {
                            fontFamily: 'Sora',
                          },
                        }
                      : {
                          backgroundColor: '#FFEDD1',
                          my: 2,
                          width: '400px',
                          borderRadius: '20px',
                          height: '40px',
                          px: 2,
                          paddingTop: '10px',
                          '& input::placeholder': {
                            fontFamily: 'Sora',
                          },
                        }
                  }
                  InputProps={{
                    disableUnderline: true,
                  }}
                />
                <TextField
                  placeholder='Phone Number*'
                  id='phoneNumber'
                  name='phoneNumber'
                  value={formik.values.phoneNumber}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.phoneNumber &&
                    Boolean(formik.errors.phoneNumber)
                  }
                  helperText={
                    formik.touched.phoneNumber && formik.errors.phoneNumber
                  }
                  variant='standard'
                  sx={
                    isMobile
                      ? {
                          backgroundColor: '#FFEDD1',
                          my: 2,
                          width: '90%',
                          borderRadius: '20px',
                          height: '40px',
                          px: 2,
                          py: 1,
                          '& input::placeholder': {
                            fontFamily: 'Sora',
                          },
                        }
                      : {
                          backgroundColor: '#FFEDD1',
                          my: 2,
                          width: '400px',
                          borderRadius: '20px',
                          height: '40px',
                          px: 2,
                          paddingTop: '10px',
                          '& input::placeholder': {
                            fontFamily: 'Sora',
                          },
                        }
                  }
                  InputProps={{
                    disableUnderline: true,
                  }}
                />
                <TextField
                  variant='standard'
                  placeholder='City*'
                  id='city'
                  name='city'
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  error={formik.touched.city && Boolean(formik.errors.city)}
                  helperText={formik.touched.city && formik.errors.city}
                  sx={
                    isMobile
                      ? {
                          backgroundColor: '#FFEDD1',
                          my: 2,
                          width: '90%',
                          borderRadius: '20px',
                          height: '40px',
                          px: 2,
                          py: 1,
                          '& input::placeholder': {
                            fontFamily: 'Sora',
                          },
                        }
                      : {
                          backgroundColor: '#FFEDD1',
                          my: 2,
                          width: '400px',
                          borderRadius: '20px',
                          height: '40px',
                          px: 2,
                          paddingTop: '10px',
                          '& input::placeholder': {
                            fontFamily: 'Sora',
                          },
                        }
                  }
                  InputProps={{
                    disableUnderline: true,
                  }}
                />

                <TextField
                  variant='standard'
                  placeholder='Query*'
                  id='query'
                  name='query'
                  value={formik.values.query}
                  onChange={formik.handleChange}
                  error={formik.touched.query && Boolean(formik.errors.query)}
                  helperText={formik.touched.query && formik.errors.query}
                  inputProps={{ maxLength: 200 }}
                  sx={
                    isMobile
                      ? {
                          backgroundColor: '#FFEDD1',
                          my: 2,
                          width: '90%',
                          borderRadius: '20px',
                          height: '70px',
                          px: 2,
                          py: 1,
                          fontFamily: 'Sora',
                          fontWeight: 'bold',
                          display: 'flex',
                          justifyContent: 'center',
                          '& input::placeholder': {
                            fontFamily: 'Sora',
                          },
                        }
                      : {
                          backgroundColor: '#FFEDD1',
                          my: 2,
                          width: '400px',
                          borderRadius: '20px',
                          px: 2,
                          paddingTop: '10px',
                          fontFamily: 'Sora',
                          fontWeight: 'bold',
                          '& input::placeholder': {
                            fontFamily: 'Sora',
                          },
                        }
                  }
                  multiline='true'
                  maxRows='4'
                  minRows='2'
                  InputProps={{
                    disableUnderline: true,
                    //   style: { color: "#703C00" },
                  }}
                  className={classes.Input}
                />
                <Button
                  variant='contained'
                  type='submit'
                  sx={
                    isRange
                      ? {
                          marginTop: 2,
                          backgroundColor: '#4A2902',
                          marginBottom: 5,
                          fontFamily: 'Sora',
                          width: ['100%', '100%', '100%', '100%', '100%'],
                        }
                      : {
                          marginTop: 2,
                          backgroundColor: '#4A2902',
                          width: ['100%', '100%', '100%', '100%', '100%'],
                          fontFamily: 'Sora',
                          marginBottom: 10,
                        }
                  }
                >
                  Submit
                </Button>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby='alert-dialog-title'
                  aria-describedby='alert-dialog-description'
                >
                  <DialogTitle id='alert-dialog-title'>
                    {'THANK YOU FOR CONTACTING US'}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id='alert-dialog-description'>
                      We will get back to you soon
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                  </DialogActions>
                </Dialog>
              </form>
            </Container>

            <div
              className={
                isMobile
                  ? classes.imageDivMobile
                  : isRange
                  ? classes.imageDivRange
                  : classes.imageDiv
              }
            >
              <Card
                sx={{
                  boxShadow: '0px 0px 0px 0px',
                  width: 400,
                  display: ['inline', 'none', 'block'],
                }}
              >
                <CardMedia
                  component='img'
                  height='304'
                  image={laptopWoman}
                  alt='laptop woman'
                />
              </Card>
            </div>
          </div>
        </div>
        <Divider />
        <div>
          <Grid
            container
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              paddingBottom: '50px',
              px:[2,10,10],
              
            }}
          >
            <Grid xs={12}>
              <Typography
                variant='h4'
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  color: '#703C00',
                  fontWeight: 'bold',
                  fontSize: ['30px', '45px', '45px', '45px', '45px'],
                  fontFamily: 'Sora',
                  paddingTop: ['30px', '45px', '50px'],
                  paddingBottom: ['30px', '45px', '50px'],
                }}
              >
                Reach Out To Us
              </Typography>
            </Grid>
            <Grid
              xs={12}
              md={6}
              lg={4}
              sx={{
                display: 'flex',
                justifyContent: 'left',
                alignItems: 'center',
              }}
            >
              <img width='50px' height='50px' src={PhoneIcon} alt='' />
              <Typography
                variant='h4'
                sx={{
                  color: '#936b3c',
                  fontSize: ['18px', '25px', '25px'],
                  fontFamily: 'Sora',
                  paddingTop: '15px',
                  paddingLeft: ['7px', '0px', '0px'],
                }}
              >
                +91 9587754754
              </Typography>
            </Grid>
            <Grid
              xs={12}
              md={6}
              lg={4}
              sx={{
                display: 'flex',
                justifyContent: 'left',
                alignItems: 'center',
                paddingBottom: ['10px', '10px', '0px'],
              }}
            >
              <img width='50px' height='50px' src={Mail} alt='' />
              <Typography
                variant='h4'
                sx={{
                  color: '#936b3c',
                  fontSize: ['18px', '25px', '25px'],
                  fontFamily: 'Sora',
                  paddingTop: '10px',
                  paddingLeft: ['10px', '10px', '10px'],
                }}
              >
                support@legalfactory.in
              </Typography>
            </Grid>
            <Grid
              xs={12}
              md={12}
              lg={4}
              sx={{
                paddingTop: ['0px', '0px', '30px', '0px', '0px'],
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                paddingLeft: ['0px', '0px', '0px', '50px', '0px'],
              }}
            >
              <img width='50px' height='50px' src={Pin} alt='' />
              <Typography
                variant='h4'
                sx={{
                  color: '#936b3c',
                  fontSize: ['18px', '25px', '25px'],
                  fontFamily: 'Sora',
                  paddingLeft: ['10px', '0px', '0px', '0px', '0px'],
                }}
              >
                Legal Factory 19-A Radhey Prem Civil Lines Ajmer
              </Typography>
            </Grid>
          </Grid>
          <Divider/>
          <Grid xs={12}>
              <Typography
                variant='h4'
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  color: '#703C00',
                  fontWeight: 'bold',
                  fontSize: ['30px', '45px', '45px', '45px', '45px'],
                  fontFamily: 'Sora',
                  paddingTop: ['30px', '45px', '50px'],
                  paddingBottom: ['30px', '45px', '50px'],
                }}
              >
               Our Branches
              </Typography>
            </Grid>
          <Grid
            container
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '50px',
            }}
          >
            <Box
              sx={{
                width: [400,400,"30%",350,400],
                height: [240,240,200,240,240],
                backgroundColor: '#a3d9c9',
                borderRadius: '20px',
                marginRight: ['', '', '10px', '10px', '10px'],
                marginTop: ['10px', '10px', '10px'],
              }}
            >
              <Typography
                variant='h4'
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  color: '#703C00',
                  fontWeight: 'bold',
                  fontSize: ['25px', '25px', '25px', '25px', '25px'],
                  fontFamily: 'Sora',
                  paddingTop: ['5px', '10px', '10px'],
                }}
              >
                North Office
              </Typography>
              <Divider />
              <Typography
                variant='h4'
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  color: '#703C00',
                  fontSize: ['14px', '18px', '12px', '16px', '18px'],
                  fontFamily: 'Sora',
                  paddingTop: ['30px', '20px', '10px','30px','30px'],
                  paddingLeft: ['20px', '10px', '10px', '10px', '10px'],
                
                }}
              >
               
                19-A Radhey Prem Civil Lines  {<br />}
                Ajmer, Rajasthan {<br />}
                Tel: +91 9587754754{<br />}
               
              </Typography>
            </Box>
            <Box
              sx={{
                width: [400,400,"30%",350,400],
                height: [240,240,200,240,240],
                backgroundColor: '#fad4b2',
                borderRadius: '20px',
                marginRight: ['', '', '10px', '10px', '10px'],
                marginTop: ['10px', '10px', '10px'],
              }}
            >
              <Typography
                variant='h4'
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  color: '#703C00',
                  fontWeight: 'bold',
                  fontSize: ['25px', '25px', '25px', '25px', '25px'],
                  fontFamily: 'Sora',
                  paddingTop: ['5px', '10px', '10px'],
                }}
              >
                Mumbai Office
              </Typography>
              <Divider />
              <Typography
                variant='h4'
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  color: '#703C00',
                  fontSize: ['14px', '18px', '12px', '16px', '18px'],
                  fontFamily: 'Sora',
                  paddingTop: ['20px', '30px', '10px','30px','30px'],
                  paddingLeft: ['10px', '10px', '10px', '20px', '30px'],
                
                }}
              >
               
                G-104, Ashok Nagar Building. No-3, {<br />}
                Vazira Naka, L.T. Road {<br />}
                Borivali (West), Mumbai-400091. {<br />}
                Tel: 28333038/9322112415 {<br />}
              
              </Typography>
            </Box>
            <Box
              sx={{
                width: [400,400,"30%",350,400],
                height: [240,240,200,240,240],
                backgroundColor: '#d6e3bc',
                borderRadius: '20px',
                marginLeft: ['', '', '', '10px', '10px'],
                marginTop: ['10px', '10px', '10px'],
              }}
            >
              <Typography
                variant='h4'
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  color: '#703C00',
                  fontWeight: 'bold',
                  fontSize: ['25px', '25px', '25px', '25px', '25px'],
                  fontFamily: 'Sora',
                  paddingTop: ['5px', '10px', '10px'],
                }}
              >
                Mumbai Office
              </Typography>
              <Divider />
              <Typography
                variant='h4'
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  color: '#703C00',
                  fontSize: ['14px', '18px', '12px', '16px', '18px'],
                  fontFamily: 'Sora',
                  paddingTop: ['20px', '30px', '10px','30px','30px'],
                  paddingLeft: ['20px', '20px', '10px', '20px', '30px'],
                }}
              >
              
                6/3 Takwadi, Opp.Royal Xerox {<br />}
                Near Princess Street Signal, Kalbadevi Road, {<br />}
                Mumbai-400002. {<br />}
                Tel: 22016380/22054492 {<br />}
               
              </Typography>
            </Box>
          </Grid>



          <Grid
            container
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '50px',
            }}
          >
            <Box
              sx={{
                width: [400,400,"30%",350,400],
                height: [240,240,200,240,240],
                backgroundColor: '#a3d9c9',
                borderRadius: '20px',
                marginRight: ['', '', '10px', '10px', '10px'],
                marginTop: ['10px', '10px', '10px'],
              }}
            >
              <Typography
                variant='h4'
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  color: '#703C00',
                  fontWeight: 'bold',
                  fontSize: ['25px', '25px', '25px', '25px', '25px'],
                  fontFamily: 'Sora',
                  paddingTop: ['5px', '10px', '10px'],
                }}
              >
                North Office
              </Typography>
              <Divider />
              <Typography
                variant='h4'
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  color: '#703C00',
                  fontSize: ['14px', '18px', '12px', '16px', '18px'],
                  fontFamily: 'Sora',
                  paddingTop: ['30px', '20px', '10px','30px','30px'],
                  paddingLeft: ['20px', '10px', '10px', '10px', '10px'],
                
                }}
              >
               
               First Floor, 11 Shree Maniplaza Complex,  {<br />}
               Kalanala, Bhavnagar-364001{<br />}
             
               
              </Typography>
            </Box>
            <Box
              sx={{
                width: [400,400,"30%",350,400],
                height: [240,240,200,240,240],
                backgroundColor: '#fad4b2',
                borderRadius: '20px',
                marginRight: ['', '', '10px', '10px', '10px'],
                marginTop: ['10px', '10px', '10px'],
              }}
            >
              <Typography
                variant='h4'
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  color: '#703C00',
                  fontWeight: 'bold',
                  fontSize: ['25px', '25px', '25px', '25px', '25px'],
                  fontFamily: 'Sora',
                  paddingTop: ['5px', '10px', '10px'],
                }}
              >
              Surat Office
              </Typography>
              <Divider />
              <Typography
                variant='h4'
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  color: '#703C00',
                  fontSize: ['14px', '18px', '12px', '16px', '18px'],
                  fontFamily: 'Sora',
                  paddingTop: ['20px', '30px', '10px','30px','30px'],
                  paddingLeft: ['10px', '10px', '10px', '20px', '30px'],
                
                }}
              >
               
               2nd Floor, City Shopping Centre {<br />}
               Citizen College, Udhna Main Road, {<br />}
               Surat-394210 {<br />}
              
              
              </Typography>
            </Box>
            <Box
              sx={{
                width: [400,400,"30%",350,400],
                height: [240,240,200,240,240],
                backgroundColor: '#d6e3bc',
                borderRadius: '20px',
                marginLeft: ['', '', '', '10px', '10px'],
                marginTop: ['10px', '10px', '10px'],
              }}
            >
              <Typography
                variant='h4'
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  color: '#703C00',
                  fontWeight: 'bold',
                  fontSize: ['25px', '25px', '25px', '25px', '25px'],
                  fontFamily: 'Sora',
                  paddingTop: ['5px', '10px', '10px'],
                }}
              >
                Kolkata Office
              </Typography>
              <Divider />
              <Typography
                variant='h4'
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  color: '#703C00',
                  fontSize: ['14px', '18px', '12px', '16px', '18px'],
                  fontFamily: 'Sora',
                  paddingTop: ['20px', '30px', '10px','30px','30px'],
                  paddingLeft: ['20px', '20px', '10px', '20px', '30px'],
                }}
              >
              
                19,2nd Floor {<br />}
                RN Mukherjee Road, {<br />}
                Kolkata 700001. {<br />}
           
               
              </Typography>
            </Box>
          </Grid>
          <Divider />

          {isMobile ? (
            <Grid
              xs={12}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                paddingBottom: '100px',
                paddingTop: '80px',
              }}
            >
              <img width='300px' height='250px' src={Map} alt='' />
            </Grid>
          ) : isTablet ? (
            <Grid
              xs={12}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                paddingBottom: '100px',
                paddingTop: '80px',
              }}
            >
              <img width='500px' height='350px' src={Map} alt='' />
            </Grid>
          ) : isRange ? (
            <Grid
              xs={12}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                paddingBottom: '100px',
                paddingTop: '80px',
              }}
            >
              <img src={Map} alt='' height='350px' width='500px' />
              <img height='100px' width='' src={Arrow} alt='' />
            </Grid>
          ) : (
            <Grid
              xs={12}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                paddingBottom: '100px',
                paddingTop: '80px',
              }}
            >
              <img src={Map} alt='' width='800px' height='500px' />
              <img height='200px' width='' src={Arrow} alt='' />
            </Grid>
          )}
        </div>
      </Container>
      <Footer />
    </>
  )
};

export default ContactUs;
