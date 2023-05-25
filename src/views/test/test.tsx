import React from 'react'
import { NavLink } from 'react-router-dom'
import { APP_HOME } from '../../router'
import './test.module.less'

const Test = (props:any):JSX.Element => {
  console.log(props)
  return (
    <div styleName='test'>
      <NavLink
        to={APP_HOME}
      >
        <span>Home</span>
      </NavLink>
      <div className='test1'>热更新似乎不是很好用啊</div>
    </div>
  )
}

export default Test
