import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'

import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'

ReactDOM.render(
    <div>
        <ComParametro titulo="testando" subtitulo="continuando"></ComParametro>
        <Primeiro></Primeiro>
    </div>,
    document.getElementById('root')
)
