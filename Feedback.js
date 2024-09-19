import {  Avatar, Collapse } from 'antd';

const { Panel } = Collapse;

export const generateRandomFeedback = () => {
    const feedbacks = [
        {
            profile: 'https://res.cloudinary.com/ddv2y93jq/image/upload/v1724391342/hupuikqtl0lsxkqjd2gg.png',
            username: 'John Doe',
            feedback: [
                'Great experience with the platform!',
                'The user interface is very intuitive.',
                'Customer support was responsive and helpful.',
                'Features are well-organized and easy to navigate.',
                'Overall performance is smooth and reliable.'
            ]
        },
        {
            profile: 'https://res.cloudinary.com/ddv2y93jq/image/upload/v1724391342/hupuikqtl0lsxkqjd2gg.png',
            username: 'Jane Smith',
            feedback: [
                'The user interface is very intuitive.',
                'Excellent design and layout.',
                'Quick loading times and smooth transitions.',
                'Helpful and clear error messages.',
                'Well-thought-out functionality and usability.'
            ]
        },
        {
            profile: 'https://res.cloudinary.com/ddv2y93jq/image/upload/v1724391342/hupuikqtl0lsxkqjd2gg.png',
            username: 'John Doe',
            feedback: [
                'Great experience with the platform!',
                'The user interface is very intuitive.',
                'Easy to find and use features.',
                'Stable performance across different devices.',
                'Effective and useful notifications.'
            ]
        },
        {
            profile: 'https://res.cloudinary.com/ddv2y93jq/image/upload/v1724391342/hupuikqtl0lsxkqjd2gg.png',
            username: 'John Doe',
            feedback: [
                'Great experience with the platform!',
                'The user interface is very intuitive.',
                'Customer support was responsive and helpful.',
                'Features are well-organized and easy to navigate.',
                'Overall performance is smooth and reliable.'
            ]
        },
        {
            profile: 'https://res.cloudinary.com/ddv2y93jq/image/upload/v1724391342/hupuikqtl0lsxkqjd2gg.png',
            username: 'Jane Smith',
            feedback: [
                'The user interface is very intuitive.',
                'Excellent design and layout.',
                'Quick loading times and smooth transitions.',
                'Helpful and clear error messages.',
                'Well-thought-out functionality and usability.'
            ]
        },
        {
            profile: 'https://res.cloudinary.com/ddv2y93jq/image/upload/v1724391342/hupuikqtl0lsxkqjd2gg.png',
            username: 'John Doe',
            feedback: [
                'Great experience with the platform!',
                'The user interface is very intuitive.',
                'Easy to find and use features.',
                'Stable performance across different devices.',
                'Effective and useful notifications.'
            ]
        }
    ];

    return feedbacks;
};

const feedbacks = generateRandomFeedback();

const Feedback = () => {
  return (
    <div >
                <h2>Feedback</h2>
                <Collapse style={{ margin: '20px' }} bordered={false} accordion expandIconPosition="end"  >
                    {feedbacks.map((feedback, index) => (
                        <Panel header={
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Avatar
                                    src={feedback.profile}
                                    style={{ marginRight: '10px', borderRadius: '50%' }}
                                />
                                {feedback.username}
                            </div>
                        } key={index}>
                            <p>{feedback.feedback}</p>
                        </Panel>
                    ))}
                </Collapse>
            </div>
  )
}

export default Feedback