// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import { Container, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import './Form.scss';

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
    mode: 'onBlur',
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
      <Form onSubmit={handleSubmit(formSubmit)} autoComplete="none">
        <Form.Group className="mb3" controlId="formBasicEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            isInvalid={errors.email !== undefined}
            placeholder="Enter email"
            role={'presentation'}
            autoComplete="none"
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
            autoComplete="none"
            {...register('password', {
              required: 'Пожалуйста, укажите пароль.',
              pattern: {
                value: /^.{4,}$/,
                message: 'Неверный формат пароля',
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
