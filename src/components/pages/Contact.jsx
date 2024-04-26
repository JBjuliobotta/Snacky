import { Form, Button, FormGroup, FormLabel } from "react-bootstrap";
import Iframe from 'react-iframe'
import * as Yup from "yup";
import { useFormik } from "formik";
import clsx from "clsx";

const Contact = () => {
  const ComentariosSchema = Yup.object().shape({
    nombre: Yup.string()
      .min(4, "min 4 caract.")
      .max(20, "max 20 caract.")
      .required("Nombre y apellido son requeridos"),
    email: Yup.string()
      .min(15, "min.15 caract.")
      .max(40, "max. 40 caract.")
      .required("Direccion de correo requerida"),
   opcionlugar: Yup.string().required("Tu ubicacion es requerida"),
     comentarios: Yup.string()
       .min(15, "min.15 caract.")
       .max(200, "max. 200 caract.")
       .required("Tus comentarios son requeridos"),
  });
  const initialValues = {
    nombre: "",
    email: "",
    opcionlugar: "",
    comentarios: "",
  };
  const formik = useFormik({
    initialValues,
    validationSchema: ComentariosSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: (values) => {
      console.log("Values de Formik-->", values);
    },
  });
    return (
        <div className="container py-3 my-3 ">
          <div className="text-center"><h2>Contactanos</h2></div>
          
            <Form onSubmit={formik.handleSubmit}>
      <Form.Group className="mb-3" controlId="nombre">
        <Form.Label>Nombre y Apellido </Form.Label>
        <Form.Control type="text" placeholder="Max Power" minLength={4} maxLength={20} name="nombre" {...formik.getFieldProps("nombre")}
        className={clsx(
          "form-control",
          {
            "is-invalid": formik.touched.nombre && formik.errors.nombre,
          },
          {
            "is-valid": formik.touched.nombre && !formik.errors.nombre,
          }
        )}/>
         {formik.touched.nombre && formik.errors.nombre && (
            <div className="mt-2  text-warning fw-bolder">
              <span role="alert">{formik.errors.nombre}</span>
            </div>
          )}
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email </Form.Label> 
        <Form.Control type="email" placeholder="email@ejemplo.com" minLength={15} maxLength={40} name="email" {...formik.getFieldProps("email")} 
        className={clsx(
          "form-control",
          {
            "is-invalid": formik.touched.email && formik.errors.email,
          },
          {
            "is-valid": formik.touched.email && !formik.errors.email,
          }
        )}/>
         {formik.touched.email && formik.errors.email && (
            <div className="mt-2  text-warning fw-bolder">
              <span role="alert">{formik.errors.email}</span>
            </div>
          )}
      </Form.Group>
          <FormLabel>De donde nos escribis</FormLabel>
      <FormGroup><Form.Select aria-label="opcionlugar"
       name="opcionlugar"
       {...formik.getFieldProps("opcionlugar")}
       className={clsx(
         "form-control",
         {
           "is-invalid": formik.touched.opcionlugar && formik.errors.opcionlugar,
         },
         {
           "is-valid": formik.touched.opcionlugar && !formik.errors.opcionlugar,
         }
       )}>
      <option className="mb-3" >Eleji una opcion</option>
      <option value="1">Buenos Aires</option>
                                <option value="2">Capital Federal</option>
                                <option value="3">Catamarca</option>
                                <option value="4">Chaco</option>
                                <option value="5">Chubut</option>
                                <option value="6">Cordoba</option>
                                <option value="7">Corrientes</option>
                                <option value="8">Entre Ríos</option>
                                <option value="9">Formosa</option>
                                <option value="10">Jujuy</option>
                                <option value="11">La Pampa</option>
                                <option value="12">La Rioja</option>
                                <option value="13">Mendoza</option>
                                <option value="14">Misiones</option>
                                <option value="15">Neuquén</option>
                                <option value="16">Rio Negro</option>
                                <option value="17">Salta</option>
                                <option value="18">San Juan</option>
                                <option value="19">San Luis</option>
                                <option value="20">Santa Cruz</option>
                                <option value="21">Santa Fe</option>
                                <option value="22">Santiago del Estero</option>
                                <option value="23">Tierra del Fuego</option>
                                <option value="24">Tucumán</option>
    </Form.Select>
    {formik.touched.opcionlugar && formik.errors.opcionlugar && (
            <div className="mt-2 text-danger fw-bolder">
              <span role="alert">{formik.errors.opcionlugar}</span>
            </div>
          )}
     </FormGroup>
      <Form.Group className="my-3" controlId="comentarios">
        <Form.Label>Deja tus comentarios</Form.Label>
        <Form.Control as="textarea" rows={3} min={15} maxLength={200}
         name="comentarios"
         {...formik.getFieldProps("comentarios")}
         className={clsx(
           "form-control",
           {
             "is-invalid":
               formik.touched.comentarios && formik.errors.comentarios,
           },
           {
             "is-valid":
               formik.touched.comentarios && !formik.errors.comentarios,
           }
         )}
       />
       {formik.touched.comentarios && formik.errors.comentarios && (
         <div className="mt-2 text-danger fw-bolder">
           <span role="alert">{formik.errors.comentarios}</span>
         </div>
       )}
        
        <Button variant="primary my-3" type="submit">
        Enviar
      </Button>
      </Form.Group>
    </Form>
       <div className="col-sm-12 col-lg-6 " >
       <Iframe className="border border-4 mt-4 mt-lg-0 shadow"
       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.1023709809397!2d-65.20977672546015!3d-26.836696090030177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses-419!2sar!4v1697732042076!5m2!1ses-419!2sar"
       width="200%" height="200" style="border:0;" allowfullscreen="" loading="lazy"
       class="w-100">

</Iframe>  
       </div>
                
        </div>
    );
};

export default Contact;