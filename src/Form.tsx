import {FormEvent} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { ChangeEvent, useState } from 'react';

function BasicExample() {
  const [email, setEmail] = useState('');
  const handleInputChange = (event: ChangeEvent) => {
    const input = event.target as HTMLInputElement;
    console.log(input.value);
    setEmail(input.value);
  };
  const handleSubmit = (o: FormEvent<HTMLFormElement>) => {
    o.preventDefault();
    console.log(o);
    
  }
  return (
    <Container className='pt-5'>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group className="mb3" controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={handleInputChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a valid email.
          </Form.Control.Feedback>
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>
        <Form.Group className="mb3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb3" controlId="formBasicChecbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
export default BasicExample;
