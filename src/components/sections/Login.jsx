import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import clsx from "clsx";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import UserContext from "../context/UserContext";

function Login({ isOpen, handleClose }) {

    const {setCurrentUser, SaveAuth}=useContext(UserContext);

    const API=import.meta.env.VITE_API;

  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Formato inválido")
      .min(7)
      .max(50)
      .required("El email es requerido"),
    password: Yup.string().min(6).max(50).required("El password es requerido"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: LoginSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: async(values) => {
      console.log("VALUES", values);
      try {
        const response=await axios.post(`${API}/users/login`, values);
        if (response.status===200){
            SaveAuth(response.data);
            setCurrentUser(response.data);
            formik.resetForm();
            handleClose();
        } else {
            alert("Ocurrió un error")
        }
      } catch (error) {
        alert(`${error.response.data.message}`)
        console.log(error);
      }
    },
  });

  return (
    <>
      <Modal show={isOpen} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Ingresar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresar email"
                name="email"
                {...formik.getFieldProps("email")}
                className={clsx(
                  "form-control",
                  {
                    "is-invalid": formik.touched.email && formik.errors.email,
                  },
                  {
                    "is-valid": formik.touched.email && !formik.errors.email,
                  }
                )}
              />
              {formik.touched.email && formik.errors.email && (
                <div className="mt-2 text-danger fw-bolder">
                    <span role="alert">{formik.errors.email}</span>
                </div>
            )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password"
              name="password"
              {...formik.getFieldProps("password")}
              className={clsx("form-control",{
                'is-invalid': formik.touched.password && formik.errors.password
              },{
                'is-valid': formik.touched.password && !formik.errors.password
              })}
              />
              {formik.touched.password && formik.errors.password && (
                <div className="mt-2 text-danger fw-bolder">
                    <span role="alert">{formik.errors.password}</span>
                </div>
            )}
            </Form.Group>
            <div>
              <Button
                variant="secondary"
                className="mx-2"
                onClick={handleClose}
              >
                Cerrar
              </Button>
              <Button type="submit" variant="primary" className="mx-2" >
                Ingresar
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Login;
