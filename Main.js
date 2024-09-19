import React, { useState } from 'react';
import { UsergroupAddOutlined, AppstoreOutlined, CommentOutlined, UserOutlined, MenuFoldOutlined, MenuUnfoldOutlined, ShoppingCartOutlined, TagOutlined, IdcardOutlined, PoweroffOutlined } from '@ant-design/icons';
import { Layout, Menu, Button, theme } from 'antd';
import Profile from './Profile';
import Properties, { generateRandomProperties } from './Properties';
import Users, { generateRandomUsers } from './Users';
import Feedback ,{ generateRandomFeedback } from './Feedback';
const { Header, Content, Sider } = Layout;

// Define the sidebar items
const items2 = [
    {
        key: 'sub1',
        icon: <AppstoreOutlined />,
        label: 'Properties', // Normal link
    },
    {
        key: 'sub2',
        icon: <UsergroupAddOutlined />,
        label: 'Users',
        children: [
            {
                key: '1',
                icon: <ShoppingCartOutlined />,
                label: 'Buyers',
            },
            {
                key: '2',
                icon: <TagOutlined />,
                label: 'Sellers',
            },
            {
                key: '3',
                icon: <IdcardOutlined />,
                label: 'Agents',
            },
        ],
    },
    {
        key: 'sub3',
        icon: <CommentOutlined />,
        label: 'Feedback', // Normal link
    },
];
const Main = () => {
    const [collapsed, setCollapsed] = useState(true);
    const [selectedKey, setSelectedKey] = useState('');
    const [properties, setProperties] = useState([]);
    const [buyers, setBuyers] = useState([]);
    const [sellers, setSellers] = useState([]);
    const [agents, setAgents] = useState([]);
    const [feedbacks, setFeedbacks] = useState([]);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };
    const handleMenuClick = (e) => {
        setSelectedKey(e.key);
        if (e.key === 'sub1') {
            setProperties(generateRandomProperties());
        } else if (e.key === '1') {
            setBuyers(generateRandomUsers('buyers'));
        } else if (e.key === '2') {
            setSellers(generateRandomUsers('sellers'));
        } else if (e.key === '3') {
            setAgents(generateRandomUsers('agents'));
        } else if (e.key === 'sub3') {
            setFeedbacks(generateRandomFeedback()); 
        }
    };
    const renderContent = () => {
        if (selectedKey === 'profile') {
            return (
                <div>
                    <Profile />
                </div>
            );
        }
        if (selectedKey === 'sub1') {
            // Display property cards
            return (
                <div>
                    <Properties />
                </div>
            );
        }
        if (selectedKey === '1' || selectedKey === '2' || selectedKey === '3') {
            return (
                <div>
                    <Users selectedKey={selectedKey} />
                </div>
            );
        }
        if (selectedKey === 'sub3') {
            return <Feedback />;
        }
        return <div>
        <Properties />
    </div>
    };
    return (
        <Layout>
            <Header
                style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    position: 'fixed',
                    width: '100%',
                    zIndex: '1'
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <Button
                        type="primary"
                        onClick={toggleSidebar}
                        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                        style={{ marginRight: 20, marginLeft: -30, background: '#001529' }}
                    />
                    <span style={{ color: 'white', fontWeight: 'bold', fontSize: '20px', marginRight: 16 }} key="home">
                        Admin Dashboard
                    </span>
                </div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    style={{
                        flex: 1,
                        minWidth: 0,
                        justifyContent: 'flex-end',
                    }}
                    onClick={handleMenuClick}
                >
                    <Menu.Item key="profile" style={{ color: '#f0f0f0' }} icon={<UserOutlined />}>Profile</Menu.Item>
                    <Menu.Item key="logout" style={{ color: '#f0f0f0' }} icon={<PoweroffOutlined />}>Logout</Menu.Item>
                </Menu>
            </Header>
            <Layout style={{ marginTop: 64 }}>
                <Sider
                    width={200}
                    collapsible
                    collapsed={collapsed}
                    trigger={null}
                    style={{
                        background: colorBgContainer,
                        position: 'fixed',
                        zIndex: '1',
                        height: '100%'
                    }}
                >
                    <Menu
                        mode="inline"
                        style={{
                            height: '100%',
                            borderRight: 0,
                        }}
                        items={items2}
                        onClick={handleMenuClick}
                    />
                </Sider>
                <Layout
                    style={{
                        padding: '0 24px 24px',
                        marginLeft: collapsed ? 64 : 155
                    }}
                >
                    <Content
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: 280,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        {renderContent()}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};
export default Main;