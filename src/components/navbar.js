import React from 'react'
import { Layout, Menu } from 'antd'
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons'

import './navbar.css'

const ChaoticNavbar = () => 
  (
    <Layout.Header className="chaotic-navbar">
      <div className="logo" />
      <Menu className="menu" theme="dark" mode="horizontal">
        <Menu.Item>
          <a href="https://github.com/mkevanz">
            <GithubOutlined />
          </a>
        </Menu.Item>
        <Menu.Item>
          <a href="https://www.linkedin.com/in/mkevanz/">
            <LinkedinOutlined />
          </a>
        </Menu.Item>
      </Menu>
    </Layout.Header>
  )

export default ChaoticNavbar