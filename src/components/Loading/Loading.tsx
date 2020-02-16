import React, { Component } from 'react'
import { Progress } from 'antd'
import './Loading.less'
interface Props {
  percent: number
  status: 'active' | 'normal' | 'success' | 'exception' | undefined
}
export default class Loading extends Component<Props> {
  render() {
    return (
      <Progress
        percent={this.props.percent}
        showInfo={false}
        status={this.props.status}
        className="myPropgress"
      ></Progress>
    )
  }
}
