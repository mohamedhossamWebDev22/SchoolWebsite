import Card from 'react-bootstrap/Card';

function CardComp(props) {
  return (
    <Card className='hov m-2'>
      <Card.Img className="cardImg mx-auto p-3" variant="top" src={props.src} />
      <Card.Body>
        <Card.Title className="text-center">{props.title}</Card.Title>
        <Card.Text className="text-center fontAra">
          {props.txt}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardComp;