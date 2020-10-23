import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'

import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'
import Card from './components/layout/Card'

ReactDOM.render(
    <div>
        <h1># Quarto exemplo</h1>
        <Card titulo="Exercício X">
            <Primeiro/>
        </Card>
        <h1># Terceiro exemplo com filhos</h1>
        <ComFilhos>
            <ul>
                <li>Ana</li>
                <li>Bia</li>
                <li>Carlos</li>
                <li>Daniel</li>
            </ul>
        </ComFilhos>
        <h1># Segundo exemplo com parametro</h1>
        <ComParametro titulo="testando" subtitulo="continuando"></ComParametro>
        <h1># Primeiro exemplo sem parametro</h1>
        <Primeiro></Primeiro>
    </div>,
    document.getElementById('root')
)
