// Empresas.js
import React, { useState,useEffect } from 'react';
import API from '../../utils/API';
// import { Select, Table, Form, Input, Space, Button, Typography, Divider } from 'antd';
// import { EditOutlined, CloseCircleOutlined, PlusCircleOutlined } from '@ant-design/icons'
// const { Title, Text } = Typography;
// const { Option } = Select;

const Empresas = () => {
  const [empresas, setEmpresas] = useState()
  const [loading, setLoading] = useState(false)
  const [editable, setEditable]= useState(false)
  const [claveEmpresa, setClaveEmpresa]= useState('')
  const [empleados, setEmpleados] = useState(
    []
  )
  // const [form] = Form.useForm()

  const titleStyle = {
    marginTop: 20
  }

  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { offset: 1, span: 16 },
  }
  
  const tailLayout = {
    wrapperCol: { offset: 5, span: 16 },
  }

  useEffect(() => {
    API.getEmpresas()
      .then(({data}) => {
        setEmpresas(data)
      })
      .catch(console.log)
    API.getEmpleados()
      .then(({data}) => {
        console.log(data)
        setEmpleados(data)
      })
      .catch(console.log)
    if(claveEmpresa){
    API.getEmpresa(claveEmpresa)
          .then(({data}) => {
            // form.setFieldsValue(data)
          })
          .catch(console.log)
    }else{
      // form.setFieldsValue({
      //   _id: '',
      //   nombre: '',
      //   responsable: '',
      //   nombreResponsable: ''
      // })
    }
    setLoading(false);
  },[
    editable,
    //form,
    claveEmpresa,
    loading])

  // const columns = [
  //   {
  //     title : 'Nombre',
  //     dataIndex: 'nombre',
  //     width: '40%',
  //     key: 'nombre'
  //   },
  //   {
  //     title : 'Responsable',
  //     dataIndex: ' nombreCompleto',
  //     width: '40%',
  //     key: 'responsable',
  //     render: (text, {responsable}) => (
  //       <Text>{responsable?`${responsable.nombre} ${responsable.apellido1} ${responsable.apellido2}`:''}</Text>)
  //   },
  //   {
  //     title: 'Acción',
  //     key: 'action',
  //     render: (record) => (
  //       <Space size="middle">
  //         <Button 
  //           type="primary"
  //           shape="circle"
  //           icon={<EditOutlined />}
  //           disabled={editable} 
  //           onClick={() => {
  //             setClaveEmpresa(record._id)
  //             setEditable(true)
  //           }}
  //         />
  //         <Button 
  //           type="primary" 
  //           disabled={editable} 
  //           shape="circle"
  //           danger 
  //           icon={<CloseCircleOutlined />}
  //           onClick={() => deleteEmpresa(record._id)}
  //         />
  //       </Space>
  //     ),
  //   },
  // ]

  const deleteEmpresa = (id) => {
    API.deleteEmpresa(id)
      .catch(console.log)
    setLoading(true)
  }

  return (
    
    <div >
      {/* <Title style={titleStyle} level={3}>Lista de empresas</Title>
      <Table 
        loading={loading}
        columns={columns} 
        dataSource={empresas} 
        footer={() => 
          <Button 
            disabled={editable}
            type="primary" 
            shape="round"
            icon={<PlusCircleOutlined />}
            onClick={() => setEditable(true)}
          >Crear Empresa</Button>
        }
      />
      <Title style={titleStyle} level={4}>Empresa</Title>
      <Form {...layout} 
        form={form}
        onFinish={(values) => {
          if(values._id){
              API.updateEmpresa(values)
              .then(() => setEditable(false))
              .catch(console.log)
          }else{
              values.fechaAlta = Date.now().toString()
              delete values._id
              API.saveEmpresa(values)
              .then(i => setEditable(false))
              .catch(console.log)
          }
          console.log('Success:', values)
        }}
        onFinishFailed={(errorInfo) => 
          console.log('Failed:', errorInfo)}
      >
        <Form.Item 
          name="_id">
          <Input type = "hidden"/>
        </Form.Item>
        <Form.Item
          label="Nombre"
          name="nombre"
          rules={[{required: true, message: 'Introduzca un nombre' }]}
        >
          <Input disabled={!editable}/>
        </Form.Item>
        <Form.Item
          label="Responsable"
          name="responsable"
          rules={[{ required: true, message: 'Introduzca un responsable' }]}
        >
          <Select disabled={!editable}>
            {empleados.map(({_id,nombre,apellido1,apellido2})=> {
              return (
              <Option value={_id}>{nombre} {apellido1} {apellido2}</Option>
              )
            })}
          </Select>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Space size="middle">
            <Button 
              disabled={!editable}
              type="primary" 
              htmlType="submit" 
              >
              Guardar
            </Button>
            <Divider/>
            <Button 
              disabled={!editable}
              type="primary" danger
              onClick={() => {
                setClaveEmpresa('')
                setEditable(false)
              }}
              >
              Volver
            </Button>	
          </Space>
        </Form.Item>
      </Form> */}
      Empresas
    </div>
)}

export default Empresas