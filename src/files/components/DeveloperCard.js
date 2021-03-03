import { Card, Button } from 'react-bootstrap';
import Navbar from "../components/Navbar";

const DeveloperCard = ({who, image, content,name,post}) => {
    return <div>
        <Navbar/>
    <div className="col-sm-3 devCard">
    <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
            <Card.Title>{who}</Card.Title>
            <p>{name}</p>
                <div className="devCard__body">
                    <h6>{post}</h6>
                    <Card.Text>
                        {content}
                    </Card.Text>
                </div>
            <Button variant="primary" href={`https://github.com/${who}`}>Github</Button>
        </Card.Body>
    </Card>
    </div>
    </div>
}
export default DeveloperCard;