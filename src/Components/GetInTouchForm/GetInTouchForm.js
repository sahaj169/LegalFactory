import {
  Button,
  Card,
  CardMedia,
  Container,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";
import useStyles from "./styles";
import laptopWoman from "../../Assets/Images/laptopWoman.png";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { submitDetailsHome } from "../../Actions/GetInTouchForm";

const GetInTouchForm = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isRange = useMediaQuery(theme.breakpoints.between("md", "lg"));
  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch();

  const handleClose = () => {
    setOpen(false);
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validate = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(20, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    phoneNumber: Yup.string()
      .matches(phoneRegExp, "Phone Number is not valid")
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
    onSubmit: (values,onSubmitProps) => {
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
          Payment:0,
          PaymentLink: "",
          PaymentMode: "",
          ProfilePic: "",
          Service: "Home",
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
      onSubmitProps.resetForm()
     
    },
  });

  return (
    <div>
      <div className={classes.heading}>
        <Typography
          variant="h4"
          sx={{
            display: "flex",
            justifyContent: "center",
            color: "#703C00",
            fontWeight: "bold",
            fontSize: ["40px", "50px", "50px"],
            fontFamily: "Sora",
          }}
        >
          Get in Touch!
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
            display: "flex",
            flexDirection: "column",
            marginLeft: ["0%", "10%", "20%"],
            justifyContent: "center",
            width: ["100%", "100%", "60%", "100%"],
          }}
        >
          <form onSubmit={formik.handleSubmit}>
            <TextField
              id="name"
              name="name"
              placeholder="Name*"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
              variant="standard"
              sx={
                isMobile
                  ? {
                      backgroundColor: "#FFEDD1",
                      my: 2,
                      width: "90%",
                      borderRadius: "20px",
                      height: "40px",
                      px: 2,
                      py: 1,
                      "& input::placeholder": {
                        fontFamily: "Sora",
                      },
                    }
                  : {
                      backgroundColor: "#FFEDD1",
                      my: 2,
                      width: "400px",
                      borderRadius: "20px",
                      height: "40px",
                      px: 2,
                      paddingTop: "10px",
                      "& input::placeholder": {
                        fontFamily: "Sora",
                      },
                    }
              }
              InputProps={{
                disableUnderline: true,
              }}
            />
            <TextField
              id="email"
              name="email"
              placeholder="Email*"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              variant="standard"
             
              sx={
                isMobile
                  ? {
                      backgroundColor: "#FFEDD1",
                      my: 2,
                      width: "90%",
                      borderRadius: "20px",
                      height: "40px",
                      px: 2,
                      py: 1,
                      "& input::placeholder": {
                        fontFamily: "Sora",
                      },
                    }
                  : {
                      backgroundColor: "#FFEDD1",
                      my: 2,
                      width: "400px",
                      borderRadius: "20px",
                      height: "40px",
                      px: 2,
                      paddingTop: "10px",
                      "& input::placeholder": {
                        fontFamily: "Sora",
                      },
                    }
              }
              InputProps={{
                disableUnderline: true,
              }}
            />
            <TextField
              placeholder="Phone Number*"
              id="phoneNumber"
              name="phoneNumber"
              value={formik.values.phoneNumber}
              onChange={formik.handleChange}
              error={
                formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
              }
              helperText={
                formik.touched.phoneNumber && formik.errors.phoneNumber
              }
              variant="standard"
              
              sx={
                isMobile
                  ? {
                      backgroundColor: "#FFEDD1",
                      my: 2,
                      width: "90%",
                      borderRadius: "20px",
                      height: "40px",
                      px: 2,
                      py: 1,
                      "& input::placeholder": {
                        fontFamily: "Sora",
                      },
                    }
                  : {
                      backgroundColor: "#FFEDD1",
                      my: 2,
                      width: "400px",
                      borderRadius: "20px",
                      height: "40px",
                      px: 2,
                      paddingTop: "10px",
                      "& input::placeholder": {
                        fontFamily: "Sora",
                      },
                    }
              }
              InputProps={{
                disableUnderline: true,
              }}
            />
            <TextField
              variant="standard"
              placeholder="City*"
              id="city"
              name="city"
              value={formik.values.city}
              onChange={formik.handleChange}
              error={formik.touched.city && Boolean(formik.errors.city)}
              helperText={formik.touched.city && formik.errors.city}
            
              sx={
                isMobile
                  ? {
                      backgroundColor: "#FFEDD1",
                      my: 2,
                      width: "90%",
                      borderRadius: "20px",
                      height: "40px",
                      px: 2,
                      py: 1,
                      "& input::placeholder": {
                        fontFamily: "Sora",
                      },
                    }
                  : {
                      backgroundColor: "#FFEDD1",
                      my: 2,
                      width: "400px",
                      borderRadius: "20px",
                      height: "40px",
                      px: 2,
                      paddingTop: "10px",
                      "& input::placeholder": {
                        fontFamily: "Sora",
                      },
                    }
              }
              InputProps={{
                disableUnderline: true,
              }}
            />
            <TextField
              variant="standard"
              placeholder="Query*"
              id="query"
              name="query"
              value={formik.values.query}
              onChange={formik.handleChange}
              error={formik.touched.query && Boolean(formik.errors.query)}
              helperText={formik.touched.query && formik.errors.query}
              inputProps={{ maxLength: 200 }} 
              sx={
                isMobile
                  ? {
                      backgroundColor: "#FFEDD1",
                      my: 2,
                      width: "90%",
                      borderRadius: "20px",
                      height: "70px",
                      px: 2,
                      py: 1,
                      fontFamily: "Sora",
                      fontWeight: "bold",
                      display: "flex",
                      justifyContent: "center",
                      "& input::placeholder": {
                        fontFamily: "Sora",
                      },
                    }
                  : {
                      backgroundColor: "#FFEDD1",
                      my: 2,
                      width: "400px",
                      borderRadius: "20px",
                      px: 2,
                      paddingTop: "10px",
                      fontFamily: "Sora",
                      fontWeight: "bold",
                      "& input::placeholder": {
                        fontFamily: "Sora",
                      },
                    }
              }
              multiline="true"
              maxRows="4"
              minRows="2"
              InputProps={{
                disableUnderline: true,
                //   style: { color: "#703C00" },
              }}
              className={classes.Input}
            />
            <div
              style={{
                display: "flex",

                width: "100%",
                marginBottom: "50px",
              }}
            >
              <Button
                variant="contained"
                type="submit"
                sx={
                  isRange
                    ? {
                        marginTop: 2,
                        backgroundColor: "#4A2902",
                        marginBottom: 5,
                        fontFamily: "Sora",
                        width: ["100%", "100%", "100%", "100%", "100%"],
                      }
                    : {
                        marginTop: 2,
                        backgroundColor: "#4A2902",
                        // marginBottom: 60,
                        width: ["100%", "100%", "100%", "100%", "200%"],
                        // marginLeft: ["0px", "40px", "40px"],
                        fontFamily: "Sora",
                      }
                }
              >
                Submit
              </Button>
              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">
                  {"THANK YOU FOR CONTACTING US"}
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    We will get back to you soon
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Close</Button>
                </DialogActions>
              </Dialog>
            </div>
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
              boxShadow: "0px 0px 0px 0px",
              width: 400,
              display: ["inline", "none", "block"],
            }}
          >
            <CardMedia
              component="img"
              height="304"
              image={laptopWoman}
              alt="laptop woman"
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default GetInTouchForm;
