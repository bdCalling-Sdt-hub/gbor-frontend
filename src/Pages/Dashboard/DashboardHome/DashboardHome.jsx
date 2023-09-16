import { Col, Row } from "antd";
import React from "react";
import { LiaHandHoldingUsdSolid } from "react-icons/lia";
import "./DashboardHome.css";

import { BsFillCheckCircleFill } from "react-icons/bs";
import { GrHistory } from "react-icons/gr";
import { MdCarRental } from "react-icons/md";
import { SlRefresh } from "react-icons/sl";
import { AiOutlineDollarCircle } from "react-icons/ai";
import InvoiceTable from "./InvoiceTable";
import MostRentCarChart from "./MostRentCarChart";
import DailyRentChart from "./dailyRentChart";
import { Carousel } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination'

function DashboardHome() {

  const contentStyle = {
    height: '400px',
    width:"100%",
    borderRadius:"15px"
   
};

  const onChange = (pageNumber) => {
    console.log("Page: ", pageNumber);
  };

  return (
    <div>
    <Row style={{marginBottom:30}}>
                <Col>
                <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y,Autoplay]}
                 autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                
                 style={contentStyle}
     
    >
       
          <SwiperSlide>
            
            <img style={contentStyle} src="https://cssslider.com/sliders/demo-17/data1/images/picjumbo.com_hnck0391.jpg"/>
          
          </SwiperSlide>
          <SwiperSlide>
            
          <img style={contentStyle} src="https://cyberplexafrica.com/wp-content/uploads/2017/02/slider-img1.jpg"/>
          
          </SwiperSlide>
        
      
    
     
    </Swiper>
                </Col>
            </Row>
    <Row gutter={16} style={{marginBottom:"20px"}}>
      <Col className="gutter-row" style={{marginBottom:"10px"}} xs={{span:24}} sm={{span:24}} md={{span:12}} lg={{span:8}}>
         <div  className='income-card'>
            <AiOutlineDollarCircle style={{fontSize:"50px"}}/>
            <h1 style={{fontSize:"1.5rem",fontWeight:"300",marginTop:"15px",marginBottom:"15px"}}>Today's income</h1>
            <h3 style={{fontSize:"1.5rem",letterSpacing:".2rem",marginBottom:"15px"}}>$ 250.00</h3>
         </div>
      </Col>
      <Col className="gutter-row" style={{marginBottom:"10px"}} xs={{span:24}} sm={{span:24}} md={{span:12}} lg={{span:8}}>
         <div className='income-card'>
            <AiOutlineDollarCircle style={{fontSize:"50px"}}/>
            <h1 style={{fontSize:"1.5rem",fontWeight:"300",marginTop:"15px",marginBottom:"15px"}}>Weekly income</h1>
            <h3 style={{fontSize:"1.5rem",letterSpacing:"1px",marginBottom:"15px"}}>$ 250.00</h3>
        </div>
      </Col>
      <Col className="gutter-row" style={{marginBottom:"10px"}} xs={{span:24}} sm={{span:24}} md={{span:12}} lg={{span:8}}>
         <div  className='income-card'>
            <AiOutlineDollarCircle style={{fontSize:"50px"}}/>
            <h1 style={{fontSize:"1.5rem",fontWeight:"300",marginTop:"15px",marginBottom:"15px"}}>Monthly income</h1>
            <h3 style={{fontSize:"1.5rem",letterSpacing:"1px",marginBottom:"15px"}}>$ 250.00</h3>
         </div>
      </Col>
      
    </Row>
{/* 
    <Row gutter={16}>
      <Col className="gutter-row" style={{marginBottom:"10px"}} xs={{span:24}} sm={{span:24}} md={{span:12}} lg={{span:6}}>
         <div  className='rent-status' style={{backgroundColor:"#fff"}}>
            <MdCarRental style={{fontSize:"1.5rem",color:"#fb7c29"}}/>
            <div className='single-status'>
                <h2 style={{fontSize:"1.5rem",fontWeight:"600",marginTop:"10px",marginBottom:"10px",color:"#fb7c29"}}>Today's Rent</h2>
                <h3 style={{fontSize:"1.5rem",letterSpacing:"1px",color:"gray"}}>32</h3>
            </div>
            
         </div>
      </Col>
      <Col className="gutter-row" style={{marginBottom:"10px"}} xs={{span:24}} sm={{span:24}} md={{span:12}} lg={{span:6}}>
      <div  className='rent-status' style={{backgroundColor:"#fff"}}>
            <GrHistory style={{fontSize:"1.5rem",color:"#fb7c29"}}/>
            <div className='single-status'>
                <h2 style={{fontSize:"1.5rem",fontWeight:"600",marginTop:"10px",marginBottom:"10px",color:"#fb7c29"}}>Pendings</h2>
                <h3 style={{fontSize:"1.5rem",letterSpacing:"1px",color:"gray"}}>40</h3>
            </div>
            
         </div>
      </Col>
      <Col className="gutter-row" style={{marginBottom:"10px"}} xs={{span:24}} sm={{span:24}} md={{span:12}} lg={{span:6}}>
      <div  className='rent-status' style={{backgroundColor:"#fff"}}>
            <SlRefresh style={{fontSize:"1.5rem",color:"#fb7c29"}}/>
            <div className='single-status'>
                <h2 style={{fontSize:"1.5rem",fontWeight:"600",marginTop:"10px",marginBottom:"10px",color:"#fb7c29"}}>Ongoing</h2>
                <h3 style={{fontSize:"1.5rem",letterSpacing:"1px",color:"gray"}}>103</h3>
            </div>
            
         </div>
      </Col>
      <Col className="gutter-row" style={{marginBottom:"10px"}} xs={{span:24}} sm={{span:24}} md={{span:12}} lg={{span:6}}>
        <div className='rent-status' style={{backgroundColor:"#fff"}}>
            <BsFillCheckCircleFill style={{fontSize:"1.5rem",color:"#fb7c29"}}/>
            <div className='single-status'>
                <h2 style={{fontSize:"1.5rem",fontWeight:"600",marginTop:"10px",marginBottom:"10px",color:"#fb7c29"}}>Complete</h2>
                <h3 style={{fontSize:"1.5rem",letterSpacing:"1px",color:"gray"}}>562</h3>
            </div>
            
         </div>
      </Col>
    </Row> */}

    

      {/* <Row style={{ marginTop: "20px" }} gutter={24}>
        <Col lg={{ span: 12 }}>
          <DailyRentChart />
        </Col>
        <Col lg={{ span: 12 }}>
          <div
            className=""
            style={{
              border: "3px solid #fb7c29",
              padding: "30px",
              borderRadius: "15px",
              backgroundColor: "#fff",
            }}
          >
            <h1 style={{ color: "#fb7c29" }}>Most using car</h1>
            <MostRentCarChart />
          </div>
        </Col>
      </Row> */}

      <Row>
        <h2
          style={{ fontSize: "25px", margin: "30px 0px", fontWeight: "normal" }}
        >
          Transaction histroy
        </h2>
      </Row>
      <InvoiceTable />
    </div>
  );
}

export default DashboardHome;
