// React imports
import React, { useState } from 'react'

// Local Imports
import Table from './component/table'
import './static/css/home.scss'
import Wallpaper from './static/images/img.png'


function Home() {

  const [showModal, setShowModal] = useState(false)
  const [source, setSource] = useState('')
  const [destiny, setDestiny] = useState('')
  const [plan, setPlan] = useState('')
  const [minute, setMinute] = useState('')

  const [noPlanResult, setNoPlanResult] = useState(0)
  const [withPlanResult, setWithPlanResult] = useState(0)

  const tabela = [
    { ddd: '011' },
    { ddd: '016' },
    { ddd: '017' },
    { ddd: '018' },
  ]

  const planos = [
    { plano: 'FaleMais30 (30 minutos)', value: 30 },
    { plano: 'FaleMais60 (60 minutos)', value: 60 },
    { plano: 'FaleMais120 (120 minutos)', value: 120 },
  ]

  const valores = [
    { source: '011', destiny: '016', price: 1.90 },
    { source: '016', destiny: '011', price: 2.90 },
    { source: '011', destiny: '017', price: 1.70 },
    { source: '017', destiny: '011', price: 2.70 },
    { source: '011', destiny: '018', price: 0.90 },
    { source: '018', destiny: '011', price: 1.90 }
  ]

  const onClickConsult = () => {
    if (!source && !destiny && !minute)
      alert('Preecha todos os campos')

    let price = null

    valores.forEach((item) => {
      if (item.source === tabela[parseInt(source)].ddd && item.destiny === tabela[parseInt(destiny)].ddd)
        price = item.price
    })

    let noPlanResultFinal = parseInt(minute) * price
    setNoPlanResult(noPlanResultFinal)

    if (plan) {
      let planValue = planos[parseInt(plan)].value
      let withPlanResultFinal = parseInt(minute) - planValue

      if (withPlanResultFinal > 0) {
        withPlanResultFinal *= price
        withPlanResultFinal += withPlanResultFinal * 0.10
        setWithPlanResult(withPlanResultFinal)
      }else {
        setWithPlanResult(0)
      }
    }
  }

  return (
    <div className='container-main-page'>
      <div className='infos-content'>
        <h1>Sign up for a plan and speak free to any area code, you only pay for the excess minutes.</h1>
        <div className='img-infos'>
          <img src={Wallpaper} alt=''/>
        </div>
        <button className='display-table' onClick={() => setShowModal(true)}>see table</button>
        {showModal &&
          <>
            <Table values={valores} />
            <button className='close-btn-modal' onClick={() => setShowModal(false)}>X</button>
          </>
        }
      </div>
      <div className='content-consults'>
        <div className='content-des-ori'>
          <div className='layout-lab-sel'>
            <label>Source *</label>
            <select className='des-ori-content-div' onChange={event => {
              setSource(event.target.value)
            }}>
              <option value=''>Select the source</option>
              {
                tabela.map((item, index) => (
                  <option key={index} value={index}>
                    {item.ddd}
                  </option>
                ))
              }
            </select>
          </div>
          <div className='layout-lab-sel'>
            <label>Destiny *</label>
            <select className='des-ori-content-div' onChange={event => {
              setDestiny(event.target.value)
            }}>
              <option value=''>Select the destination</option>
              {
                tabela.map((item, index) => (
                  <option key={index} value={index}>
                    {item.ddd}
                  </option>
                ))
              }
            </select>
          </div>
        </div>
        <div className='plan-div'>
          <label>Plans TalkMore *</label>
          <select className='select-for-user' onChange={event => {
            setPlan(event.target.value)
          }}>
            <option value=''>Select the plan</option>
            {
              planos.map((item, index) => (
                <option key={index} value={index}>
                  {item.plano}
                </option>
              ))
            }
          </select>
        </div>
        <div className='minutes-content'>
          <label>Minutes *</label>
          <input type='text' onChange={event => {
            setMinute(event.target.value)
          }} />
        </div>
        <div className='layout-the-price'>
          <div className='column-content'>
            <label className='title-with-plan'>With Plan</label>
            <span className='with-plan-span'>{`R$${withPlanResult}`}</span>
          </div>
          <div className='column-content'>
            <label>Without plan</label>
            <span className='without-plan-span'>{`R$${noPlanResult}`}</span>
          </div>
        </div>

        <button className='btn-for-conclu' onClick={onClickConsult}>Consult</button>
      </div>
    </div>
  )
}

export default Home