import {
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  InputAdornment,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import { submitDetailsHome } from "../../Actions/GetInTouchForm";

import React from "react";
import useStyles from "./styles";

import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";

const GetInTouchFromPl = (props) => {
  const classes = useStyles();

  const [checked, setChecked] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const isRange = useMediaQuery(theme.breakpoints.between("md", "lg"));
  

  const dispatch = useDispatch();

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validate = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(20, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    city: Yup.string()
      .min(2, "Too Short!")
      .max(20, "Too Long!")
      .required("Required"),
    phoneNumber: Yup.string()
      .matches(phoneRegExp, "Phone Number is not valid")
      .min(5, "Too Short!")
      .max(10, "Too Long!")
      .required("Required"),
  
   });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      city: "",
      phoneNumber: "",
    },
    validationSchema: validate,
    onSubmit: (values, onSubmitProps) => {
      dispatch(
        submitDetailsHome({
          Name: values.name,
          Email: values.email,
          City: values.city,
          Phone: values.phoneNumber,
          Query: "",
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
          Service: props.service,
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
      onSubmitProps.resetForm();
    },
  });
  return (
    <div className={classes.outerDiv}>
      <div className={classes.heading}>
        <Typography
          variant="h6"
          sx={{
            color: "white",
            fontFamily: "Sora",
            fontWeight: "bold",
          }}
        >
          Get In Touch
        </Typography>
      </div>

      <div className={classes.contentDiv}>
        <form
          onSubmit={formik.handleSubmit}
          style={{
            width: "100%",
          }}
        >
          <TextField
            id="name"
            name="name"
            variant="outlined"
            placeholder="Name*"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonOutlineIcon
                    sx={{
                      color: "black",
                    }}
                  />
                </InputAdornment>
              ),
            }}
            sx={
              isRange
                ? {
                    py: 0.5,
                    width: "100%",
                    "& input::placeholder": {
                      fontFamily: "Sora",
                    },
                  }
                : {
                    py: 1,
                    width: "100%",
                    "& input::placeholder": {
                      fontFamily: "Sora",
                    },
                  }
            }
          />
          <TextField
            id="email"
            name="email"
            variant="outlined"
            placeholder="Email*"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
            sx={
              isRange
                ? {
                    py: 0.5,
                    width: "100%",
                    "& input::placeholder": {
                      fontFamily: "Sora",
                    },
                  }
                : {
                    py: 1,
                    width: "100%",
                    "& input::placeholder": {
                      fontFamily: "Sora",
                    },
                  }
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon
                    sx={{
                      color: "black",
                    }}
                  />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            placeholder="City*"
            id="city"
            name="city"
            variant="outlined"
            value={formik.values.city}
            onChange={formik.handleChange}
            error={formik.touched.city && Boolean(formik.errors.city)}
            helperText={formik.touched.city && formik.errors.city}
            sx={
              isRange
                ? {
                    py: 0.5,
                    width: "100%",
                    "& input::placeholder": {
                      fontFamily: "Sora",
                    },
                  }
                : {
                    py: 1,
                    width: "100%",
                    "& input::placeholder": {
                      fontFamily: "Sora",
                    },
                  }
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocationCityIcon
                    sx={{
                      color: "black",
                    }}
                  />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            placeholder="Phone Number*"
            id="phoneNumber"
            name="phoneNumber"
            variant="outlined"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            error={
              formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
            }
            helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
            sx={
              isRange
                ? {
                    py: 0.5,
                    width: "100%",
                    "& input::placeholder": {
                      fontFamily: "Sora",
                    },
                  }
                : {
                    py: 1,
                    width: "100%",
                    "& input::placeholder": {
                      fontFamily: "Sora",
                    },
                  }
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneAndroidIcon
                    sx={{
                      color: "black",
                    }}
                  />
                </InputAdornment>
              ),
            }}
          />

          <div className={classes.CheckboxDiv}>
            <Checkbox
             checked={checked}
             onChange={handleChange}
             inputProps={{ "aria-label": "controlled" }}
             required={true}
            />

            <Typography
              sx={{
                py: 1,
                fontFamily: "Sora",
              }}
            >
              I agree to all the{" "}
              <a
                style={{
                  textDecoration: "none",
                }}
                href="/terms-and-conditions"
              >
                Terms and Conditions
              </a>
            </Typography>
          </div>
          <div className={classes.buttonDiv}>
            <Button
              variant="contained"
              sx={
                !isRange
                  ? {
                      backgroundColor: "#FFB800",
                      width: 205,
                      mx: 10,
                      my: 2,
                      "&:hover": {
                        backgroundColor: "green",
                      },
                      fontFamily: "Sora",
                    }
                  : {
                      backgroundColor: "#FFB800",
                      width: 205,
                      mx: 10,
                      my: 0.1,
                      "&:hover": {
                        backgroundColor: "green",
                      },
                      fontFamily: "Sora",
                    }
              }
              // onClick={handleClickOpen}
              type="submit"
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
      </div>
    </div>
  );
};

export default GetInTouchFromPl;
