import React ,{useState}from 'react'
import { AppBar, Button } from 'react95'
// import Appbar from './appbar'
import HowtoPlay from './howtoplay';
const Footer = () => {
  const [openhowtoplay,setOpenhowtoplay]=useState(false);
  console.log('footer rerenders')
  return (
    <>
    <AppBar style={{position:'absolute',left:'0',top:'calc(100% - 45px)',height:'45px',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between',padding:'0 50px'}}>
        <Button onClick={()=>{setOpenhowtoplay(!openhowtoplay)}}>how to play</Button>
    </AppBar>
    {openhowtoplay && <HowtoPlay setOpenhowtoplay={setOpenhowtoplay} />}
    </>
  )
}

export default Footer