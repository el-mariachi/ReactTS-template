// https://github.com/parthprajapati32/reacthookform/blob/84f1e1ce0210044313d8cd5123c7dc798724d140/src/components/BootstrapForm/index.js
import * as React from "react";
import {
    Container,
    Form,
    Button,
    // InputGroup,
    // FormControl
} from "react-bootstrap";

import { useForm } from "react-hook-form";

const App = () => {
    const initState = {
        email: "",
        password: "",
        confirmPassword: "",
        termsAndConditions: false
    };
    type FormType = typeof initState;

    const [initialValues] = React.useState(initState);

    const onSubmit = (values: FormType) => {
        console.log("Values:::", values);
        console.log("Values:::", JSON.stringify(values));
    };

    const onError = (error: any) => {
        console.log("ERROR:::", error);
    };

    const {
        register,
        handleSubmit,
        getValues,
        watch,
        formState: { errors }
    } = useForm({
        mode: "onTouched",
        reValidateMode: "onSubmit",
        // reValidateMode: "onChange",
        defaultValues: initialValues
    });

    React.useEffect(() => {
        const subscription = watch((value, { name, type }) => {
            console.log(">>", value, name, type);
            // {1: '1', 2: '9'} '2' 'change'
        });

        return () => subscription.unsubscribe();
    }, [watch]);

    return (
        <Container className="my-4">
            <Form onSubmit={handleSubmit(onSubmit, onError)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Correo</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Ingresar correo"
                        {...register("email", { required: "Correo es obligatorio" })}
                    />
                    {errors.email && (
                        <Form.Text className="text-danger">
                            {errors.email.message}
                        </Form.Text>
                    )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Contraseña"
                        {...register("password", { required: "Contraseña es obligatoria" })}
                    />
                    {errors.password && (
                        <Form.Text className="text-danger">
                            {errors.password.message}
                        </Form.Text>
                    )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Confirmar Contraseña</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Contraseña"
                        {...register("confirmPassword", {
                            required: "Confirmar contraseña es obligatorio"
                        })}
                    />
                    {errors.confirmPassword && (
                        <Form.Text className="text-danger">
                            {errors.confirmPassword.message}
                        </Form.Text>
                    )}
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        type="checkbox"
                        label="Acepto Términos y Condiciones"
                        {...register("termsAndConditions", {
                            required: "Términos y Condiciones es obligatorio"
                        })}
                    />
                    {errors.termsAndConditions && (
                        <Form.Text className="text-danger">
                            {errors.termsAndConditions.message}
                        </Form.Text>
                    )}
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
};

export default App;
