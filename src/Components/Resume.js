import { useEffect, useContext, useState, useRef } from 'react';
import { useLocation } from "wouter";
import {AppContext} from '../Provider';
import { Form, Input, Button, Upload, Modal, InputNumber, Radio, Space, Card } from 'antd';
import '../App.css'
import 'antd/dist/antd.css';

const { Meta } = Card;

export default function Resume(){
  const [state, setState] = useContext(AppContext)
  const [location, setLocation] = useLocation();
  const [gold, setGold] = useState([])
  const [silver, setSilver] = useState([])
  const [bronze, setBronze] = useState([])
  const [modalOpen, setModalOpen] = useState(false)
  const [content, setContent] = useState({})

  useEffect(() => {
    getData()
  }, [0])

  const getData = async() => {
    const datos = await getDatos('https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/olympicWinners.json')
    getCountOro(datos)
    getCountPlata(datos)
    getCountBronce(datos)
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

  const getCountOro = async(data) => {
    let oro = 0
    data.map((dat) => {
      oro += dat.gold
    })
    setGold(oro)
  }

  const getCountPlata = async(data) => {
    let plata = 0
    data.map((dat) => {
      plata += dat.silver
    })
    setSilver(plata)
  }

  const getCountBronce = async(data) => {
    let bronce = 0
    data.map((dat) => {
      bronce += dat.bronze
    })
    setBronze(bronce)
  }

  return(
    <div className="container">
      <div className="medallas">
        <div>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="img/oro.png"/>}
            onClick={() => {
              setModalOpen(true)
              setContent({
                title: "Medallas de Oro",
                desc: `El conteo de las medallas de oro es de ${gold}`
              })
            }}
          >
            <Meta title={`Total: ${gold}`} />
          </Card>
        </div>
        <div>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="img/plata.png"/>}
            onClick={() => {
              setModalOpen(true)
              setContent({
                title: "Medallas de Plata",
                desc: `El conteo de las medallas de plata es de ${silver}`
              })
            }}
          >
            <Meta title={`Total: ${silver}`} />
          </Card>
        </div>
        <div>
          <Card
            hoverable
            style={{ width: 240 }}
            cover={<img alt="example" src="img/bronce.png"/>}
            onClick={() => {
              setModalOpen(true)
              setContent({
                title: "Medallas de Bronce",
                desc: `El conteo de las medallas de bronce es de ${bronze}`
              })
            }}
          >
            <Meta title={`Total: ${bronze}`} />
          </Card>
        </div>
      </div>
      <Modal 
        title={content.title}
        open={modalOpen} 
        onCancel={() => setModalOpen(false)}
        footer={[
          <Button key="back" onClick={() => setModalOpen(false)}>
            Cerrar
          </Button>
        ]}
      >
        <p>{content.desc}</p>
      </Modal>
    </div>
  )
}