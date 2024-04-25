import React from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { Button } from "react-bootstrap";

const User = ({usuario, getUsers}) => {
    const API = import.meta.env.VITE_API;
    const handleDelete = () => {
        Swal.fire({
          title: "Estás seguro de eliminar éste usuario?",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Borrar",
          cancelButtonText: "No, mejor no",
        }).then(async (result) => {
          if (result.isConfirmed) {
            try {
              await axios.delete(`${API}/users/delete/${usuario._id}`);
              getUsers();
            } catch (error) {
              console.log("ERROR-->", error);
            }
            Swal.fire({
              title: "Éxito!",
              text: "Se eliminó el usuario",
              icon: "success",
            });
          }
        });
      };
  return (
    <>
      <tr>
        <td>{usuario._id}</td>
        <td>{usuario.name}</td>
        <td>{usuario.email}</td>
        <td>{usuario.password}</td>
        <td>{usuario.role}</td>
        <td className="d-flex justify-content-around gap-1">
          <Button type="button" variant="danger" onClick={handleDelete}>
            Eliminar
          </Button>
        </td>
      </tr>
    </>
  );
};

export default User;
