import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom"
import { BrowserRouter } from 'react-router-dom';
import { SqlQueryEditor } from './SqlQueryEditor/SqlQueryEditor';
import { Context } from './Context/Context';
import { Backdrop } from './Backdrop/Backdrop';
import { Snackbar } from './Snackbar/Snackbar';
import { Header } from './Header/Header';
import './App.css';




const App = () => {
  // BackDrop initialization
  const [BackdropOpen, setBackdropOpen] = useState(false);

  //Snackbar initialization
  const [snackbarOrigin, setSnackbarOrigin]= useState({vertical:'bottom', horizontal:'right'});
  const [snackbarDuration, setSnackbarDuration]= useState(1000);
  const [snackbarMessage, setSnackbarMessage]= useState("There is an error!");
  const [snackbarSeverity, setSnackbarSeverity]= useState("error");
  const [snackbarOpen, setSnackbarOpen]= useState(false);

  const handleSnackbarClose= (event, reason) => {
    if(reason==='clickaway') {
      return;
    }

    setSnackbarOpen(false);
  };

  const triggerSnackbar = (snackbarDuration, snackbarMessage, snackbarSeverity, snackbarOrigin) => {
    setSnackbarDuration(snackbarDuration);
    setSnackbarMessage(snackbarMessage);
    setSnackbarSeverity(snackbarSeverity);
    setSnackbarOrigin(snackbarOrigin);
    setSnackbarOpen(true);
  }

  return (
    <Context.Provider value={{setBackdropOpen, triggerSnackbar}}>
      <Header/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<SqlQueryEditor/>} />
      </Routes>
      </BrowserRouter>
      <Backdrop BackdropOpen={BackdropOpen} />
      <Snackbar snackbarOrigin={snackbarOrigin} snackbarOpen={snackbarOpen} handleSnackbarClose={handleSnackbarClose} snackbarMessage={snackbarMessage} snackbarDuration={snackbarDuration} snackbarSeverity={snackbarSeverity} />
    </Context.Provider>
  );


}

export default App;
