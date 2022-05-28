import React from "react";
import {
  Avatar,
  Button,
  CircularProgress,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../../Actions/auth";

import logo2 from "../../../Assets/Images/legalLogo2.png";
import CopyrightIcon from "@mui/icons-material/Copyright";
import Vectors from "../../../Assets/Images/vectors2.png";


const SignInClient = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userInfo = useSelector((state) => state.user);

 
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const validate = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .required("Password is required")
      // .matches(
      //   /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
      //   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      // ),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validate,
    onSubmit: (values) => {
      dispatch(login(values.email, values.password, navigate));
    },
  });
 
  const Background = {
    backgroundImage: "url(" + Vectors + ")",
    backgroundSize: "cover",
 
    height:"100%"
    
  };
  return (
    <div style={{ backgroundColor:"#FFF3DC",display:"flex",height:"100vh"}}>
    <Container fixed maxWidth style={Background} >
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          width: ["100%", "100%", "50%", "40%", "40%"],
          flexDirection: "column",
          marginTop: ["20%", "10%", "10%", "10%", "5%"],
          backgroundColor:"white",
         borderStyle:"solid",
         borderColor:"#703C00",
         borderRadius:3
         
        }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Container
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Avatar
              src={logo2}
              sx={{
                height: "100%",
                width: ["50%", "30%", "30%", "20%", "20%"],
                cursor:"pointer"
              }}
              onClick={(e) => {
                e.preventDefault();
                navigate("/")
              }}
            />
          </Container>
          <Typography
            variant="h5"
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              fontWeight: "bold",
              fontFamily: "Sora",
              color:"#703C00"
            }}
          >
            Sign In
          </Typography>
        </Container>
        <Container
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <form onSubmit={formik.handleSubmit}>
            <TextField
              id="email"
              name="email"
              variant="outlined"
              placeholder="Username*"

              sx={{
                my: 2,
                width: "100%",
                backgroundColor:" #FFF3DC",
                "& input::placeholder": {
                  fontFamily: "Sora",
                  color:"#B19255"
                },
              }}
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />

            <TextField
              // id="outlined-password-input"
              id="password"
              name="password"
              variant="outlined"
              type="password"
              placeholder="Password*"
              sx={{
                my: 2,
                width: "100%",
                "& input::placeholder": {
                  fontFamily: "Sora",
                  color:"#B19255"
                },
                backgroundColor:" #FFF3DC",
              }}
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            {/* <div
              style={{
                display: "flex",
                justifyContent: "left",
              }}
            >
              <Checkbox
                checked={checked}
                onChange={handleChange}
                inputProps={{ "aria-label": "controlled" }}
              />
              <Typography
                sx={{
                  py: 1,
                  fontFamily: "Sora",
                }}
              >
                Remember Me
              </Typography>
            </div> */}

            {userInfo.isLoading ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <CircularProgress color="success" />
              </div>
            ) : (
              <Button
                type="submit"
                variant="contained"
                sx={{
                  width: "100%",
                  px: 0,
                  my: 2,
                  fontFamily: "Sora",
                  backgroundColor: "#FFB800",
                  "&:hover": {
                    backgroundColor: "green",
                  },
                }}
              >
                Sign In
              </Button>
            )}
          </form>
        
          <Typography
         sx={{
           display: "flex",
           justifyContent: "center",
           fontWeight: "bold",
          //  backgroundColor: "#FFA511",
          //  color: "#4A2902",
          color:"#703C00",
           fontFamily:"Sora",
           borderRadius:4,
           my:4
         }}
       >
         <CopyrightIcon />
         2022 LegalFactory
       </Typography>
        </Container>
       
      </Container> 
    </Container>
    </div>
  );
};

export default SignInClient;
