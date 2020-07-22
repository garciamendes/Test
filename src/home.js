// React imports
import React, { useState } from 'react'

// Local Imports
import './static/css/home.scss'
import Modal from './component/table'


function Home() {

  const [showModal, setShowModal] = useState(false)

  const tabela = [
    {ddd: '011'},
    {ddd: '016'},
    {ddd: '017'},
    {ddd: '018'},
  ]

  const planos = [
    {plano: 'FaleMais30'},
    {plano: 'FaleMais60'},
    {plano: 'FaleMais120'},
  ]

  function showModalC(event) {
    setShowModal(event => true)
  }

  return (
    <div className="container-main-page">
      <div className="content-main">
        <p className='title'>Sign up for a plan and speak free to any area code, you only pay for the excess minutes.</p>
        <div>
          <select className='conteint-the-user' name="" id="">
            <option value="0">selecione a origin</option>
            {
              tabela.map((item, index) => (
                <option value={index}>
                  {item.ddd}
                </option>
              ))
            }
          </select>
          <select className='conteint-the-user' name="" id="">
            <option value="0">selecione a destino</option>
            {
              tabela.map((item, index) => (
                <option value={index}>
                  {item.ddd}
                </option>
              ))
            }
          </select>
          <select className='conteint-the-user' name="" id="">
            <option value='0'>selecione um plano</option>
            {
              planos.map((item, index) => (
                <option value={index}>
                  {item.plano}
                </option>
              ))
            }
          </select>

          <span className='conteint-the-user'>com plano</span>
          <span className='conteint-the-user'>sem plano</span>
          
        </div>
        
        <p className='diplay-table' onClick={showModalC}>see table</p>
        <Modal />
      </div>
    </div>
  )
}

export default Home