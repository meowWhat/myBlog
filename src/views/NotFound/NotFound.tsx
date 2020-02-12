import React, { Component } from 'react'

import { Result, Button } from 'antd'
import { Link } from 'react-router-dom'
export default class NotFound extends Component {
  render() {
    return (
      <Result
        status="404"
        title="404"
        subTitle="抱歉,您访问的页面不存在"
        extra={
          <Link to="/home">
            <Button type="primary">返回首页</Button>
          </Link>
        }
      />
    )
  }
}
