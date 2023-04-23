import React from 'react';
import Header from './components/header/Header';
import Home from "./components/home/Home";
import DataProvider from './context/DataProvider';

import { Box } from '@mui/material';

function App() {
    return (
        <DataProvider>
            <Header />
            <Box style={{ marginTop: 55}}>
                <Home />
            </Box>
        </DataProvider>
    )
}
export default App;