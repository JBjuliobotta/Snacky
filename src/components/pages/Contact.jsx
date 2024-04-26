import { Form, Button } from "react-bootstrap";

const Contact = () => {
    return (
        <div className="container py-3 my-3 ">
            <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email </Form.Label>
        <Form.Control type="email" placeholder="name@example.com" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Deja tus comentarios</Form.Label>
        <Form.Control as="textarea" rows={3} />
        <Button variant="primary" type="submit">
        Enviar
      </Button>
      </Form.Group>
    </Form>
             
                
        </div>
    );
};

export default Contact;