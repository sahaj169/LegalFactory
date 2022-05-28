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
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ListItemText from "@mui/material/ListItemText";
import CopyrightIcon from "@mui/icons-material/Copyright";
import PasswordIcon from "@mui/icons-material/Password";
import VisibilityIcon from "@mui/icons-material/Visibility";
import SearchIcon from "@mui/icons-material/Search";
import DonutSmallRoundedIcon from "@mui/icons-material/DonutSmallRounded";
import LocalAtmRoundedIcon from "@mui/icons-material/LocalAtmRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import LibraryBooksRoundedIcon from "@mui/icons-material/LibraryBooksRounded";
import Logo from "../../Assets/Images/favicon.png";
import { toast } from "react-toastify";
import {
  CardContent,
  CircularProgress,
  Container,
  Dialog,
  DialogContent,
  Grid,
  TextField,
  useTheme,
  useMediaQuery,
  Tooltip,
  Menu,
  MenuItem,
} from "@mui/material";
import useStyles from "./styles";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Fuse from "fuse.js";
import { useDispatch, useSelector } from "react-redux";
import { admin, deleteCollection } from "../../Actions/admin";
import { CLEAR_DATA, LOGOUT } from "../../Constants/actionTypes";
import AdminDashboardForm from "../../Components/EditAdminDashboard/AdminDashboardForm";
import { signUp } from "../../Actions/auth";
import { useNavigate } from "react-router";

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

  { num: 1 ,id: "type", label: "Type", minWidth: 100, align: "left" },
  { id: "name", label: "Name", minWidth: 100, align: "left" },
  {
    num: 2 ,
    id: "phoneNumber",
    label: "Phone Number",
    minWidth: 70,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  { num: 3 ,
    id: "email",
    label: "Email",
    minWidth: 100,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    num: 4 ,
    id: "city",
    label: "City",
    minWidth: 100,
    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    num: 5 ,
    id: "status",
    label: "Status",
    minWidth: 120,
    align: "left",
    format: (value) => value.toFixed(2),
  },

  {
    num: 6 ,
    id: "service",
    label: "Service",
    minWidth: 100,
    align: "left",
    format: (value) => value.toFixed(2),
  },

  {

    num: 7 ,
    id: "payment",
    label: "Payment",
    minWidth: 20,
    align: "left",
    format: (value) => value.toFixed(2),
  },
  {
    num: 8 ,
    id: "lastupdated",
    label: "Last Updated",
    minWidth: 100,
    align: "left",
    format: (value) => value.toFixed(2),
  },
  { num: 9 ,
    id: "date",
    label: "Date",
    minWidth: 70,
    align: "left",
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
  status,
  service,
  payment,
  query,
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
    status,
    service,
    payment,
    query,
    lastupdated,
    date,
  };
}

