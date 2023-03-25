import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function gitHubCard() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="../images/inhawaii.jpg" />
            <Card.Body>
                <Card.Title>Marco Dillanes</Card.Title>
                <Card.Text>
                    Currently playing Resident Evil 4, lots of apex legends and lots of anime and chilling at my desk!
                </Card.Text>
                <Button variant="primary">Click Here!</Button>
            </Card.Body>
        </Card>
    );
}

export default gitHubCard;