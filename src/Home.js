import { useEffect, useContext, useState, useRef } from 'react';
import { useLocation } from "wouter";
import {AppContext} from './Provider';
import { Form, Input, Button, Upload, Modal, InputNumber, Radio, Space, Card } from 'antd';
import './App.css'
import 'antd/dist/antd.css';
import Header from './Components/Header'

const { Meta } = Card;

export default function Home(){
  const [state, setState] = useContext(AppContext)
  const [location, setLocation] = useLocation();

  useEffect(() => {
    
  }, [0])


  return(
    <div className="containerAdmin">
      <Header />
      <div className="div1">
        <div><img src="img/construccion.png" width="50%"/></div>
      </div>
    </div>
  )
}