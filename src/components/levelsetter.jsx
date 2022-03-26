import React,{useState} from 'react'
import {List, ListItem, Toolbar,Button } from "react95";

const Levelsetter = ({levelSetter}) => {
  const [openlevelList, setOpenlevelList] = useState(false);
  console.log('levelsetter rerenders')
  return (
    <Toolbar>
        <Button
          onClick={() => {
            setOpenlevelList(!openlevelList);
          }}
        >
          level
        </Button>
        {openlevelList && (
          <List
          style={{
            position: 'absolute',
            left: '0',
            top: '100%',
            zIndex:'2'
          }}>
            <ListItem onClick={(e)=>{
                setOpenlevelList(false)
                levelSetter(e)
            }}>easy</ListItem>
            <ListItem onClick={(e)=>{
                setOpenlevelList(false)
                levelSetter(e)
            }}>medium</ListItem>
            <ListItem onClick={(e)=>{
                setOpenlevelList(false)
                levelSetter(e)
            }}>hard</ListItem>
          </List>
        )}
      </Toolbar>
  )
}

export default Levelsetter