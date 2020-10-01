import React from 'react'
import { childrenWithProps } from '../utils/utils'

export default props =>
    <div>
        <h1>{props.name} {props.surname}</h1>
        <h1>Childrens</h1>
        <ul>
            {childrenWithProps(props)}
        </ul>
    </div>