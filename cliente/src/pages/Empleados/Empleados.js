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
      alert.error('El empleado es responsable de una empresa',1)
    }else{
      API.deleteEmpleado(id)
        .catch(console.log)
    }
    setLoading(true)
  }

  function handleSubmit(empleado){
      API.updateEmpleado(empleado)
        .catch(console.log)
    setLoading(true)
  }

  return (
    <div>
      Tabla de empleados
      <table>
        <tr>
          <th>Nombre</th>
          <th>Acción</th>
        </tr>
          {
            
              {empleados}?
              empleados.map(e => 
                <tr>
                <td>
                  {e.nombre}
                </td>
                <td>
                  <button>onClick={() => {
                    setClaveEmpleado(e._id)
                    setEditable(true)
                    }}
                  </button>
                  <button onClick={() => handleDelete(e._id)}/>
                </td>
                </tr>
              ):<td>Sin datos</td>
            
          } 
      </table>
      <span>Formulario</span>
      <form onSubmit = {(event) => {handleSubmit(event)}} >
        <input label="Nombre"
        name="nombre"></input>
        <input label="Apellido 1"
        name="apellido1"></input>
        <input label="Apellido 2"
        name="apellido2"></input>
        <input label="Fecha Alta"
        name="fechaAlta"></input>
        <input label="Fecha Baja"
        name="fechaBaja"></input>
        <button>Volver</button>
        <button>Guardar</button>
      </form>
    </div>
)}

export default Empleados