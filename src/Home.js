import { Divider } from "@mui/material"
import Music from "./Music"
import {useState} from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './index.css';

const Home = () => {
    const [list, setList] = useState([{firstplace:{music:"heat waves", By: "Glass Animal"}},{secondplace:{music:"cold heart", By: "Elton John"}}])
    console.log(list)
  return (
    <div >
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{backgroundColor:'#252249', height:"70px", paddingTop:"10px"}}>
                <Toolbar variant="dense">
                <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" color="inherit" component="div" >
                    Top Music Hits Of The Year
                </Typography>
                </Toolbar>
            </AppBar>
        </Box>
        
        <div className="container">
            <div className="header">
                <h3>Top 20 Streamed Musics Of 2022</h3>
                <h5>date</h5>
            </div>
            <div>
                {list.map((val,index) => {
                  <Music song={val}/> 
                })}

            </div>
            
        </div>
    </div>
  )
}

export default Home