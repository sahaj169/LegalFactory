import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  OuterDiv: {
    display: "flex",
    flexDirection: "column",
    marginBottom:"0px"
    
  },
  UpperDiv: {
    display: "flex",
    flexDirection: "row",
  

    
    // backgroundColor: "#4A2902",
  },
  UpperDivMobile: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#4A2902",
  },

  logoDiv: {
    // 
    display: "flex",
    flexDirection: "column",
    marginTop: "2%",
  },

  subLogoDiv: {
    display: "flex",
  },

  IconDiv: {
    display: "flex",
    marginBottom: "30px",
    justifyContent: "space-between",
    marginLeft: "5px",
  },
  IconDivMobile: {
    display: "flex",
    marginBottom: "30px",
    justifyContent: "space-between",
    marginLeft: "5px",
    marginRight: "20px",
  },
  avatar: {
    height: "100%",
    borderRadius: 0,
  },
  Image: {
    height: "80px",
    width: "300px",
  },

  bottomDiv: {
    height: "55px",
    backgroundColor: "#FFA511",
  },
  bottomDivMobile: {
    height: "40px",
    paddingBottom:"20px",
    backgroundColor: "#FFA511",
  },
  Services: {
    marginLeft: "0%",
    marginTop: "1%",
  },
  ServicesMobile: {
    marginLeft: "0%",
    marginTop: "4%",
    
   
  },
  servicesSub: {
    display: "flex",
    flexDirection: "column",
  },
}));
