import {  Card, Col, Row } from 'antd';

const adminDetails = {
    profile: 'https://res.cloudinary.com/ddv2y93jq/image/upload/v1724391342/hupuikqtl0lsxkqjd2gg.png',
    name: 'John Doe',
    age: 45,
    phoneNumber: '(123) 456-7890',
};

const Profile = ()=>{
    const { profile, name, age, phoneNumber } = adminDetails;
            return (
                <div>
                    <Card style={{ width: '800px', height: '240px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                        <Row style={{ paddingLeft: '30px' }}>
                            <Col span={8}>
                                <img
                                    src={profile}
                                    alt="Admin Profile"
                                    style={{
                                        width: '180px',
                                        height: '180px',
                                        borderRadius: '50%',
                                        objectFit: 'cover',
                                        margin: 'auto',
                                        display: 'block'
                                    }}
                                />
                            </Col>
                            <Col span={16} style={{ paddingLeft: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                <h2>Admin Profile</h2>
                                <p style={{ margin: '0 0 5px 0' }}><strong>Name:</strong> {name}</p>
                                <p style={{ margin: '0 0 5px 0' }}><strong>Age:</strong> {age}</p>
                                <p style={{ margin: '0 0 5px 0' }}><strong>Phone Number:</strong> {phoneNumber}</p>
                            </Col>
                        </Row>
                    </Card>

                </div>
            );
}

export default Profile;