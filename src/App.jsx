import React from 'react'
import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/Repeticao'
import Condicional from  './components/Condicional'
import CondicionalComIf from './components/CondicionalComIf'

export default props => (
    <div className="App">
        <Card titulo="#01 - Primeiro Componente">
            <Primeiro />
        </Card>
        <Card titulo="#02 - Componente com Parametro">
            <ComParametro titulo="testando" subtitulo="continuando"></ComParametro>
        </Card>
        <Card titulo="#03 - Componente com Filhos">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo="#04 - Repetição">
            <Repeticao />
        </Card>
        <Card titulo="#05 - Condicional">
            <Condicional numero={10}/>
        </Card>
        <Card titulo="#06 - Condicional com If">
            <CondicionalComIf numero={11}/>
        </Card>
    </div>
);
