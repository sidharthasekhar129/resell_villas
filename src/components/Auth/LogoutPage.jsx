import { useNavigate } from "react-router-dom";
import { useAuth } from "../../provider/AuthProvider";
import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
 
const LogoutPage = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();
 

  const handleLogout = () => {
    setToken();

   
    localStorage.removeItem("me");

    navigate("/", { replace: true });

  };

  const [open, setOpen] = useState(true);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
    navigate(-1); 
  };

  // const handleLogouts = () => {
  //   // Perform logout action here
  //   setOpen(false);
  // };

  // setTimeout(() => {
  //   handleLogout();
  // }, 3* 1000);

  return (
    <>
      <div>
        {open && (
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Logout</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Are you sure you want to logout?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleLogout} color="primary" autoFocus>
                Logout
              </Button>
            </DialogActions>
          </Dialog>
        )}
      </div>
    </>
  );
};

export default LogoutPage;
