import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import User from "./User";

const UsersList = () => {
    const [usuarios, setUsuarios]=useState([]);
    const API = import.meta.env.VITE_API;

    const getUsers = async ()=>{
        try {
            const response=await fetch(`${API}/users`);
            const resJson= await response.json();
            setUsuarios(resJson);
        } catch (error) {
            console.log("error", error);
        }
        
    };

    useEffect(()=>{
        getUsers();
    },[]);

  return (
    <>
      <div className="container-fluid">
        <div className="text-center">
          <h3>Usuarios</h3>
        </div>
        <Table striped bordered hover variant="dark" responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Email</th>
              <th>Password</th>
              <th>Rol</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((element) => {
              return (
                <User
                  usuario={element}
                  key={element._id}
                  getUsers={getUsers}
                />
              );
            })}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default UsersList;
