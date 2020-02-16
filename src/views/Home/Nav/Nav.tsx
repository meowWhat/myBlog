//@库 antd ,react
import React, { Component } from 'react'
import { Icon } from 'antd'

//@components
import { Link } from 'react-router-dom'

//@antd
import { notification } from 'antd'
//@img
import logo from './img/logo_CJH.png'
//@css
import './Nav.less'

//导出类组件
export default class Nav extends Component<{ login: () => void }> {
  render() {
    return (
      <div id="homeNav" className="boxShadow">
        <div className="main navContent">
          <Link to="/" className="navIcon">
            <img src={logo} alt="icon" />
          </Link>
          <div className="navControl">
            <Link to="/" className="navItem">
              <span>
                <Icon type="home" /> &nbsp;首页
              </span>
            </Link>
            <div className="navItem" onClick={this.openNotification}>
              <span>
                <Icon type="notification" /> &nbsp;联系我
              </span>
            </div>
            <div className="navItem" onClick={this.props.login}>
              <span>
                <Icon type="user" /> &nbsp;登录(暂不开放)
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
  openNotification = () => {
    notification.open({
      message: '商务合作',
      description: '您可以通过头像下面的社交账号找到我'
    })
  }
}
