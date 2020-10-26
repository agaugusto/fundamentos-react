import React from 'react'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'
import ComFilhos from './components/basicos/ComFilhos'
import Card from './components/layout/Card'
import Repeticao from './components/basicos/Repeticao'
import Condicional from  './components/basicos/Condicional'
import CondicionalComIf from './components/basicos/CondicionalComIf'
import Pai from './components/comunicacao/direta/Pai'

export default props => (
    <div className="App">
        <Card titulo="#01 - Primeiro Componente" color="#8BAD39">
            <Primeiro />
        </Card>
        <Card titulo="#02 - Componente com Parametro" color="#260126">
            <ComParametro titulo="testando" subtitulo="continuando"></ComParametro>
        </Card>
        <Card titulo="#03 - Componente com Filhos" color="#75EB00">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>
            </ComFilhos>
        </Card>
        <Card titulo="#04 - Repetição" color="#FDF200">
            <Repeticao />
        </Card>
        <Card titulo="#05 - Condicional" color="#28ABE3">
            <Condicional numero={10}/>
        </Card>
        <Card titulo="#06 - Condicional com If" color="#FA6900">
            <CondicionalComIf numero={11}/>
        </Card>
        <Card titulo="#07 - Comunicação/direta pai e filho" color="#C91B26">
            <Pai/>
        </Card>
    </div>
);
