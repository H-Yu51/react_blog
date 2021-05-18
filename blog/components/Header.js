import React from 'react'
import '../static/style/components/header.css'

import {Row,Col, Menu} from 'antd'
import { HomeOutlined , VideoCameraOutlined, SmileOutlined } from '@ant-design/icons';
const Header = () => (
  <div className="header">
    <Row type="flex" justify="center">
        <Col  xs={24} sm={24} md={10} lg={15} xl={12}>
            <span className="header-logo"><a href="/">千里烟波</a></span>
            <span className="header-txt">暮霭沉沉楚天阔</span>
        </Col>

        <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
            <Menu  mode="horizontal">
                <Menu.Item key="home">
                 <HomeOutlined />
                 <a href="/">首页</a>
                    
                </Menu.Item>
                <Menu.Item key="video">
                <VideoCameraOutlined />
                    发现
                </Menu.Item>
                <Menu.Item key="life">
                <SmileOutlined />
                    美好
                </Menu.Item>
            </Menu>
        </Col>
    </Row>
 </div>
)

export default Header