// React imports
import React from 'react'

// Local imports
import '../static/css/modal.scss'

function Table() {
  return (
    <div className='container-main-modal'>
      <table>
        <thead>
          <th>Origem</th>
          <th>Destino</th>
          <th>$/minutos</th>
        </thead>

        <tbody>
          <th>011</th>
          <th>016</th>
          <th>1.90</th>
        </tbody>

        <tbody>
          <th>016</th>
          <th>011</th>
          <th>2.90</th>
        </tbody>

        <tbody>
          <th>011</th>
          <th>017</th>
          <th>1.70</th>
        </tbody>

        <tbody>
          <th>017</th>
          <th>011</th>
          <th>2.70</th>
        </tbody>

        <tbody>
          <th>011</th>
          <th>018</th>
          <th>0.90</th>
        </tbody>

        <tbody>
          <th>018</th>
          <th>011</th>
          <th>1.90</th>
        </tbody>

      </table>
    </div>
  )
}

export default Table