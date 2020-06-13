// Empleados.js
import React, { useState,useEffect } from 'react';
import API from '../../utils/API';
import { isValid } from "better-dni";
import moment from 'moment';

const Empleados = () => {
  const [empleados, setEmpleados] = useState([])
  const [loading, setLoading] = useState(false)
  const [editable, setEditable]= useState(false)
  const [empleado, setEmpleado] = useState([])
  const [claveEmpleado, setClaveEmpleado]= useState('')

  useEffect(() => {
    API.getEmpleados().then(({data}) => {
          data.forEach((data) => data.nombreCompleto = `${data.nombre} ${data.apellido1} ${data.apellido2}`)
          setEmpleados(data)
        })
      .catch(console.log)
    if(claveEmpleado){
      API.getEmpleado(claveEmpleado)
      .then(({data}) => {
        data.fechaAlta=moment(data.fechaAlta)
        if(data.fechaBaja){
          data.fechaBaja=moment(data.fechaBaja)
        }
        setEmpleado(data)
      }).catch(console.log)
    }else{
      setEmpleado({
        _id: '',
        identificador: '',
        nombre: '',
        apellido1: '',
        apellido2: '',
        fechaAlta: '',
        fechaBaja: ''
      })
    }
    setLoading(false);
  },[])

  function handleDelete(id){
    if(API.getEmpresa(id)){
      alert('El empleado es responsable de una empresa',1)
    }else{
      API.deleteEmpleado(id)
        .catch(console.log)
    }
    setLoading(true)
  }

  function handleSubmit(empleado){
    if(empleado._id){
      API.updateEmpleado(empleado)
        .catch(console.log)
    }else{
      API.saveEmpleado(empleado)
        .catch(console.log)
    }
    setLoading(true)
  }

  return (
    <>
      <div className="table">
        <h4>Tabla de empleados</h4>
        <table>
          <thead>
          <tr>
            <th>Nombre</th>
            <th>Acción</th>
          </tr>
          </thead>
          <tbody>
            {
              
                {empleados}?
                empleados.map(e => 
                  <tr>
                  <td>
                    {e.nombreCompleto}
                  </td>
                  <td>
                    <button onClick={() => {
                      setClaveEmpleado(e._id)
                      setEditable(true)
                      }}> Editar
                    </button>
                    <button onClick={() => handleDelete(e._id)}>Borrar</button>
                  </td>
                  </tr>
                ):<td>Sin datos</td>
              
            } 
        </tbody>
        </table>
      </div>
      <p/>
      <div className="form">
        <h4>Empleado</h4>
        <form onSubmit = {(event) => {handleSubmit(event)}} >
          <input type="text" name="nombre" required placeholder="Nombre"/>
          <input type="text" name="apellido1" required placeholder="Primer Apellido"/>
          <input type="text" name="apellido2" required placeholder="Segundo Apellido"/>
          <input type="text" name="fechaAlta" required placeholder="Fecha de Alta"/>
          <input type="text" name="fechaBaja" placeholder="Fecha de Baja"/>
          <input type="submit" value="Guardar"/>
        </form>
      </div>
    </>
)}

export default Empleados