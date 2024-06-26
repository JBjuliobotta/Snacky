import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import clsx from "clsx";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateProducts = () => {


  const API=import.meta.env.VITE_API;
  const navigate=useNavigate();

  const ProductSchema = Yup.object().shape({
    title: Yup.string()
      .min(4, "Mín. 4 caracteres")
      .max(200, "Máx. 200 carateres")
      .required("El título es requerido"),
    description: Yup.string()
      .min(10, "Mín. 10 caracteres")
      .max(200, "Máx. 200 carateres")
      .required("La descripción es requerida"),
    price: Yup.number().typeError("El precio debe ser un número").min(1, "El precio debe ser distinto de 0").max(999999, "El precio no puede ser mayor 999999").required("El precio es requerido"),
    stock: Yup.number().typeError("El stock debe ser un número").required("El stock es requerido"),
    image: Yup.string().required("Una imágen es requerida"),
    category: Yup.string().required("La categoría es requerida"),
  });

  const initialValues = {
    title: "",
    description: "",
    price: "",
    stock: "",
    image: "",
    category: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema: ProductSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit:  (values) => {
      Swal.fire({
        title: "Estás seguro de guardar el producto?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Guardar"
      }).then(async(result) => {
        if (result.isConfirmed) {
          try {
            const response=await axios.post(`${API}/products`, values);
            if(response.status===201){
              formik.resetForm();
              Swal.fire({
                title: "Éxito!",
                text: "Se creó un nuevo producto",
                icon: "success"
              });
              navigate('/administration');
            }
          } catch (error) {
            console.log("ERROR--", error);
          }

        }
      });
      
      
    }
  });

  return (
    <>
      <div className=" container py-3 my-3">
        <Button variant="secondary" onClick={()=>navigate(-1)}>Atras</Button>
        <div className="text-center">
          <h2>Crear Producto</h2>
        </div>
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Título</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese un título del producto"
              minLength={4}
              maxLength={200}
              required
              name="title"
              {...formik.getFieldProps("title")}
              className={clsx("form-control",{
                'is-invalid': formik.touched.title && formik.errors.title
              },{
                'is-valid': formik.touched.title && !formik.errors.title
              })}
            />
            {formik.touched.title && formik.errors.title && (
                <div className="mt-2 text-danger fw-bolder">
                    <span role="alert">{formik.errors.title}</span>
                </div>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese una descripción del producto"
              as="textarea"
              rows={3}
              name="description"
              minLength={10}
              maxLength={200}
              required
              {...formik.getFieldProps("description")}
              className={clsx("form-control",{
                'is-invalid': formik.touched.description && formik.errors.description
              },{
                'is-valid': formik.touched.description && !formik.errors.description
              })}
            />
            {formik.touched.description && formik.errors.description && (
                <div className="mt-2 text-danger fw-bolder">
                    <span role="alert">{formik.errors.description}</span>
                </div>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="price">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese el precio del producto"
              name="price"
              minLength={1}
              maxLength={9}
              required
              {...formik.getFieldProps("price")}
              className={clsx("form-control",{
                'is-invalid': formik.touched.price && formik.errors.price
              },{
                'is-valid': formik.touched.price && !formik.errors.price
              })}
            />
            {formik.touched.price && formik.errors.price && (
                <div className="mt-2 text-danger fw-bolder">
                    <span role="alert">{formik.errors.price}</span>
                </div>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="stock">
            <Form.Label>Stock</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ingrese el stock del producto"
              name="stock"
              minLength={1}
              maxLength={9}
              required
              {...formik.getFieldProps("stock")}
              className={clsx("form-control",{
                'is-invalid': formik.touched.stock && formik.errors.stock
              },{
                'is-valid': formik.touched.stock && !formik.errors.stock
              })}
            />
            {formik.touched.stock && formik.errors.stock && (
                <div className="mt-2 text-danger fw-bolder">
                    <span role="alert">{formik.errors.stock}</span>
                </div>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="img">
            <Form.Label>Imágen</Form.Label>
            <Form.Control
              type="text"
              placeholder="Coloque una imágen para el producto"
              name="image"
              required
              {...formik.getFieldProps("image")}
              className={clsx("form-control",{
                'is-invalid': formik.touched.image && formik.errors.image
              },{
                'is-valid': formik.touched.image && !formik.errors.image
              })}
            />
            {formik.touched.image && formik.errors.image && (
                <div className="mt-2 text-danger fw-bolder">
                    <span role="alert">{formik.errors.image}</span>
                </div>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="category">
            <Form.Label>Categoría</Form.Label>
            <Form.Select
            aria-label="category"
            name="category"
            required
              {...formik.getFieldProps("category")}
              className={clsx("form-control",{
                'is-invalid': formik.touched.category && formik.errors.category
              },{
                'is-valid': formik.touched.category && !formik.errors.category
              })}
            >
              <option>Seleccione una Categoría</option>
              <option value="Papas">Papas</option>
              <option value="Maní">Maní</option>
              <option value="Nachos">Nachos</option>
              <option value="Cheetos">Cheetos</option>
              <option value="Varios">Varios</option>
            </Form.Select>
            {formik.touched.category && formik.errors.category && (
                <div className="mt-2 text-danger fw-bolder">
                    <span role="alert">{formik.errors.category}</span>
                </div>
            )}
          </Form.Group>
          <Button variant="danger" type="submit" className="mb-3">
            Guardar
          </Button>
        </Form>
      </div>
    </>
  );
};

export default CreateProducts;
