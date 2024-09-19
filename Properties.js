import { Card, Col, Row } from 'antd';

export const generateRandomProperties = () => {
    const properties = [
        {
            title: "Bhogapuram villa",
            address: "Near main road, Bhogapuram",
            profile:
                "https://plus.unsplash.com/premium_photo-1680100256112-2e1231d9d0df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZsYXR8ZW58MHx8MHx8fDA%3D",
            id: 1,
            type: "House",
            location: "Downtown",
            price: 350000,
            area: "1500 sqft",
            bedrooms: 3,
            bathrooms: 2,
            features: ["Garage", "Garden", "Swimming Pool"],
            description:
                "A beautiful house in the heart of the city with modern amenities.",
            seller: {
                name: "John Doe",
                contact: "johndoe@example.com",
                phone: "+1234567890",
            },
        },
        {
            title: "Srikakulam Flat",
            address: "Near main road, Srikakulam",
            profile:
                "https://plus.unsplash.com/premium_photo-1689609950112-d66095626efb?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            id: 2,
            type: "House",
            location: "Suburban Area",
            price: 120000,
            area: "5000 sqft",
            zoning: "Residential",
            features: ["Near Park", "Good Soil Quality"],
            description:
                "A spacious plot of land perfect for building your dream home.",
            seller: {
                name: "Jane Smith",
                contact: "janesmith@example.com",
                phone: "+0987654321",
            },
        },
        {
            title: "Vizianagaram Land",
            address: "Near main road, Vizianagaram",
            profile:
                "https://media.istockphoto.com/id/1027811130/photo/new-block-of-modern-apartments-stock-image.webp?b=1&s=612x612&w=0&k=20&c=t07R-M87qzo0-SFXM5P1lGLnVUrt1qQ62ywJI7RBBt0=",
            id: 3,
            type: "Flats",
            location: "Uptown",
            price: 450000,
            area: "2000 sqft",
            bedrooms: 4,
            bathrooms: 3,
            features: ["Rooftop Terrace", "Home Office", "Gym"],
            description: "A luxurious house with a modern design and premium finishes.",
            seller: {
                name: "Michael Johnson",
                contact: "michaelj@example.com",
                phone: "+1122334455",
            },
        },
        {
            title: "Visakhapatnam Office Space",
            address: "Near main road, Visakhapatnam",
            profile:
                "https://plus.unsplash.com/premium_photo-1684175656320-5c3f701c082c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmxhdHxlbnwwfHwwfHx8MA%3D%3D",
            id: 4,
            type: "House",
            location: "Countryside",
            price: 90000,
            area: "8000 sqft",
            zoning: "Agricultural",
            features: ["Fertile Land", "Near Water Source"],
            description:
                "A large plot of agricultural land, ideal for farming and livestock.",
            seller: {
                name: "Emily Davis",
                contact: "emilyd@example.com",
                phone: "+1223344556",
            },
        },
        {
            title: "Rajamundry Retail Space",
            address: "Near market road, Rajamundry",
            profile:
                "https://media.istockphoto.com/id/1391279777/photo/buildings-or-apartment-under-construction-with-storm-clouds-and-blue-sky.webp?b=1&s=612x612&w=0&k=20&c=JLnML96s6uYMd6QplyGHmisVIxui3KM56xSwpkhFPxE=",
            id: 5,
            type: "Flats",
            location: "Downtown",
            price: 350000,
            area: "1500 sqft",
            bedrooms: 3,
            bathrooms: 2,
            features: ["Garage", "Garden", "Swimming Pool"],
            description:
                "A beautiful house in the heart of the city with modern amenities.",
            seller: {
                name: "John Doe",
                contact: "johndoe@example.com",
                phone: "+1234567890",
            },
        },
        {
            title: "Tirupati Multifamily Housing",
            address: "Near temple road, Tirupati",
            profile:
                "https://plus.unsplash.com/premium_photo-1680100256017-c4270c309354?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZsYXR8ZW58MHx8MHx8fDA%3D",
            id: 6,
            type: "House",
            location: "Suburban Area",
            price: 120000,
            area: "5000 sqft",
            zoning: "Residential",
            features: ["Near Park", "Good Soil Quality"],
            description:
                "A spacious plot of land perfect for building your dream home.",
            seller: {
                name: "Jane Smith",
                contact: "janesmith@example.com",
                phone: "+0987654321",
            },
        },
        {
            title: "Guntur Industrial Warehouse",
            address: "Near highway, Guntur",
            profile:
                "https://plus.unsplash.com/premium_photo-1680100256112-2e1231d9d0df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZsYXR8ZW58MHx8MHx8fDA%3D",
            id: 7,
            type: "House",
            location: "Uptown",
            price: 450000,
            area: "2000 sqft",
            bedrooms: 4,
            bathrooms: 3,
            features: ["Rooftop Terrace", "Home Office", "Gym"],
            description: "A luxurious house with a modern design and premium finishes.",
            seller: {
                name: "Michael Johnson",
                contact: "michaelj@example.com",
                phone: "+1122334455",
            },
        },
        {
            title: "cityscaper Flat",
            address: "Near railway station, Anantapur",
            profile:
                "https://plus.unsplash.com/premium_photo-1671196048754-03a77d051dcb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZmxhdHxlbnwwfHwwfHx8MA%3D%3D",
            id: 8,
            type: "Flats",
            location: "Countryside",
            price: 90000,
            area: "8000 sqft",
            zoning: "Agricultural",
            features: ["Fertile Land", "Near Water Source"],
            description:
                "A large plot of agricultural land, ideal for farming and livestock.",
            seller: {
                name: "Emily Davis",
                contact: "emilyd@example.com",
                phone: "+1223344556",
            },
        },
    ];
    return properties;
};

const properties = generateRandomProperties();
const Properties = () => {
    return (
        <div>
            <h2>Property List</h2>
            <Row gutter={24}>
                {properties.map(property => (
                    <Col span={12} key={property.id}>
                        <Card
                            bordered={false}
                            style={{
                                width: '100%',
                                height: '250px',
                                padding: 0,
                                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.6)',
                                marginBottom: '20px',
                            }}
                        >
                            <div style={{ display: 'flex', flexDirection: 'row', gap: '5px' }}>
                                <div
                                    style={{
                                        width: '200px',
                                        height: '300px',
                                        overflow: 'hidden',
                                        position: 'relative',
                                    }}
                                >
                                    <img
                                        src={property.profile}
                                        alt={`Property ${property.id}`}
                                        style={{
                                            width: '100%',
                                            height: '70%',
                                            objectFit: 'cover',
                                        }}
                                    />
                                </div>
                                <div style={{ flex: 2, paddingLeft: 10, position: 'absolute', marginLeft: '210px' }}>
                                    <p style={{ margin: '0 0 5px 0' }}><strong>Title:</strong> {property.title}</p>
                                    <p style={{ margin: '0 0 5px 0' }}><strong>Price:</strong> {property.price}</p>
                                    <p style={{ margin: '0 0 5px 0' }}><strong>Size:</strong> {property.area}</p>
                                    <p style={{ margin: '0 0 5px 0' }}><strong>Location:</strong> {property.location}</p>
                                    <p style={{ margin: '0 0 5px 0' }}><strong>Address:</strong> {property.address}</p>
                                    <p style={{ margin: '0 0 5px 0' }}><strong>Features:</strong> {property.features.join(', ')}</p>
                                    <p style={{ margin: '0 0 5px 0' }}><strong>Description:</strong> {property.description}</p>
                                </div>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Properties;
