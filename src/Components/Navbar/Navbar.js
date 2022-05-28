import React from "react";
import useStyles from "./styles";
import {
  AppBar,
  Avatar,
  Button,
  Container,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  Menu,
  MenuItem,
  Select,
  Toolbar,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import logo from "../../Assets/Images/legalLogo.png";
import MenuIcon from "@mui/icons-material/Menu";
import Fade from "@mui/material/Fade";
import { useNavigate } from "react-router";

export const Navbar = (props) => {
  const classes = useStyles();
  const [businessSetUp, setbusinessSetUp] = React.useState("");
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event) => {
    setbusinessSetUp(event.target.value);
  };
  const reRoute = (e) => {
    e.preventDefault();
    navigate("/privatelimited");
  };
  const reRoutePartnership = (e) => {
    e.preventDefault();
    navigate("/partnershipfirm");
  };

  const reRouteProducer = (e) => {
    e.preventDefault();
    navigate("/producer-company");
  };

  const reRouteProprietorship = (e) => {
    e.preventDefault();
    navigate("/sole-proprietorship");
  };

  const reRouteShopAct = (e) => {
    e.preventDefault();
    navigate("/shop-act");
  };

  const reRouteNidhiCompany = (e) => {
    e.preventDefault();
    navigate("/nidhi-company");
  };

  const reRouteStartUpIndia = (e) => {
    e.preventDefault();
    navigate("/startup-india");
  };
  const reRoutellp = (e) => {
    e.preventDefault();
    navigate("/limited-liability-partnership");
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTab = useMediaQuery(theme.breakpoints.down("md"));


  return (
    <div
      className={classes.root}
      styles={{
        position: 'fixed',
      }}
    >
      <AppBar
        position='absolute'
        color='default'
        className={classes.AppBar}
        sx={{
          boxShadow: '0px 0px 0px 0px',
          backgroundColor: '#fff',
          position: 'fixed',
          marginRight: ['0px', '90px', '0px'],
          left: ['0px', '50px', '-40px', '20px', '15px'],
          top: '0px',
          zIndex: '1',
          width: ['97%', '80%', '110%', '100%', '100%'],
        }}
      >
        <Container fixed maxWidth>
          <Grid
            Container
            item
            sm={12}
            xs={12}
            sx={{
              width: [400, 1000, 1600, 2000, 1550],
            }}
          >
            <Toolbar>
              <Grid
                className={classes.grow}
                sx={{
                  px: [0, 1, 1, 1, 7],
                }}
              >
                <Button
                  className={classes.mainLogo}
                  onClick={(e) => {
                    e.preventDefault()
                    navigate('/')
                  }}
                  sx={{ display: ['inline', 'inline', 'inline'] }}
                >
                  <Avatar
                    src={logo}
                    className={classes.avatar}
                    sx={{
                      display: ['block', 'block', 'block'],
                      marginTop: '10px',
                    }}
                  />
                </Button>
                <Button
                  className={classes.mainLogo}
                  sx={{
                    color: 'black',
                    fontWeight: 'bold',
                    fontFamily: 'Sora',
                    fontSize: ['15px', '16px', '18px'],
                    marginTop: '10px',
                  }}
                  onClick={(e) => {
                    e.preventDefault()
                    navigate('/')
                  }}
                >
                  Legal Factory
                </Button>
              </Grid>

              {isMobile || isTab ? (
                <div className={classes.menuIcon}>
                  <IconButton onClick={handleClick}>
                    <MenuIcon />
                  </IconButton>

                  <Menu
                    id='fade-menu'
                    MenuListProps={{
                      'aria-labelledby': 'fade-button',
                    }}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                  >
                    <FormControl sx={{ m: 1, minWidth: 150 }}>
                      <InputLabel
                        id='demo-simple-select-autowidth-label'
                        sx={{
                          color: '#E38A00',
                          fontWeight: 'bolder',
                          border: 'none',
                          width: '190px',
                          fontSize: '14px',
                          display: 'flex',
                          justifyContent: 'left',
                          fontFamily: 'Sora',
                        }}
                      >
                        SERVICES
                      </InputLabel>

                      <Select
                        value={businessSetUp}
                        variant='filled'
                        onChange={handleChange}
                        autoWidth
                        inputProps={{ 'aria-label': 'Without label' }}
                        displayEmpty='true'
                        defaultValue='SERVICES'
                        sx={{
                          border: 'none',
                          fontFamily: 'Sora',
                          width: '100%',
                        }}
                      >
                        <MenuItem
                          sx={{
                            fontFamily: 'Sora',
                          }}
                          value={20}
                          onClick={reRoute}
                        >
                          Private Limited
                        </MenuItem>
                        <MenuItem
                          sx={{
                            fontFamily: 'Sora',
                          }}
                          value={30}
                          onClick={reRoutePartnership}
                        >
                          Partnership Firm
                        </MenuItem>

                        <MenuItem
                          sx={{
                            fontFamily: 'Sora',
                          }}
                          value={40}
                          onClick={reRouteProducer}
                        >
                          Producer Company
                        </MenuItem>
                        <MenuItem
                          sx={{
                            fontFamily: 'Sora',
                          }}
                          value={50}
                          onClick={reRouteProprietorship}
                        >
                          Sole Proprietorship
                        </MenuItem>
                        <MenuItem
                          sx={{
                            fontFamily: "Sora",
                          }}
                          value={60}
                          onClick={reRouteShopAct}
                        >
                          Shop Act
                        </MenuItem>
                        <MenuItem
                          sx={{
                            fontFamily: "Sora",
                          }}
                          value={70}
                          onClick={reRouteNidhiCompany}
                        >
                          Nidhi Company
                        </MenuItem>
                        <MenuItem
                          sx={{
                            fontFamily: "Sora",
                          }}
                          value={80}
                          onClick={reRouteStartUpIndia}
                        >
                         StartUp India
                        </MenuItem>
                        <MenuItem
                          sx={{
                            fontFamily: "Sora",
                          }}
                          value={90}
                          onClick={reRoutellp}
                        >Limited Liability Partnership</MenuItem>
                      </Select>
                    </FormControl>
                    <MenuItem
                      onClick={() => {
                        navigate('/about-us')
                      }}
                      sx={{
                        fontFamily: 'Sora',
                      }}
                    >
                      About Us
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        navigate('/contact-us')
                      }}
                      sx={{
                        fontFamily: 'Sora',
                      }}
                    >
                      Contact Us
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        navigate('/sign-in')
                      }}
                      sx={{
                        fontWeight: 'bolder',
                        fontFamily: 'Sora',
                        color: 'White',
                        backgroundColor: '#FFA511',
                        borderRadius: 1,
                        marginLeft: 1,
                        marginRight: 1,
                        '&:hover': {
                          backgroundColor: 'green',
                        },
                      }}
                    >
                      Login
                    </MenuItem>
                  </Menu>
                </div>
              ) : (
                <>
                  <FormControl
                    sx={{ mx: 1, minWidth: 150, fontWeight: 'bold' }}
                  >
                    <InputLabel
                      id='demo-simple-select-autowidth-label'
                      sx={{
                        color: '#E38A00',
                        fontWeight: 'bolder',
                        border: 'none',
                        width: '200px',
                        fontSize: '16px',
                        display: 'flex',
                        justifyContent: 'center',
                        fontFamily: 'Sora',
                        marginRight: 2,
                        my: 0.5,
                      }}
                    >
                      Services
                    </InputLabel>

                    <Select
                      disableUnderline
                      variant='standard'
                      value={businessSetUp}
                      onChange={handleChange}
                      autoWidth
                      label='Business SetUp'
                      sx={{
                        border: 'none',
                        fontFamily: 'Sora',
                        boxShadow: 0,
                        width: 150,
                      }}
                    >
                      <MenuItem
                        sx={{
                          fontFamily: 'Sora',
                        }}
                        value={20}
                        onClick={reRoute}
                      >
                        Private Limited
                      </MenuItem>
                      <MenuItem
                        sx={{
                          fontFamily: 'Sora',
                        }}
                        value={30}
                        onClick={reRoutePartnership}
                      >
                        Partnership Firm
                      </MenuItem>

                      <MenuItem
                          sx={{
                            fontFamily: "Sora",
                          }}
                          value={40}
                          onClick={reRouteProducer}
                        >
                          Producer Company
                        </MenuItem>
                        <MenuItem
                          sx={{
                            fontFamily: "Sora",
                          }}
                          value={50}
                          onClick={reRouteProprietorship}
                        >
                          Sole Proprietorship
                        </MenuItem>
                        <MenuItem
                          sx={{
                            fontFamily: "Sora",
                          }}
                          value={60}
                          onClick={reRouteShopAct}
                        >
                          Shop Act 
                        </MenuItem>
                        <MenuItem
                          sx={{
                            fontFamily: "Sora",
                          }}
                          value={70}
                          onClick={reRouteNidhiCompany}
                        >
                         Nidhi Company
                        </MenuItem>
                        <MenuItem
                          sx={{
                            fontFamily: "Sora",
                          }}
                          value={80}
                          onClick={reRouteStartUpIndia}
                        >
                         StartUp India
                        </MenuItem>
                        <MenuItem
                          sx={{
                            fontFamily: "Sora",
                          }}
                          value={90}
                          onClick={reRoutellp}
                        >Limited Liability Partnership</MenuItem>
                    </Select>
                  </FormControl>

                  <Button
                    className={classes.buttonFontSize}
                    sx={{
                      fontWeight: 'bolder',
                      fontFamily: 'Sora',
                      color: 'black',
                      marginTop: '10px',
                    }}
                    onClick={(e) => {
                      e.preventDefault()
                      navigate('/about-us')
                    }}
                  >
                    About Us
                  </Button>
                  <Button
                    className={classes.buttonFontSize}
                    sx={{
                      fontWeight: 'bolder',
                      fontFamily: 'Sora',
                      color: 'black',
                      marginTop: '10px',
                    }}
                    onClick={(e) => {
                      e.preventDefault()
                      navigate('/contact-us')
                    }}
                  >
                    Contact Us
                  </Button>
                  <Button
                    className={classes.buttonFontSize}
                    sx={{
                      fontWeight: 'bolder',
                      fontFamily: 'Sora',
                      color: 'White',
                      backgroundColor: '#FFA511',
                      marginLeft: [0, 0, 6, 12, 12],
                      marginTop: '10px',
                      '&:hover': {
                        backgroundColor: 'green',
                      },
                    }}
                    onClick={(e) => {
                      e.preventDefault()
                      navigate('/sign-in')
                    }}
                  >
                    Login
                  </Button>
                </>
              )}
            </Toolbar>
          </Grid>
        </Container>
      </AppBar>
    </div>
  )
};
