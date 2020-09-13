import React from "react"
import { Layout } from 'antd';
import ChaoticNavbar from '../components/navbar'

import 'antd/dist/antd.css';
import './layout.css'

const ChaoticLayout = ({children}) => 
  (
    <div className="chaotic">
      <Layout className="layout" hasSider={ false }>
        <ChaoticNavbar></ChaoticNavbar>
        <Layout.Content className="content">
          <div className="content-wrapper">
            { children }
          </div>
        </Layout.Content>
        <Layout.Footer className="footer">
          Copyright ©2020, ChaoticDesign
        </Layout.Footer>
      </Layout>
    </div>
  )

export default ChaoticLayout