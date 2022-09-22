import { useEffect, useContext, useState, useRef } from 'react';
import { useLocation } from "wouter";
import {AppContext} from '../Provider';
import { Form, Input, Button, Upload, Modal, InputNumber, Radio, Space, Card } from 'antd';
import {RiCloseCircleFill} from 'react-icons/ri'
import '../App.css'
import 'antd/dist/antd.css';

const { Meta } = Card;

export default function Header(){
  const [state, setState] = useContext(AppContext)
  const [location, setLocation] = useLocation();

  return(
    <div className="header">
      <div><img src="img/minilogo.png" width="50px"/></div>
      <div className="headerName"><h2>{state?.name} - {state?.type}</h2> <RiCloseCircleFill size={30} style={{marginLeft: '1em'}} onClick={() => setLocation('/')}/></div>
    </div>
  )
}