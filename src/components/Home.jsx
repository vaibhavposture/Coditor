import React from "react"
import Header from "./Header";
import Code from "./Code";
import {Box} from '@mui/material';
import Result from "./Result";

function Home(){
    return(
        <Box>
            <Header/>
            <Code/>
            <Result/>
        </Box>
    )
}

export default Home;