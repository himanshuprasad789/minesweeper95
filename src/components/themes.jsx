import React ,{useState}from 'react'
import {Toolbar,Button,List,ListItem} from 'react95'

import themesarr from '../utils/themesarr'


const Themes = ({setTheme}) => {
    const [openthemeList, setOpenthemeList] = useState(false)
    console.log('Themes rerenders')
  return (
    <Toolbar>
        <Button
        onClick={()=> setOpenthemeList(!openthemeList)}
        >
          Themes
        </Button>
        {openthemeList && (
          <List
          style={{
            position: 'absolute',
            left: '0',
            top: '100%',
            zIndex:'2'
          }}>
              {themesarr.map((t,i)=>{
                  return <ListItem key={i} onClick={()=>{
                    setOpenthemeList(false);
                      setTheme(i)
                  }     
                  }>{t.name}</ListItem>
              })}
           {/* <ListItem onClick={()=>{
               setOpenthemeList(false)
               setTheme(0)
           }}>original</ListItem>
           <ListItem onClick={()=>{
               setOpenthemeList(false)
               setTheme(1)
           }}>vaporTeal</ListItem>
           <ListItem onClick={()=>{
               setOpenthemeList(false)
               setTheme(2)
           }}>tokyoDark</ListItem>
           <ListItem onClick={()=>{
               setOpenthemeList(false)
               setTheme(3)
           }}>aiee</ListItem>
           <ListItem onClick={()=>{
               setOpenthemeList(false)
               setTheme(4)
           }}>ash</ListItem>
           <ListItem onClick={()=>{
               setOpenthemeList(false)
               setTheme(5)
           }}>blackandWhite</ListItem>
           <ListItem onClick={()=>{
               setOpenthemeList(false)
               setTheme(6)
           }}>blue</ListItem>
           <ListItem onClick={()=>{
               setOpenthemeList(false)
               setTheme(7)
           }}>brick</ListItem>
           <ListItem onClick={()=>{
               setOpenthemeList(false)
               setTheme(8)
           }}>candy</ListItem>
           <ListItem onClick={()=>{
               setOpenthemeList(false)
               setTheme(9)
           }}>counterStrike</ListItem>
           <ListItem onClick={()=>{
               setOpenthemeList(false)
               setTheme(10)
           }}>darkTeal</ListItem>
           <ListItem onClick={()=>{
               setOpenthemeList(false)
               setTheme(11)
           }}>modernDark</ListItem>
           <ListItem onClick={()=>{
               setOpenthemeList(false)
               setTheme(12)
           }}>water</ListItem> */}
          </List>
        )}
      </Toolbar>
  )
}

export default Themes
//  [original,vaporTeal,tokyoDark,aiee,ash,blackandWhite,blue,brick,candy,counterStrike,darkTeal,modernDark,water]