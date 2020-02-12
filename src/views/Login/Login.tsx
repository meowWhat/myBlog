import React, { Component, createRef } from 'react'
import './login.less'

//@antd
import { Input, Icon, Button } from 'antd'

//@interface
interface Props {}
interface State {
  flag: boolean
}

export default class Login extends Component<Props, State> {
  login: React.RefObject<HTMLDivElement>
  constructor(props: {}) {
    super(props)
    this.state = {
      flag: true
    }
    this.login = createRef()
  }
  render() {
    return (
      <div id="login" ref={this.login}>
        {this.state.flag ? (
          <div className="loginModal">
            <h1>
              登录
              <span onClick={this.hide}>
                <Icon type="close" className="gray" />
              </span>
            </h1>
            <Input size="large" placeholder="请输入账号" className="account" />
            <Input size="large" placeholder="请输入密码" className="psw" />
            <Button type="primary" size="large" block>
              登录
            </Button>
            <div className="promptBox">
              <span className="promptSpan">没有账号?&nbsp;</span>
              <span className="promptSpan" onClick={this.register}>
                &nbsp;注册
              </span>
              <span className="promptSpan">忘记密码?&nbsp;</span>
            </div>
            <div className="promise">
              注册登录即表示同意
              <span> 用户协议</span>、<span>隐私政策</span>
            </div>
          </div>
        ) : (
          <div className="loginModal">
            <h1>
              注册
              <span onClick={this.hide}>
                <Icon type="close" className="gray" />
              </span>
            </h1>
            <Input size="large" placeholder="请输入账号" className="account" />
            <Input size="large" placeholder="请输入密码" className="account" />
            <Input size="large" placeholder="请确认密码" className="psw" />
            <Button type="primary" size="large" block>
              注册
            </Button>
            <div className="promptBox">
              <div onClick={this.register}>已有账号登录？</div>
            </div>
            <div className="promise">
              注册登录即表示同意
              <span> 用户协议</span>、<span>隐私政策</span>
            </div>
          </div>
        )}
        (
      </div>
    )
  }

  register = () => {
    this.setState({ flag: !this.state.flag })
  }

  hide = () => {
    let dom = this.login.current
    if (dom) {
      dom.style.display = 'none'
    }
  }
}
