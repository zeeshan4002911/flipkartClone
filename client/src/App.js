import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from "./components/home/Home";
import ContextProvider from './context/DataProvider';

import { Box } from '@mui/material';

function App() {
    return (
        <ContextProvider>
            <Header />
            <Box style={{ marginTop: 55}}>
                <Home />
            </Box>
        </ContextProvider>
    )
}
export default App;