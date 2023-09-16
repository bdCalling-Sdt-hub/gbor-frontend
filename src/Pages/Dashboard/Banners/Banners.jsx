import { Button, Col, Row } from 'antd'
import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Modal, Upload } from 'antd';
import { Carousel } from 'antd';
import ImageUploader from 'react-image-upload'
import 'react-image-upload/dist/index.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination'
import "./Banners.css"


function Banners() {
    const [bannerImage, setBannerImage] = useState([]);

    const contentStyle = {
        height: '400px',
        width: "100%",
        borderRadius: "15px",
    };


    function getImageFileObject(imageFile) {


        setBannerImage([...bannerImage, imageFile])
    }

    function runAfterImageDelete(file) {
        console.log({ file })
    }



    return (
        <>
            <Row style={{ marginBottom: 30 }}>
                <Col lg={{ span: 24 }}>
                    <h2 style={{ fontWeight: 500 }}> Current Banners</h2>
                </Col>
            </Row>

            <Row style={{ marginBottom: 30 }}>
                <Col lg={{ span: 24 }}>
                    {
                        bannerImage.length > 0 ? <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
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
                            {
                                bannerImage?.map((item) => {
                                    return (
                                        <SwiperSlide>
                                            <img style={contentStyle} src={item.dataUrl} />
                                        </SwiperSlide>
                                    )
                                })
                            }



                        </Swiper> :
                            <div>
                                <img style={contentStyle} src='https://t4.ftcdn.net/jpg/04/70/29/97/360_F_470299797_UD0eoVMMSUbHCcNJCdv2t8B2g1GVqYgs.jpg' />
                            </div>
                    }

                </Col>
            </Row>




            <Row style={{ marginBottom: 30 }}>
                <Col lg={{ span: 24 }}>
                    <h2 style={{ fontWeight: 500 }}> Upload New Banners</h2>
                </Col>
            </Row>

            <Row style={{ marginBottom: 30 }}>
                <Col lg={{ span: 24 }} style={{ display: "flex", gap: 15 }}>

                    <ImageUploader
                        style={{ borderRadius: "10px" }}
                        onFileAdded={(img) => getImageFileObject(img)}
                        onFileRemoved={(img) => runAfterImageDelete(img)}
                    />
                    <ImageUploader
                        style={{ borderRadius: "10px" }}
                        onFileAdded={(img) => getImageFileObject(img)}
                        onFileRemoved={(img) => runAfterImageDelete(img)}
                    />
                    <ImageUploader
                        style={{ borderRadius: "10px" }}
                        onFileAdded={(img) => getImageFileObject(img)}
                        onFileRemoved={(img) => runAfterImageDelete(img)}
                    />
                    <ImageUploader
                        style={{ borderRadius: "10px" }}
                        onFileAdded={(img) => getImageFileObject(img)}
                        onFileRemoved={(img) => runAfterImageDelete(img)}
                    />
                </Col>

            </Row>

            <Row style={{ marginBottom: 30 }}>
                <Col lg={{ span: 24 }}>
                    <h2 style={{ fontWeight: 500 }}>Previously Upload</h2>
                </Col>
            </Row>

            <Row style={{ marginBottom: 30 }}>
                <Col lg={{ span: 24 }} style={{ display: "flex", gap: 15 }}>
                    <div style={{position:"relative",width:"130px",height:"130px",borderRadius:"10px",marginBottom:"20px"}}>
                       <img style={{width:"130px",height:"130px",borderRadius:"10px"}} src='https://www.fajarmag.com/wp-content/uploads/2022/12/no-non.jpg'/>
                       <Button style={{position: "absolute", top: "40%", left: "20%",border:"2px solid #fb7c29", color:"#fb7c29"}}>Remove</Button>
                    </div>

                    <div style={{position:"relative",width:"130px",height:"130px",borderRadius:"10px",marginBottom:"20px"}}>
                       <img style={{width:"130px",height:"130px",borderRadius:"10px"}} src='https://www.fajarmag.com/wp-content/uploads/2022/12/no-non.jpg'/>
                       <Button style={{position: "absolute", top: "40%", left: "20%",border:"2px solid #fb7c29", color:"#fb7c29"}}>Remove</Button>
                    </div>

                    <div style={{position:"relative",width:"130px",height:"130px",borderRadius:"10px",marginBottom:"20px"}}>
                       <img style={{width:"130px",height:"130px",borderRadius:"10px"}} src='https://www.fajarmag.com/wp-content/uploads/2022/12/no-non.jpg'/>
                       <Button style={{position: "absolute", top: "40%", left: "20%",border:"2px solid #fb7c29", color:"#fb7c29"}}>Remove</Button>
                    </div>

                    <div style={{position:"relative",width:"130px",height:"130px",borderRadius:"10px",marginBottom:"20px"}}>
                       <img style={{width:"130px",height:"130px",borderRadius:"10px"}} src='https://www.fajarmag.com/wp-content/uploads/2022/12/no-non.jpg'/>
                       <Button style={{position: "absolute", top: "40%", left: "20%",border:"2px solid #fb7c29", color:"#fb7c29"}}>Remove</Button>
                    </div>
                  
                </Col>
            </Row>
        </>
    )
}

export default Banners