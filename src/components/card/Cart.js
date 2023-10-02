import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';


function Cart (props){
  const bg = props.obj.col ? '#0D6EFD' : "#272B2F"
    return (
        <Card style = {{ width: "300px", borderColor: props.obj.bg, minWidth: "300px"}}className=" text-center bg-dark text-light border  border-secondary">
        <Card.Header variant="top" src="holder.js/100px180" style = {{background: bg}}className="border  border-secondary"><h3>{props.obj.name}</h3></Card.Header>
        <Card.Body className='d-flex flex-column justify-content-between'>
          <Container className="d-flex flex-row justify-content-center"><h1>${props.obj.price} </h1><h3 className="text-secondary">/mo</h3></Container>
          <Card.Text className='position-absolute mt-5 pt-4' style={{"paddingLeft": "55px", "paddingRight": "55px"}}>
           {props.obj.text}
          </Card.Text>
          <Button variant="primary" className=" " >{props.obj.btn}</Button>
        </Card.Body>
      </Card>
    )
}

export default Cart