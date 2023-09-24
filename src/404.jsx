import { Button } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
  return (
    <div style={{height:"100vh",width:"100vw",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
        <img src='https://www.seekpng.com/png/detail/212-2123411_404-error-error-404.png'/>
        <Button><Link to="/">Click here for go to home</Link></Button>

    </div>
  )
}

export default NotFound