import {
  Button,
  TextField,
  Typography,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  InputAdornment,
  useMediaQuery,
  useTheme,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";
import React from "react";
import useStyles from "./styles";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PaymentIcon from "@mui/icons-material/Payment";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import PaidIcon from '@mui/icons-material/Paid';
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { updateCollection } from "../../Actions/admin.js";
import { CLOSE_DIALOG } from "../../Constants/actionTypes";

const AdminDashboardForm = (props) => {

  
  const classes = useStyles();
  var [data, setData] = React.useState("");
  var [status, setStatus] = React.useState("");
  const [open, setOpen] = React.useState(false);

  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.down("sm"));
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const dispatch = useDispatch();
  const handleClose = () => {
    setOpen(false);
    dispatch({ type: CLOSE_DIALOG })
  };

  const handleChange = (event) => {
    setData(event.target.value);
  };

  const handleChange1 = (event) => {
    setStatus(event.target.value);
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const validate = Yup.object().shape({
    name: Yup.string(),
    city: Yup.string().min(2, "Too Short!").max(20, "Too Long!"),

    phoneNumber: Yup.string()
      .matches(phoneRegExp, "Phone Number is not valid")
      .min(5, "Too Short!")
      .max(10, "Too Long!"),

    paymentLink: Yup.string(),
  });



  const formik = useFormik({
    initialValues: {
      name: props.row.name,
      type: props.row.type,
      status: props.row.status,
      city: props.row.city,
      phoneNumber: props.row.phoneNumber,
      payment:props.row.payment,
      paymentLink: "nil",
    },
    validationSchema: validate,
    onSubmit: (values, onSubmitProps) => {
    
      if (values.name === "") 
        values.name = props.row.name;
      else{
        props.row.name = values.name;
      }

      if (data === "") 
        data = props.row.type;
      else{
        props.row.type = data;
      }

      if (status === "") 
        status = props.row.status;
        else{
        props.row.status=status;
        }

      if (values.city === "") 
        values.city = props.row.city;
      else{
        props.row.city = values.city
      }

      if (values.phoneNumber === "") 
        values.phoneNumber = props.row.phoneNumber;
      else{
        props.row.phoneNumber = values.phoneNumber
      }

      if (values.payment === "") 
      values.payment = props.row.payment;
    else{
      props.row.payment = values.payment
    }

      if (values.paymentLink === "") 
        values.paymentLink = "nil";

      if(props.row.lastupdated==="")
      props.row.lastupdated=new Date().toLocaleString() + ""

      else 
      props.row.lastupdated=new Date().toLocaleString() + ""
      

      dispatch(
        updateCollection(
          props.row.columnId,
          props.row.email,
          values.name,
          data,
          status,
          values.city,
          values.phoneNumber,
          values.payment,
          values.paymentLink,
          props.row.lastupdated
          
        )
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
            fontWeight: "bolder",
            fontSize: "24px",
          }}
        >
          Edit Details
        </Typography>
      </div>

      <div className={classes.contentDiv}>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            id="name"
            name="name"
            variant="outlined"
            placeholder="Name*"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
            sx={{
              py: 2,
              "& input::placeholder": {
                fontFamily: "Sora",
              },
              width: "100%",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonOutlineIcon
                    sx={{
                      color: "#3D2C02",
                    }}
                  />
                </InputAdornment>
              ),
            }}
          />
          <FormControl sx={{ mx: 1, minWidth: 120, fontWeight: "bold" ,display:"flex"}}>
            <InputLabel
              id="demo-simple-select-autowidth-label"
              sx={{
                color: "#E38A00",
                fontWeight: "bolder",
                border: "none",

                fontSize: "16px",

                justifyContent: "left",
                fontFamily: "Sora",

                my: 0.5,
              }}
            >
              {props.row.type}
            </InputLabel>

            <Select
              disableUnderline
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={data}
              onChange={handleChange}
              autoWidth
              label="Business SetUp"
              sx={{
                display:"flex",
                border: "none",
                fontFamily: "Sora",
                boxShadow: 0,
                width: "100%",
                my: 1,
              }}
            >
              <MenuItem
                sx={{
                  fontFamily: "Sora",
                }}
                value="Admin"
                // onClick={reRoute}
              >
                Admin
              </MenuItem>
              <MenuItem
                sx={{
                  fontFamily: "Sora",
                }}
                value="Client"
                // onClick={reRoutePartnership}
              >
                Client
              </MenuItem>
              <MenuItem
                sx={{
                  fontFamily: "Sora",
                }}
                value="Lead"
                // onClick={reRoutePartnership}
              >
                Lead
              </MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ mx: 1, minWidth: 120, fontWeight: "bold" ,display:"flex"}}>
            <InputLabel
              id="demo-simple-select-autowidth-label"
              sx={{
                color: "#E38A00",
                fontWeight: "bolder",
                border: "none",

                fontSize: "16px",

                justifyContent: "left",
                fontFamily: "Sora",

                my: 0.5,
              }}
            >
              {props.row.status}
            </InputLabel>

            <Select
              disableUnderline
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={status}
              onChange={handleChange1}
              autoWidth
              label="Business SetUp"
              sx={{
                border: "none",
                fontFamily: "Sora",
                boxShadow: 0,
                display:"flex",
                width: "100%",
                my: 1,
              }}
            >
              <MenuItem
                sx={{
                  fontFamily: "Sora",
                }}
                value="In Progress"
                // onClick={reRoute}
              >
                In Progress
              </MenuItem>
              <MenuItem
                sx={{
                  fontFamily: "Sora",
                }}
                value="Payment Complete"
                // onClick={reRoutePartnership}
              >
                Payment Complete
              </MenuItem>

              <MenuItem
                sx={{
                  fontFamily: "Sora",
                }}
                value="On Hold"
                // onClick={reRoutePartnership}
              >
                On Hold
              </MenuItem>
              <MenuItem
                sx={{
                  fontFamily: "Sora",
                }}
                value="Payment Link Generated"
                // onClick={reRoutePartnership}
              >
                Payment Link Generated
              </MenuItem>
              <MenuItem
                sx={{
                  fontFamily: "Sora",
                }}
                value="Documentation Pending"
                // onClick={reRoutePartnership}
              >
                Documentation Pending
              </MenuItem>
              <MenuItem
                sx={{
                  fontFamily: "Sora",
                }}
                value="Completed"
                // onClick={reRoutePartnership}
              >
                Completed
              </MenuItem>
              <MenuItem
                sx={{
                  fontFamily: "Sora",
                }}
                value="In Active"
                // onClick={reRoutePartnership}
              >
                In Active
              </MenuItem>
              <MenuItem
                sx={{
                  fontFamily: "Sora",
                }}
                value="Rejected"
                // onClick={reRoutePartnership}
              >
                Rejected
              </MenuItem>
              <MenuItem
                sx={{
                  fontFamily: "Sora",
                }}
                value="Client Confirmed"
                // onClick={reRoutePartnership}
              >
                Client Confirmed
              </MenuItem>
            </Select>
          </FormControl>

          <TextField
            placeholder="City*"
            id="city"
            name="city"
            variant="outlined"
            value={formik.values.city}
            onChange={formik.handleChange}
            error={formik.touched.city && Boolean(formik.errors.city)}
            helperText={formik.touched.city && formik.errors.city}
            sx={{
              py: 2,
              "& input::placeholder": {
                fontFamily: "Sora",
              },
              width: "100%",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocationCityIcon
                    sx={{
                      color: "#3D2C02",
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
            sx={{
              py: 1,
              "& input::placeholder": {
                fontFamily: "Sora",
              },
              width: "100%",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PhoneAndroidIcon
                    sx={{
                      color: "#3D2C02",
                    }}
                  />
                </InputAdornment>
              ),
            }}
          />

<TextField
            placeholder="Payment*"
            id="payment"
            name="payment"
            variant="outlined"
            value={formik.values.payment}
            onChange={formik.handleChange}
            error={
              formik.touched.payment && Boolean(formik.errors.payment)
            }
            helperText={formik.touched.payment && formik.errors.payment}
            sx={{
              py: 1,
              "& input::placeholder": {
                fontFamily: "Sora",
              },
              width: "100%",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PaidIcon
                    sx={{
                      color: "#3D2C02",
                    }}
                  />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            placeholder="Payment Link*"
            id="paymentLink"
            name="paymentLink"
            variant="outlined"
            value={formik.values.paymentLink}
            onChange={formik.handleChange}
            error={
              formik.touched.paymentLink && Boolean(formik.errors.paymentLink)
            }
            helperText={formik.touched.paymentLink && formik.errors.paymentLink}
            sx={{
              py: 1,
              "& input::placeholder": {
                fontFamily: "Sora",
              },
              width: "100%",
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PaymentIcon
                    sx={{
                      color: "#3D2C02",
                    }}
                  />
                </InputAdornment>
              ),
            }}
          />
          <div className={classes.buttonDiv}>
            <Button
              variant="contained"
              sx={
                !isTablet && !isMobile
                  ? {
                      backgroundColor: "#FFB800",
                      display:"flex",
                      justifyContent:"center",
                      width:"100%",
                      marginTop:2,
                      "&:hover": {
                        backgroundColor: "green",
                      },
                      fontFamily: "Sora",
                    }
                  : isTablet
                  ? {
                      backgroundColor: "#FFB800",
                      width:"100%",
                      mx: 10,
                      my: 2,
                      "&:hover": {
                        backgroundColor: "green",
                      },
                      fontFamily: "Sora",
                    }
                  : {}
              }
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
                {"SUCCESSFULLY UPDATED"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Data has been successfully updated
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

export default AdminDashboardForm;
