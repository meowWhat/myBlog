import React, { Component, createRef } from 'react'

//@components
import Nav from './Nav/Nav'
import Content from './Content/Content'
import Profile from './Profile/Profile'
import Foot from './Foot/Foot'
import Login from '../Login/Login'
//@css
import './home.less'
//@antd
import { BackTop } from 'antd'

export default class Home extends Component {
  loginDom: React.RefObject<Login>
  constructor(props: {}) {
    super(props)
    this.loginDom = createRef()
  }
  render() {
    return (
      <>
        <Nav login={this.login}></Nav>
        <div id="homeContent" className="main">
          <div className="homeLeft">
            <Content {...(this.props as any)}></Content>
            <Foot></Foot>
          </div>
          <div className="homeRight">
            <Profile></Profile>
          </div>
          <BackTop visibilityHeight={350}></BackTop>
        </div>
        <Login ref={this.loginDom}></Login>
      </>
    )
  }
  login = () => {
    let dom = this.loginDom.current?.login.current
    if (dom) {
      dom.style.display = 'block'
    }
  }
}
