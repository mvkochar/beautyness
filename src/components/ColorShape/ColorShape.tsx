import React, { ReactNode } from 'react'
import classes from './ColorShape.module.css'

type ColorShapeProps = {
    children: ReactNode
}

const ColorShape = ({children}: ColorShapeProps) => {
    console.log(children)
  return (
    <div>
       <div className={classes.color_shape} style={{backgroundColor: `${children}`}}></div> 
       <div className={classes.color_value}>{children}</div>
    </div>
  )
}

export default ColorShape