import { Col, Divider, Pagination, Row } from 'antd'
import React from 'react'
import "./Notification.css"

function Notification() {
  return (
    
    <div>
        <Row>
    <h2 style={{fontSize: "30px",marginBottom:"30px"}}>
     All Notifications
    </h2>

    {
      [...Array(5).keys()].map((_,index)=>{
        return(
            <Col lg={{span:24}}>
            <div className='single-notification' style={{display:"flex",alignItems:"center"}}>
                <div className='user-image' style={{marginRight:"50px"}}>
                      <img style={{height:"70px",width:"70px",borderRadius:"100%",border:"2px solid gray"}} src='https://img.freepik.com/free-photo/everything-is-okay-cheerful-friendly-looking-caucasian-guy-with-moustache-beard-raising-hand-with-ok-great-gesture-giving-approval-like-having-situation-control_176420-22386.jpg'/>
                </div>
                <div className=''>
                      <p><span>Sanchez haro manuel</span> start a new trip at 5pm. Trip No.56. Trip started from Mexico city.....</p>
                      <p style={{color:"gray",marginTop:"10px"}}>1hr ago</p>
                </div>
            </div>
           
             <Divider/> 
            
            </Col>
           
            
        )
      })  
    }
   
    </Row>
    <Row>
         <Col lg={{span:12}} style={{marginBottom:'20px'}}>
            <h1 style={{fontSize:"20px",color:"#fb7c29"}}>Showing 1-10 OF 250</h1>
         </Col>
         <Col lg={{span:8,offset:4}}>
           <Pagination defaultCurrent={1} total={5000} showQuickJumper={false} showSizeChanger={false}/>
         </Col>
    </Row>

    </div>
  )
}

export default Notification