import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function NewsCard(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title className='fs-1'>{props.title}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default NewsCard;