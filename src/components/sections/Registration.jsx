import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import clsx from "clsx";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Swal from "sweetalert2";

const Registration = ({ showReg, handleCloseReg }) => {

  const API = import.meta.env.VITE_API;

  const RegistrationSchema = Yup.object().shape({
    name: Yup.string().min(3, "Mín. 3 caracteres").max(30,"Máx. 30 caracteres").required("El nombre de usuario es requerido").matches(/^[ÁÉÍÓÚA-Z][a-záéíóú]+(\s+[ÁÉÍÓÚA-Z]?[a-záéíóú]+)*$/, "El campo sólo acepta letras"),
    email: Yup.string()
      .email("Formato inválido")
      .min(7, "Debe tener mínimo 7 caracteres")
      .max(20, "Debe tener máximo 20 caracteres")
      .required("El email es requerido"),
    password: Yup.string().min(8, "Debe tener mínimo 8 caracteres").max(16, "Debe tener máximo 16 caracteres").required("El password es requerido").matches(/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/, "La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico"),
    repeatpassword: Yup.string().required("Repetir el password es requerido").oneOf([Yup.ref("password"),null],"Los passwords no coinciden")
  });

  const initialValues = {
    name: "",
    email: "",
    password: "",
    repeatpassword: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: RegistrationSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: async (values) => {
      Swal.fire({
        title: "Estás seguro de registrarte como usuario?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Guardar"
      }).then(async(result) => {
        if (result.isConfirmed) {
          try {
            const response=await axios.post(`${API}/users/`, values);
            if(response.status===201){
              formik.resetForm();
              handleCloseReg();
              Swal.fire({
                title: "Éxito!",
                text: "Te has registrado",
                icon: "success"
              });
            }
          } catch (error) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Ocurrió un error, intenta de nuevo"
            });
            console.log(error);
          }

        }
      });
    },
  });
  return (
    <>
      <Modal show={showReg} onHide={handleCloseReg}>
        <Modal.Header closeButton={formik.resetForm}>
          <Modal.Title>Registro</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresar un nombre"
                name="name"
                minLength={3} maxLength={30} required
                {...formik.getFieldProps("name")}
                className={clsx(
                  "form-control",
                  {
                    "is-invalid": formik.touched.name && formik.errors.name,
                  },
                  {
                    "is-valid": formik.touched.name && !formik.errors.name,
                  }
                )}
              />
              {formik.touched.name && formik.errors.name && (
                <div className="mt-2 text-danger fw-bolder">
                  <span role="alert">{formik.errors.name}</span>
                </div>
              )}
            </Form.Group>

            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Correo electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresar email"
                name="email"
                minLength={7}
                maxLength={20} required
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
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                minLength={8} maxLength={16} required
                {...formik.getFieldProps("password")}
                className={clsx(
                  "form-control",
                  {
                    "is-invalid":
                      formik.touched.password && formik.errors.password,
                  },
                  {
                    "is-valid":
                      formik.touched.password && !formik.errors.password,
                  }
                )}
              />
              {formik.touched.password && formik.errors.password && (
                <div className="mt-2 text-danger fw-bolder">
                  <span role="alert">{formik.errors.password}</span>
                </div>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="repeatpassword">
              <Form.Label>Repetir Contraseña</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="repeatpassword"
                {...formik.getFieldProps("repeatpassword")}
                className={clsx(
                  "form-control",
                  {
                    "is-invalid":
                      formik.touched.repeatpassword && formik.errors.repeatpassword,
                  },
                  {
                    "is-valid":
                      formik.touched.repeatpassword && !formik.errors.repeatpassword,
                  }
                )}
              />
              {formik.touched.repeatpassword && formik.errors.repeatpassword && (
                <div className="mt-2 text-danger fw-bolder">
                  <span role="alert">{formik.errors.repeatpassword}</span>
                </div>
              )}
            </Form.Group>
            <div>
              <Button
                variant="secondary"
                className="mx-2"
                onClick={handleCloseReg}
              >
                Cerrar
              </Button>
              <Button type="submit" variant="danger" className="mx-2">
                Registrarse
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Registration;