var originalRows = [];

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [openDialog, setOpenDialog] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [output, setOutput] = useState([]);
  const [query, setQuery] = useState("");
  const [totalLeadsDate, setTotalLeadsDate] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);

  const menuOpen = Boolean(anchorEl);

  const dispatch = useDispatch();
  const navigate= useNavigate()

  const adminData = useSelector((state) => state.admin);

  const { adminList } = adminData;
  const { isOpen} = adminData;


  useEffect(() => {
      setOpenDialog(false)
  }, [isOpen])

  const fuse = new Fuse(originalRows, {
    keys: [
      "columnId",
      "type",
      "name",
      "phoneNumber",
      "email",
      "city",
      "status",
      "service",
      "payment",
      "query",
      "lastupdated",
      "date",
    ],
  });

  const results = fuse.search(query);

  function handleOnSearch({ currentTarget = {} }) {
    const { value } = currentTarget;
    setQuery(value);
  }

  const handleDelete = (e, email, row) => {
    setTableData(row);
    

    const arr = output.filter((item) => item.columnId !== tableData.columnId);
    dispatch(deleteCollection(tableData.email, tableData.columnId));
    setOutput(arr);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleDialogOpen = (row) => {
    setOpenDialog(true);
   
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
    setAnchorEl(null);
  };

  const handleMenuOpen = (event, row) => {
    setTableData(row);
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setOutput([]);
    dispatch({ type: LOGOUT });
    dispatch({ type: CLEAR_DATA });
  };

  const handleSignUp = (row) => {
    setTableData(row);
    const password = tableData.name + "LegalFactory@123";
    dispatch(signUp(tableData.email, password));
    toast(
      "The Client's username is " +
        tableData.email +
        " The Client's password is " +
        password
    );
    setAnchorEl(null);
  };

  const theme2 = useTheme();
  const isMobile = useMediaQuery(theme2.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme2.breakpoints.down("md"));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setOutput([])
    const filteredRows = query
      ? results.map((result) => result.item)
      : originalRows

    setOutput(filteredRows)
  }, [query, results]);

  useEffect(() => {
    dispatch(admin());
  }, [dispatch]);

  useEffect(() => {
    originalRows = [];
    if (adminList) {
      setTotalLeadsDate(new Date().toLocaleString());
      adminList
        ?.map((doc) => ({ ...doc.data(), id: doc.id }))
        // eslint-disable-next-line
        ?.map((user) => {
          originalRows.push(
            createData(
              user.id,
              user.Type,
              user.Name,
              user.Phone,
              user.Email,
              user.City,
              user.Status,
              user.Service,
              user.Payment,
              user.Query,
              user.LastModified,
              new Date(user.EnquiryDate.seconds * 1000).toLocaleString()
            )
          )
        })
      originalRows.sort((a, b) => b.date.localeCompare(a.date));
      setOutput([...originalRows]);
    }
  }, [adminList]);

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
                Admin Dashboard
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
                  cursor:"pointer"
                }}
                onClick={()=>navigate("/")}
                
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
              <ListItem button sx={{ marginTop: '10px' }}>
                <ListItemIcon>
                  <DonutSmallRoundedIcon />
                </ListItemIcon>
                <ListItemText
                  disableTypography='true'
                  sx={{
                    fontFamily: 'Sora',
                  }}
                >
                  Overview
                </ListItemText>
              </ListItem>
              <ListItem button sx={{ marginTop: '10px' }}>
                <ListItemIcon>
                  <LocalAtmRoundedIcon />
                </ListItemIcon>
                <ListItemText
                  disableTypography='true'
                  sx={{
                    fontFamily: 'Sora',
                  }}
                >
                  Salary
                </ListItemText>
              </ListItem>
              <ListItem button sx={{ marginTop: '10px' }}>
                <ListItemIcon>
                  <PeopleRoundedIcon />
                </ListItemIcon>
                <ListItemText
                  disableTypography='true'
                  sx={{
                    fontFamily: 'Sora',
                  }}
                >
                  Employee
                </ListItemText>
              </ListItem>
              <ListItem button sx={{ marginTop: '10px' }}>
                <ListItemIcon>
                  <PersonRoundedIcon />
                </ListItemIcon>
                <ListItemText
                  disableTypography='true'
                  sx={{
                    fontFamily: 'Sora',
                  }}
                >
                  Agents
                </ListItemText>
              </ListItem>
              <ListItem button sx={{ marginTop: '10px' }}>
                <ListItemIcon>
                  <LibraryBooksRoundedIcon />
                </ListItemIcon>
                <ListItemText
                  disableTypography='true'
                  sx={{
                    fontFamily: 'Sora',
                  }}
                >
                  Articles
                </ListItemText>
              </ListItem>
              <Divider />
              <ListItem
                button
                onClick={handleLogout}
                sx={{ marginTop: '10px' }}
              >
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
                boxShadow: '0px 0px 0px 0px',
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
                        Total Enquiries:
                      </Typography>
                    </Grid>
                    {totalLeadsDate ? (
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
                          {originalRows.length} as of {totalLeadsDate}
                        </Typography>
                      </Grid>
                    ) : null}
                  </Grid>
                </CardContent>
              </Grid>
            
            </Grid>
            <br />
            <br />
            <br />
            {!adminData.isLoading ? (
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
                              color: '#9FA2B4',
                            }}
                          >
                            {column.label}
                          </TableCell>
                        ))}
                        <TableCell align='left' sx={{ color: '#9FA2B4' }}>
                          Query
                        </TableCell>
                        <TableCell align='left' sx={{ color: '#9FA2B4' }}>
                          Modify
                        </TableCell>
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
                              key={id}
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
                                return column.id === 'status' ? (
                                  <TableCell
                                    sx={{
                                      fontFamily: 'Sora',
                                    }}
                                    key={column.id}
                                    align={column.align}
                                  >
                                    <Container
                                      sx={
                                        row.status === 'In Progress'
                                          ? {
                                              borderRadius: 10,
                                              height: '20%',
                                              display: 'flex',
                                              justifyContent: 'center',
                                              width: '100%',
                                              backgroundColor: '#29CC97',
                                              color: 'white',
                                            }
                                          : row.status === 'Payment Complete'
                                          ? {
                                              borderRadius: 10,
                                              height: '20%',
                                              display: 'flex',
                                              justifyContent: 'center',
                                              width: '100%',
                                              backgroundColor: '#05E75C',
                                              color: 'white',
                                            }
                                          : row.status === 'On Hold'
                                          ? {
                                              borderRadius: 10,
                                              height: '20%',
                                              display: 'flex',
                                              justifyContent: 'center',
                                              width: '100%',
                                              backgroundColor: '#ffbf00',
                                              color: 'white',
                                            }
                                          : row.status ===
                                            'Payment Link Generated'
                                          ? {
                                              borderRadius: 10,
                                              height: '20%',
                                              display: 'flex',
                                              justifyContent: 'right',
                                              width: '100%',
                                              backgroundColor: '#6A94CC',
                                              color: 'white',
                                              paddingLeft: [
                                                '20px',
                                                '20px',
                                                '20px',
                                                '20px',
                                                '30px',
                                              ],
                                            }
                                          : row.status ===
                                            'Documentation Pending'
                                          ? {
                                              paddingLeft: [
                                                '20px',
                                                '20px',
                                                '20px',
                                                '20px',
                                                '30px',
                                              ],
                                              borderRadius: 10,
                                              height: '20%',
                                              display: 'flex',
                                              justifyContent: 'center',
                                              width: [
                                                '100%',
                                                '100%',
                                                '100%',
                                                '100%',
                                                '100%',
                                              ],
                                              backgroundColor: '#EC7063',
                                              color: 'white',
                                            }
                                          : row.status === 'Completed'
                                          ? {
                                              borderRadius: 10,
                                              height: '20%',
                                              display: 'flex',
                                              justifyContent: 'center',
                                              width: '100%',
                                              backgroundColor: 'green',
                                              color: 'white',
                                            }
                                          : row.status === 'InActive'
                                          ? {
                                              borderRadius: 10,
                                              height: '20%',
                                              display: 'flex',
                                              justifyContent: 'center',
                                              width: '100%',
                                              backgroundColor: '#EC7063',
                                              color: 'white',
                                            }
                                          : row.status === 'Rejected'
                                          ? {
                                              borderRadius: 10,
                                              height: '20%',
                                              display: 'flex',
                                              justifyContent: 'center',
                                              width: '100%',
                                              backgroundColor: '#F12B2C',
                                              color: 'white',
                                            }
                                          : row.status === 'Client Confirmed'
                                          ? {
                                              borderRadius: 10,
                                              height: '20%',
                                              display: 'flex',
                                              justifyContent: 'center',
                                              width: '100%',
                                              backgroundColor: 'green',
                                              color: 'white',
                                            }
                                          : {
                                              borderRadius: 10,
                                              height: '20%',
                                              display: 'flex',
                                              justifyContent: 'center',
                                              width: '100%',
                                              backgroundColor: 'black',
                                              color: 'white',
                                            }
                                      }
                                    >
                                      {column.format &&
                                      typeof value === 'number'
                                        ? column.format(value)
                                        : value}
                                    </Container>
                                  </TableCell>
                                ) : (
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

                              <TableCell>
                                <Tooltip
                                  leaveDelay={1000}
                                  sx={{ fontFamily: 'Sora' }}
                                  title={row.query}
                                >
                                  <IconButton>
                                    <VisibilityIcon
                                      sx={{
                                        color: 'black',
                                        '&:hover': {
                                          color: 'green',
                                        },
                                      }}
                                    />
                                  </IconButton>
                                </Tooltip>
                              </TableCell>

                              <TableCell>
                                <IconButton
                                  onClick={(e) => handleMenuOpen(e, row)}
                                >
                                  <MoreVertIcon />
                                </IconButton>

                                <Menu
                                  anchorEl={anchorEl}
                                  open={menuOpen}
                                  onClose={handleMenuClose}
                                >
                                  <MenuItem>
                                    <Tooltip
                                      leaveDelay={100}
                                      sx={{ fontFamily: 'Sora' }}
                                      title='Delete'
                                    >
                                      <IconButton
                                        onClick={(e) =>
                                          handleDelete(e, row.email, row)
                                        }
                                      >
                                        {/* {`Row ${row.name}`} */}

                                        <DeleteIcon
                                          sx={{
                                            color: 'red',
                                            '&:hover': {
                                              color: 'green',
                                            },
                                          }}
                                        />
                                      </IconButton>
                                    </Tooltip>
                                  </MenuItem>
                                  <MenuItem>
                                    <Tooltip
                                      leaveDelay={500}
                                      sx={{ fontFamily: 'Sora' }}
                                      title='Edit'
                                    >
                                      <IconButton
                                        onClick={() => handleDialogOpen(row)}
                                        sx={{
                                          color: '#353738',
                                          '&:hover': {
                                            color: 'green',
                                          },
                                        }}
                                      >
                                        {/* {`Row ${row.name}`} */}
                                        <EditIcon />
                                      </IconButton>
                                    </Tooltip>
                                  </MenuItem>

                                  {tableData.type === 'Client' && (
                                    <div>
                                      <MenuItem>
                                        <Tooltip
                                          leaveDelay={500}
                                          sx={{ fontFamily: 'Sora' }}
                                          title='Login Credentials'
                                        >
                                          <IconButton
                                            onClick={() => handleSignUp(row)}
                                            sx={{
                                              color: '#353738',
                                              '&:hover': {
                                                color: 'green',
                                              },
                                            }}
                                          >
                                            {/* {`Row ${row.name}`} */}
                                            <PasswordIcon />
                                          </IconButton>
                                        </Tooltip>
                                      </MenuItem>
                                    </div>
                                  )}

                                  <Dialog
                                    sx={
                                      isMobile
                                        ? {
                                            width: '100%',
                                            display: 'flex',
                                            justifyContent: 'center',
                                          }
                                        : isTablet
                                        ? {
                                            width: '100%',
                                            display: 'flex',
                                            justifyContent: 'center',
                                          }
                                        : {
                                            width: '100%',
                                          }
                                    }
                                    open={openDialog}
                                    onClose={handleDialogClose}
                                    PaperProps={{
                                      style: { borderRadius: 20 },
                                    }}
                                  >
                                    <DialogContent
                                      sx={
                                        !isMobile
                                          ? {
                                              display: 'flex',
                                              justifyContent: 'center',
                                              px: 0,
                                              width: 500,
                                            }
                                          : {
                                              display: 'flex',
                                              justifyContent: 'center',
                                              px: 0,
                                              width: 300,
                                            }
                                      }
                                    >
                                      <AdminDashboardForm row={tableData} />
                                    </DialogContent>
                                  </Dialog>
                                </Menu>
                              </TableCell>
                            </TableRow>
                          )
                        })}
                    </TableBody>
                  </Table>
                </TableContainer>
                <TablePagination
                  rowsPerPageOptions={[5, 25, 100]}
                  component='div'
                  count={output.length}
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
