import { React, useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CopyrightIcon from "@mui/icons-material/Copyright";
import SearchIcon from '@mui/icons-material/Search'
import { useNavigate } from "react-router-dom";
import {
  CardContent,
  CircularProgress,
  Container,
  Grid,
  TextField,
  useTheme,
} from "@mui/material";
import useStyles from "./styles";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Logo from '../../Assets/Images/favicon.png'
import Fuse from "fuse.js";
import { useDispatch, useSelector } from "react-redux";
import { CLEAR_DATA, LOGOUT } from "../../Constants/actionTypes";
import { resetPassword } from "../../Actions/auth";
import { client } from "../../Actions/client";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const columns = [
  // { id: "columnId", label: "Column Id", minWidth: 170 },

  { id: "type", label: "Type", minWidth: 100, align: "right" },
  { id: "name", label: "Name", minWidth: 100, align: "right" },
  {
    id: "phoneNumber",
    label: "Phone Number",
    minWidth: 70,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "email",
    label: "Email",
    minWidth: 100,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "city",
    label: "City",
    minWidth: 100,
    align: "right",
    format: (value) => value.toFixed(2),
  },

  {
    id: "service",
    label: "Service",
    minWidth: 100,
    align: "right",
    format: (value) => value.toFixed(2),
  },

  {
    id: "payment",
    label: "Payment",
    minWidth: 20,
    align: "right",
    format: (value) => value.toFixed(2),
  },

  {
    id: "lastupdated",
    label: "Last Updated",
    minWidth: 100,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "date",
    label: "Date",
    minWidth: 100,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

function createData(
  columnId,
  type,
  name,
  phoneNumber,
  email,
  city,
  service,
  payment,
  lastupdated,
  date
) {
  return {
    columnId,
    type,
    name,
    phoneNumber,
    email,
    city,
    service,
    payment,
    lastupdated,
    date,
  };
}

var originalRows = [];

const userData = JSON.parse(localStorage.getItem("access_token"));

export default function ClientDashboard() {
  const theme = useTheme()
  const [open, setOpen] = useState(false)
  const classes = useStyles()
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(10)
  // eslint-disable-next-line
  const [rows, setRows] = useState(originalRows)
  const [output, setOutput] = useState([])
  const [query, setQuery] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const clientData = useSelector((state) => state.client)
  const authInfo = useSelector((state) => state.user)

  const { clientList } = clientData
  const { needsRefresh } = authInfo

  const fuse = new Fuse(originalRows, {
    keys: [
      'columnId',
      'name',
      'phoneNumber',
      'email',
      'city',
      'service',
      'payment',
      'lastupdated',
      'date',
    ],
  })

  const results = fuse.search(query)

  function handleOnSearch({ currentTarget = {} }) {
    const { value } = currentTarget
    setQuery(value)
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const handleLogout = () => {
    dispatch({ type: LOGOUT })
    dispatch({ type: CLEAR_DATA })
    setOutput([])
  }

  const handleForgetPassword = (output) => {
    dispatch(resetPassword(output[0].email))
  }

  useEffect(() => {
    if (needsRefresh) window.location.reload(false)
  }, [needsRefresh])

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    setOutput([])
    const filteredRows = query
      ? results.map((result) => result.item)
      : originalRows

    setOutput(filteredRows)
  }, [query, results])

  useEffect(() => {
    dispatch(client())
  }, [dispatch])

  useEffect(() => {
    originalRows = []
    if (clientList) {
      clientList
        ?.map((doc) => ({ ...doc.data(), id: doc.id }))
        // eslint-disable-next-line
        ?.map((user) => {
          user.Email === userData?.email &&
            originalRows.push(
              createData(
                user.id,
                user.Type,
                user.Name,
                user.Phone,
                user.Email,
                user.City,
                user.Service,
                user.Payment,
                user.LastModified,
                new Date(user.EnquiryDate.seconds * 1000).toLocaleDateString()
              )
            )
        })
      originalRows.sort((a, b) => b.date.localeCompare(a.date))
      setOutput([...originalRows])
    }
  }, [clientList])

  return (
    <Container fixed maxWidth>
      <div className={classes.body}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar
            position='fixed'
            open={open}
            sx={{
              backgroundColor: '#7b3b00',
            }}
          >
            <Toolbar>
              <IconButton
                color='inherit'
                aria-label='open drawer'
                onClick={handleDrawerOpen}
                edge='start'
                sx={{ mr: 2, ...(open && { display: 'none' }) }}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant='h6'
                noWrap
                component='div'
                sx={{
                  fontFamily: 'Sora',
                  color: 'white',
                  fontWeight: 'bold',
                }}
              >
                Client Dashboard
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            sx={{
              width: drawerWidth,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: drawerWidth,
                boxSizing: 'border-box',
              },
            }}
            variant='persistent'
            anchor='left'
            open={open}
          >
            <DrawerHeader sx={{ backgroundColor: '#fff5e1' }}>
              <img height='40' width='50' src={Logo} alt='' />
              <Typography
                variant='h6'
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  marginLeft: '15px',
                  fontFamily: 'Sora',
                  fontWeight: 'bold',
                  fontSize: '17px',
                  cursor: 'pointer',
                }}
                onClick={() => navigate('/')}
              >
                Legal Factory
              </Typography>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'ltr' ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </DrawerHeader>
            <Divider />
            <List sx={{ backgroundColor: '#fff5e1' }}>
              <ListItem button onClick={() => handleForgetPassword(output)}>
                <ListItemIcon>
                  <VpnKeyIcon />
                </ListItemIcon>
                <ListItemText
                  disableTypography='true'
                  sx={{
                    fontFamily: 'Sora',
                  }}
                >
                  Change Password
                </ListItemText>
              </ListItem>
              <ListItem button onClick={handleLogout}>
                <ListItemIcon>
                  <PowerSettingsNewIcon />
                </ListItemIcon>
                <ListItemText
                  disableTypography='true'
                  sx={{
                    fontFamily: 'Sora',
                  }}
                >
                  Logout
                </ListItemText>
              </ListItem>
            </List>
            <Divider />
          </Drawer>
          <Main open={open} sx={{ width: '100%' }}>
            <DrawerHeader
              sx={{
                width: '100%',
              }}
            />
            <Grid
              container
              spacing={0}
              sx={{
                justifyContent: 'center',
                width: '100%',
              }}
            >
              <Grid
                item
                md={6}
                sm={12}
                xs={12}
                sx={{
                  display: 'flex',
                  justifyContent: 'left',
                  alignItems: 'center',
                  marginTop: '-30px',
                  boxShadow: '0px 0px 0px 0px',
                }}
              >
                <Paper
                  component='form'
                  sx={{
                    p: '2px 4px',
                    display: 'flex',
                    alignItems: 'center',
                    width: ['100%', '100%', '350px', '80%', '80%'],
                    borderRadius: '20px',
                    backgroundColor: '#ffedd1',
                    marginTop: '100px',
                    // filter: `drop-shadow(0 0.2rem 0.09rem grey)`,
                    boxShadow: '0px 0px 0px 0px',
                  }}
                >
                  <IconButton
                    type='submit'
                    sx={{ p: '10px' }}
                    aria-label='search'
                  >
                    <SearchIcon />
                  </IconButton>
                  <TextField
                    fullWidth
                    value={query}
                    placeholder='Search'
                    variant='standard'
                    InputProps={{
                      disableUnderline: true,
                    }}
                    size='small'
                    border='none'
                    sx={{
                      placeholder: 'Search',
                      '& input::placeholder': {
                        fontFamily: 'Sora',
                      },
                    }}
                    borderRadius='30px'
                    onChange={handleOnSearch}
                  />
                </Paper>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                sx={{
                  mx: 0,
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <CardContent
                  sx={{
                    backgroundColor: '#FFEDD1',
                    boxShadow: 'black',
                    cursor: 'pointer',
                    width: ['100%', '100%', '100%', '100%', '70%'],
                    borderRadius: '20px',
                    marginTop: '60px',
                    // filter: `drop-shadow(0 0.2rem 0.09rem grey)`,
                    height: ['100px', '100px', '70px', '60px', '60px'],
                  }}
                >
                  <Grid container sx={{ marginBottom: '-100px' }}>
                    <Grid item xs={12} sm={12} md={6} sx={{}}>
                      <Typography
                        gutterBottom
                        variant='h5'
                        component='h2'
                        color='#703C00'
                        fontWeight='bold'
                        fontFamily='Sora'
                        display='flex'
                        justifyContent='center'
                        alignItems='center'
                        fontSize='19px'
                        sx={{ py: 0.2 }}
                      >
                        Total Enquiries
                      </Typography>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                      <Typography
                        variant='body2'
                        component='p'
                        color='#A56203'
                        fontFamily='Sora'
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          fontSize: ['12px', '15px', '15px', '15px', '15px'],
                          py: 0.5,
                        }}
                      >
                        {output.length} as of {new Date().toLocaleString()}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Grid>
            </Grid>
            <br />
            <br />
            <br />
            {!clientData.isLoading ? (
              <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <Typography
                  gutterBottom
                  variant='h5'
                  component='h2'
                  color='black'
                  fontWeight='bold'
                  fontFamily='Sora'
                  display='flex'
                  justifyContent='left'
                  alignItems='left'
                  paddingTop='10px'
                  fontSize='20px'
                  sx={{
                    // backgroundColor: '#703C00',
                    px: 5,
                    my: 3,
                  }}
                >
                  All Enquiries
                </Typography>
                <Divider />
                <TableContainer sx={{ maxHeight: 440 }}>
                  <Table stickyHeader aria-label='sticky table'>
                    <TableHead>
                      <TableRow>
                        {columns.map((column) => (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            style={{
                              minWidth: column.minWidth,
                              fontFamily: 'Sora',
                            }}
                          >
                            {column.label}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {output
                        .slice(
                          page * rowsPerPage,
                          page * rowsPerPage + rowsPerPage
                        )
                        .map((row, id) => {
                          return (
                            <TableRow
                              hover
                              role='checkbox'
                              tabIndex={-1}
                              key={row.code}
                              sx={
                                id % 2 !== 0
                                  ? {
                                      fontFamily: 'Sora',
                                    }
                                  : {
                                      fontFamily: 'Sora',
                                      backgroundColor: '#FFEFCF',
                                    }
                              }
                            >
                              {columns.map((column) => {
                                const value = row[column.id]
                                return (
                                  <TableCell
                                    sx={{
                                      fontFamily: 'Sora',
                                    }}
                                    key={column.id}
                                    align={column.align}
                                  >
                                    {column.format && typeof value === 'number'
                                      ? column.format(value)
                                      : value}
                                  </TableCell>
                                )
                              })}
                            </TableRow>
                          )
                        })}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  rowsPerPageOptions={[10, 25, 100]}
                  component='div'
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  onPageChange={handleChangePage}
                  onRowsPerPageChange={handleChangeRowsPerPage}
                />
              </Paper>
            ) : (
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <CircularProgress />
              </div>
            )}
          </Main>
        </Box>
      </div>

      <Typography
        sx={{
          display: 'flex',
          justifyContent: 'center',
          fontWeight: 'bold',
          //  backgroundColor: "#FFA511",
          color: '#4A2902',
          fontFamily: 'Sora',
          borderRadius: 4,
          my: 5,
        }}
      >
        <CopyrightIcon />
        2022 LegalFactory
      </Typography>
    </Container>
  )
}
