// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import { Container, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

type FormValues = {
  email: string;
  password: string;
};

function BasicExample() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    mode: 'onTouched',
    reValidateMode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
    },
  });
  console.log(errors);

  const formSubmit = (data: FormValues) => {
    reset();
    console.log(data);
  };
  return (
    <Container className="pt-5">
      <Form onSubmit={handleSubmit(formSubmit)}>
        <Form.Group className="mb3" controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            isInvalid={errors.email !== undefined}
            placeholder="Enter email"
            {...register('email', {
              required: 'Пожалуйста, заполните поле',
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: 'Неверный формат email',
              },
            })}
          />
          <Form.Control.Feedback type="invalid">
            {String(errors.email?.message)}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>

          <Form.Control
            type="password"
            isInvalid={errors.password !== undefined}
            placeholder="Password"
            {...register('password', {
              required: 'Пожалуйста, укажите пароль.',
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: 'Неверный формат email',
              },
            })}
          />
          <Form.Control.Feedback type="invalid">
            {String(errors.password?.message)}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group
          className="mb3"
          controlId="formBasicChecbox"
          onChange={() => {
            console.log(errors);
          }}
        >
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
