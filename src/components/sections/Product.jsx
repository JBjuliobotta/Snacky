import axios from "axios";
import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Product = ({ producto, getProducts }) => {

  
  const navigate=useNavigate();
  const API = import.meta.env.VITE_API;
  const handleDelete = () => {
    Swal.fire({
      title: "Estás seguro de eliminar éste producto?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "No, mejor no",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          /*await fetch(`${API}/products/` + producto._id, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
          });*/
          await axios.delete(`${API}/products/${producto._id}`);
          getProducts();
        } catch (error) {
          console.log("ERROR-->", error);
        }
        Swal.fire({
          title: "Éxito!",
          text: "Se eliminó el producto",
          icon: "success",
        });
      }
    });
  };

  return (
    <>
      <tr>
        <td>{producto._id}</td>
        <td>{producto.title}</td>
        <td>{producto.description}</td>
        <td>{producto.price}</td>
        <td>{producto.stock}</td>
        <td>{producto.image}</td>
        <td>{producto.category}</td>
        <td className="d-flex justify-content-around gap-1">
            <Button type="button" variant="warning" onClick={()=>{navigate(`/edit/${producto._id}`)}}>Editar</Button>
            <Button type="button" variant="danger" onClick={handleDelete}>Eliminar</Button>
        </td>
      </tr>
    </>
  );
};

export default Product;
