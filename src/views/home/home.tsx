import React from 'react'
import { NavLink } from 'react-router-dom'
import { APP_TEST } from '../../router'
import './home.module.less'

const Home = (props: any): JSX.Element => {
  console.log(props)
  return (
    <div styleName='home'>
      <NavLink
        to={APP_TEST}
      >
        <span>Home</span>
      </NavLink>
      <div className='test1'>热更新似乎a不是111很好用asd啊</div>
    </div>
  )
}

export default Home
