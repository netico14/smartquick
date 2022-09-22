import { useEffect, useContext, useState, useRef } from 'react';
import { useLocation } from "wouter";
import {AppContext} from './Provider';
import { Form, Input, Button, Upload, Modal, InputNumber, Radio, Space, Card, Menu } from 'antd';
import './App.css'
import 'antd/dist/antd.css';
import {RiFileList3Line, RiListCheck2} from 'react-icons/ri'
import Header from './Components/Header'
import TotalTable from './Components/TotalTable';
import Resume from './Components/Resume';

const { Meta } = Card;

export default function HomeAdmin(){
  const [state, setState] = useContext(AppContext)
  const [location, setLocation] = useLocation();
  const [selectedMenuItem, setSelectedMenuItem]= useState('mail');

  useEffect(() => {
    
  }, [0])

  const componentsSwitch = (key) => {
    switch (key) {
      case 'mail':
        return <TotalTable />;
      case 'two':
        return <Resume />;
      default:
        break;
    }
  };

  return(
    <div className="containerAdmin">
      <Header />
      <div className="containAdmin">
        <Menu mode="horizontal" defaultSelectedKeys={['mail']} selectedKeys={selectedMenuItem} onClick={(e) => 
        setSelectedMenuItem(e.key)}>
          <Menu.Item key="mail" icon={<RiFileList3Line />}>
            Balance Total
          </Menu.Item>
          <Menu.Item key="two" icon={<RiListCheck2 />}>
            Resumen
          </Menu.Item>
        </Menu>
        <div>
          {componentsSwitch(selectedMenuItem)}
        </div>
      </div>
    </div>
  )
}