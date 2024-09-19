import React, { useState, useEffect } from 'react';
import { Card, Col, Row, Avatar } from 'antd';

export const generateRandomUsers = (type) => {
    const users = {
        buyers: [
            { name: "John Doe", contact: "johndoe@example.com", phone: "+1234567890" },
            { name: "Jane Smith", contact: "janesmith@example.com", phone: "+0987654321" },
            { name: "Michael Johnson", contact: "michaelj@example.com", phone: "+1122334455" },
            { name: "Emily Davis", contact: "emilyd@example.com", phone: "+1223344556" }
        ],
        sellers: [
            { name: "John Doe", contact: "johndoe@example.com", phone: "+1234567890" },
            { name: "Jane Smith", contact: "janesmith@example.com", phone: "+0987654321" },
            { name: "Michael Johnson", contact: "michaelj@example.com", phone: "+1122334455" },
            { name: "Emily Davis", contact: "emilyd@example.com", phone: "+1223344556" }
        ],
        agents: [
            { name: "John Doe", contact: "johndoe@example.com", phone: "+1234567890" },
            { name: "Jane Smith", contact: "janesmith@example.com", phone: "+0987654321" },
            { name: "Michael Johnson", contact: "michaelj@example.com", phone: "+1122334455" },
            { name: "Emily Davis", contact: "emilyd@example.com", phone: "+1223344556" }
        ]
    };
    return users[type] || [];
};

const Users = ({ selectedKey }) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        if (selectedKey === '1') {
            setUsers(generateRandomUsers('buyers'));
        } else if (selectedKey === '2') {
            setUsers(generateRandomUsers('sellers'));
        } else if (selectedKey === '3') {
            setUsers(generateRandomUsers('agents'));
        }
    }, [selectedKey]);

    return (
        <div>
            <h2>{selectedKey === '1' ? 'Buyers' : (selectedKey === '2' ? 'Sellers' : 'Agents')}</h2>
            <Row gutter={16}>
                {users.map((user, index) => (
                    <Col span={8} key={index}>
                        <Card
                            bordered={false}
                            style={{
                                boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.2)',
                                marginBottom: '20px',
                                textAlign: 'center'
                            }}
                        >
                            <div style={{ paddingBottom: '20px' }}>
                                <Avatar
                                    src={selectedKey === '1' ? 'https://res.cloudinary.com/ddv2y93jq/image/upload/v1724392954/ju2qn4elg4oxqbeahnqw.jpg' : (selectedKey === '2' ? 'https://res.cloudinary.com/ddv2y93jq/image/upload/v1724392405/xchqy2m5bnc4w2nccbow.jpg' : 'https://res.cloudinary.com/ddv2y93jq/image/upload/v1724392136/rai9m9yhexppbgoogl5s.jpg')}
                                    size={100}
                                    style={{
                                        margin: 'auto',
                                        display: 'block',
                                        borderRadius: '50%',
                                        border: '2px solid #f0f0f0'
                                    }}
                                />
                            </div>
                            <div>
                                <h3><strong>Name:</strong> {user.name}</h3>
                                <p style={{ margin: '0' }}><strong>Contact:</strong> {user.contact}</p>
                                <p style={{ margin: '0' }}><strong>Phone:</strong> {user.phone}</p>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default Users;
