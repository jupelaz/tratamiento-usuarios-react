import axios from 'axios';

export default {
  getAgendas: () => {
    return axios.get('/agendas');
  },
  getAgenda: (id) => {
    return axios.get('/agendas/' + id);
  },
  deleteAgenda: (id) => {
    return axios.delete('/agendas/' + id);
  },
  saveAgenda: (data) => {
    return axios.post('/agendas', data);
  },
  updateAgenda: (data) => {
    return axios.put('/agendas/' + data._id, data);
  },
  getEmpleados: () => {
    return axios.get('/empleados');
  },
  getEmpleado: (id) => {
    return axios.get('/empleados/' + id);
  },
  deleteEmpleado: (id) => {
    return axios.delete('/empleados/' + id);
  },
  saveEmpleado: (data) => {
    return axios.post('/empleados', data);
  },
  updateEmpleado: (data) => {
    return axios.put('/empleados/' + data._id, data);
  },
  getEmpresas: () => {
    return axios.get('/empresas');
  },
  getEmpresa: (id) => {
    return axios.get('/empresas/' + id);
  },
  deleteEmpresa: (id) => {
    return axios.delete('/empresas/' + id);
  },
  saveEmpresa: (data) => {
    return axios.post('/empresas', data);
  },
  updateEmpresa: (data) => {
    return axios.put('/empresas/' + data._id, data);
  }
}
