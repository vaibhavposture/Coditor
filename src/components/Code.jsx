import React from "react";
import Editor from "./Editor";
import {Box,styled} from '@mui/material';
import { useContext } from "react";
import { DataContext } from "../context/DataProvider";


const Container = styled(Box)`display:flex; background-Color: #000033;`

const Code= ()=>{
const {html, setHtml,css,setCss,js,setJs} = useContext(DataContext)

    return(
        <Container style={{marginTop:'9vh'}}>
            <Editor heading="HTML" icon="/"color="#ff0000" value={html}  onChange={setHtml}/>
            <Editor heading="CSS" icon="#" color="#3366ff" value={css} onChange={setCss}/>
            <Editor heading="JavaScript" icon="()" color="#ffff00" value={js} onChange={setJs}/>
        </Container>
    )
}

export default Code;