'use client'
import React from 'react';
import { Col, Layout, Menu } from "antd";
import styles from "./AppLayout.module.css"


const AppLayout = ({children}) => {
    const { Header, Content, Footer, Sider } = Layout;
    return (
        <>
            <Header style={{ display: 'flex', alignItems: 'center' }}>
                <div className="demo-logo" />
                <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['2']}
                // items={items1}
                style={{ flex: 1, minWidth: 0 }}
                />
            </Header>
            <Layout  className={styles.layout}>
                <Content className={styles.layoutContent}>{children}</Content>

            </Layout>
        </>
    )
}

export default AppLayout
