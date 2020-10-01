import React from 'react'
import ReactDOM from 'react-dom'

import Father from './components/Father'
import Children from './components/Children'


ReactDOM.render(
    <div>
        <Father name="Pedro" surname="Araújo">
            <Children name="Pedro" />
            <Children name="Paulo" />
            <Children name="Carla" />
        </Father>
    </div>
    , document.getElementById('root'))