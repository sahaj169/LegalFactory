import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
outerDiv:{
width:"70%",
borderRadius:"20px",
boxShadow: "0px 0px 10px 2px rgba(0, 0, 0, 0.25)"
},

heading:{
    backgroundColor:"#3D2C02",
    display:"flex",
    justifyContent:"center",
    borderRadius:"20px 20px 0px 0px"
},
contentDiv:{
    display:"flex",
    flexDirection:"column",
    backgroundColor:"white",
    padding:"3%",
    justifyContent:"space-between",
    borderRadius:"0px 0px 20px 20px",
   

},
CheckboxDiv:{
display:"flex"
},
buttonDiv:{
    display:"flex",
  
}
}));
