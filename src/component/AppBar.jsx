import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import EditIcon from "@mui/icons-material/Edit";
import logo from "/Image/brainpad.png";
import { Link, useNavigate } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home'; 
import ExitToAppIcon from '@mui/icons-material/ExitToApp';



export default function ButtonAppBar() {
 const navigate = useNavigate();

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              component="div"
              sx={{
                flexGrow: 1,
                display: "flex",
                alignItems: "center",
                padding: "10px",
              }}
            >
              <img src={logo} alt="" className="h-14" />
              <span className="text-white pl-2 font-bold text-2xl">
                BrainPad
              </span>
            </Typography>
            <Link to='/home' >
              <Button
                color="contained"
                startIcon={<HomeIcon className="text-black text-xl" />}
                sx={{ backgroundColor: "white", marginRight:"10px" }}
              >
                <span className="text-black font-bold text-lg">
                  HOME
                </span>
              </Button>
            </Link>
            <Link to='/create' >
              <Button
                color="contained"
                startIcon={<EditIcon className="text-black text-xl" />}
                sx={{ backgroundColor: "white" }}
              >
                <span className="text-black font-bold text-lg">
                  Create Note
                </span>
              </Button>
            </Link>
            
              {
                localStorage.getItem('token') && <Button onClick={()=>{
                  localStorage.removeItem('token')
                     navigate('/')
                }}
                  color="contained"
                  startIcon={<ExitToAppIcon className="text-black text-xl" />}
                  sx={{ backgroundColor: "white" , marginLeft:"10px"}}
                >
                  <span className="text-black font-bold text-lg">
                    Logout
                  </span>
                </Button>
              }
          
           
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}
