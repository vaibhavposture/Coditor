import React from "react";
import {Box,styled} from '@mui/material';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import {Controlled as ControlledEditor} from 'react-codemirror2';
import { useState } from "react";


import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import '../App.css'


const Heading = styled(Box)`background: #00001a; 
                display:flex; 
                padding:9px 12px`

const Header = styled(Box)`display:flex; 
                background:#000033;
                color:#AAAEBC; 
                justify-content:space-between;
                font-weight:700`
                
const Container = styled(Box)`flex-grow:1;
                flex-basis:0;
                display:flex;
                flex-direction:column;
                padding:0px 8px 8px`


const Editor = ({heading,icon,color,value,onChange})=>{
    const [open,setOpen] = useState(true)

    const handleChange = (editor,data,value)=>{
        onChange(value)
    }
    return(
        <Container style={open ? null : {flexGrow: 0}}>
           <Header>
            <Heading>
                <Box component="span" 
                style={{
                    background:color,
                    color:"black",
                    height:'20px',width:'20px',
                    display:'flex',
                    placeContent:'center',
                    borderRadius:'5px',
                    marginRight:'5px',
                    paddingBottom:'2px'}}>{icon}
                </Box>
                {heading}
            </Heading>
            <CloseFullscreenIcon fontSize="small"
            style={{alignSelf:'center'}}
            onClick={()=> setOpen(prevState => !prevState)}/>
           </Header>
           <ControlledEditor className='controlled-editor'
           value={value}
           onBeforeChange={handleChange}
           options={{
            theme:'material',
            lineNumbers:true
    }}/>
           
        </Container>

    )
}

export default Editor;