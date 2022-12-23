import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function BasicExample() {
    return (
        <Container>
            {/* <Row> */}
                {/* <Col lg={6} xl={4}> */}
                    <Form>
                        <Form.Group className='mb3' controlId='formBasicEmail'>
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type='email' placeholder='Enter email' />
                            <Form.Text className='text-muted'>
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className='mb3' controlId='formBasicPassword'>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type='password' placeholder='Password' />
                        </Form.Group>
                        <Form.Group className='mb3' controlId='formBasicChecbox'>
                            <Form.Check type='checkbox' label='Check me out' />
                        </Form.Group>
                        <Button type='submit' variant='primary'>
                            Submit
                        </Button>
                    </Form>
                {/* </Col> */}
            {/* </Row> */}
        </Container>
    );
}
export default BasicExample;
