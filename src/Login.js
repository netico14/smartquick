import { useEffect, useContext } from 'react';
import { useLocation } from "wouter";
import {AppContext} from './Provider';
import { Form, Input, Button, Checkbox } from 'antd';
import './App.css'
import 'antd/dist/antd.css';

const usuarios = [
  {
    user: 'neto',
    name: 'Ernesto Beltrán',
    pass: '123',
    type: 'Administrador'
  },
  {
    user: 'juan',
    name: 'Juan Beltrán',
    pass: '123',
    type: 'Coordinador'
  }
]


function Login(){
  const [state, setState] = useContext(AppContext)
  const [location, setLocation] = useLocation();
  useEffect(() => {
    
  }, [0])

  const onSubmit = async(value) => {
    const array = usuarios.filter((user) => user.user === value.user && user.pass === value.pass)
    if(array.length === 1){
      setState(array[0])
      if(array[0].type === 'Administrador'){
        setLocation('homeAdmin')
      }else if(array[0].type === 'Coordinador'){
        setLocation('home')
      }
    }
  }
  return(
    <div className='loginCont'>
      <div className="formContainer">
        <div>
          <img src="img/logo.png" width="250px" onClick={() => setLocation('loginAdmin')}/>
        </div>
        <div className="labelLogin">
          <div>Ingreso</div>
          <div><img src="img/flag.webp" width="20px"/> Español</div>
        </div>
        <div>
          <Form
            name="basic"
            onFinish={onSubmit}
            autoComplete="off"
            layout="vertical"
          >
            <Form.Item
              name="user"
              rules={[{ required: true, message: 'Por favor llene este espacio!' }]}
            >
              <Input placeholder="Usuario"/>
            </Form.Item>
            <Form.Item
              name="pass"
              rules={[{ required: true, message: 'Por favor llene este espacio!' }]}
            >
              <Input.Password placeholder="Contraseña" />
            </Form.Item>
            <div className="labelSecondLogin">
              <Checkbox >
                Recuerdame
              </Checkbox>
              <div><a>¿Olvidaste tu contraseña?</a></div>
            </div>
            <Form.Item>
              <Button type="primary" htmlType="submit" className="btnLogin">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Login