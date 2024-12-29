import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { toast } from "react-toastify";
import axios from 'axios';
import { useNavigate } from "react-router-dom";



export default function FormDialog({ open , setopen, text, settext }) {

  const navigate = useNavigate();
  
function handleClose() {
    setopen(false);
}



async function postData(event){

    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const formJson = Object.fromEntries((formData).entries());
    
    const {username} = formJson;
    const url =  username ? 'http://localhost:5000/auth/register' : 'http://localhost:5000/auth/login'

     try{
      const response = await fetch(url, {
        method: 'POST', // Specify HTTP method as POST
        headers: {
          'Content-Type': 'application/json', // Specify JSON
        },
        body: JSON.stringify(formJson), // Convert the form data to JSON
      });
      
      const data = await response.json();
      const { token, message } = data;
    
           
          if(response.ok) {
             toast.success(message)
             localStorage.setItem('token',token)
             navigate('/home')
          }
          else {
            toast.error(message);
          }

          }
       
    catch(err){
         console.log(err)
         toast.error(err)
     }
    handleClose();
}

  return (
    <React.Fragment>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: async (event) => {
            postData(event);
          },
        }}
      >
        <DialogTitle>{text}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            {
        text==='LOGIN' ? "Access Your World—Log In and Get Started!" :"Join Us Today—Your Journey Starts Here!"}
          </DialogContentText>
          { text === 'SIGN UP' &&  <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="username"
            label="User Name"
            type="text"
            fullWidth
            variant="standard"
          />}
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
          />
          {
            text === 'LOGIN' ? <span className="inline-block pt-5 text-xl text-blue-400 cursor-pointer underline" onClick={()=>settext('SIGN UP')}>Dont have Account ? SIGN UP NOW</span> :
            <span className="inline-block pt-5 text-xl text-blue-400 cursor-pointer underline" onClick={()=>settext('LOGIN')}>LOGIN with your registered Account</span>
          }
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
