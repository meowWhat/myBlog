import React, { Component, createRef } from 'react'

//@components
import Nav from './Nav/Nav'
import Content from './Content/Content'
import Profile from './Profile/Profile'
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
        {/* 导航栏 */}
        <Nav login={this.login}></Nav>
        {/* 版心 */}
        <div id="homeContent" className="main">
          {/* 版心左边部分 */}
          <div className="homeLeft">
            {/* 内容 */}
            <Content {...(this.props as any)}></Content>
          </div>
          {/* 版心右边部分 */}
          <div className="homeRight">
            <Profile></Profile>
          </div>
          {/*  */}
          {/* 回到顶部 */}
          <BackTop visibilityHeight={350}></BackTop>
        </div>
        {/* 登录模态框 */}
        <Login ref={this.loginDom}></Login>
      </>
    )
  }
  login = () => {
    //登录模态框的显示与隐藏
    let dom = this.loginDom.current?.login.current
    if (dom) {
      dom.style.display = 'block'
    }
  }
}
