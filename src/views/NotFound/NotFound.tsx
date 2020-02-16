import React, { Component } from 'react'

import { Result, Button } from 'antd'
import { Link } from 'react-router-dom'

export default class NotFound extends Component {
  render() {
    return (
      <Result
        status="404"
        title="404"
        subTitle="抱歉,暂无数据"
        extra={
          <Link to="/">
            <Button type="primary">返回首页</Button>
          </Link>
        }
      />
    )
  }
}
