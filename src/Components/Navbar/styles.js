import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({


  row: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  container: {
    
    margin: "auto",
  },
  buttonFontSize: {
    fontSize: "11px",
    
  },

  AppBar: {
    backgroundColor: "#fff",
    backgroundSize: "cover",
   
  },
  mainLogo: {
    fontFamily:"Sora",
    fontWeight:"500",

    justifyContent: "left",
    "&:hover": {
      background: "transparent",
    },
  },

  avatar: {
    height: "100%",
    borderRadius: 0,
  },

 
}));
