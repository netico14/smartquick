import { useEffect, useContext, useState, useRef } from 'react';
import { useLocation } from "wouter";
import {AppContext} from '../Provider';
import { Form, Input, Button, Upload, Modal, InputNumber, Radio, Space, Card, Table } from 'antd';
import '../App.css'
import 'antd/dist/antd.css';

const { Meta } = Card;

export default function TotalTable(){
  const [state, setState] = useContext(AppContext)
  const [location, setLocation] = useLocation();
  const [users, setUsers] = useState([])

  useEffect(() => {
    getData()
  }, [0])

  const getData = async() => {
    const datos = await getDatos('https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinners.json')
    setUsers(datos)
  }

  const getDatos = async(url) => {
    try {
      let response = await fetch(`${url}`, {
        method: 'GET'
      })
      let res = await response.json()
      return(res)
    }catch (error) {
      console.log(error)
    }
  }

  const columns = [
    {
      title: "Atleta",
      dataIndex: "athlete",
      sorter: (a, b) => a.athlete.localeCompare(b.athlete)
    },
    {
      title: "Edad",
      dataIndex: "age",
      sorter: (a, b) => a.age - b.age
    },
    {
      title: "País",
      dataIndex: 'country',
      sorter: (a, b) => a.country.localeCompare(b.country)
    },
    {
      title: "Año",
      dataIndex: 'year',
      sorter: (a, b) => a.year - b.year
    },
    {
      title: "Fecha",
      dataIndex: 'date'
    },
    {
      title: "Deporte",
      dataIndex: 'sport',
      sorter: (a, b) => a.sport.localeCompare(b.sport)
    },
    {
      title: "Oro",
      dataIndex: 'gold',
      sorter: (a, b) => a.gold - b.gold
    },
    {
      title: "Plata",
      dataIndex: 'silver',
      sorter: (a, b) => a.silver - b.silver
    },
    {
      title: "Bronce",
      dataIndex: 'bronze',
      sorter: (a, b) => a.bronze - b.bronze
    },
    {
      title: "Total",
      dataIndex: 'total',
      sorter: (a, b) => a.total - b.total
    }
  ]

  return(
    <div className="container">
      <Table dataSource={users} columns={columns} />
    </div>
  )
}