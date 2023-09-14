import { Button, Col, Input, Row } from 'antd'
import React from 'react'
import { UserOutlined,SearchOutlined } from '@ant-design/icons';
import HostKycTable from './HostKycTable';
function HostKyc() {
  return (
    <div>
        <Row style={{marginBottom:"30px"}}>
           <h2 style={{ fontSize: "30px", margin: "30px 0px" }}>
            KYC Settings
           </h2>  
             <Col lg={{span:24}}>
                <div className='' style={{display:"flex",gap:"15px"}}>
                    <Input size="large" placeholder="Search by name/email/phone" prefix={<SearchOutlined style={{color:"#cccccc"}}/>} />
                    <Button style={{height:"50px",width:"300px",backgroundColor:"#fb7c29",color:"#fff",fontSize:"20px"}}>Search</Button>
                </div>
             </Col>
         </Row>

         <Row>
           <h2 style={{ fontSize: "30px", margin: "30px 0px" }}>
            Host KYC List
           </h2>  
            <Col lg={{span:24}}>
                <HostKycTable/>
            </Col>
         </Row>
    </div>
  )
}

export default HostKyc