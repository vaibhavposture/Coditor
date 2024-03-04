import React from "react";
import {AppBar,Toolbar,styled} from '@mui/material';
import logo from './editor2.png'

const Container = styled(AppBar)`background:#000033; height:9vh `
const Title = styled(Toolbar)`display:flex;gap:1rem`

    const Header = ()=>{
        return(
           <Container>
            <Title>
                <img src={logo} alt="Code Pen" style={{ width: '40px',height:'40px'}}/>
                <h2>Coditor</h2>
            </Title>
           </Container>
        )
    }

export default Header;