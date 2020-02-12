import React, { Component } from 'react'
import { Spin as Aspin } from 'antd'
import './spin.less'
export default class Spin extends Component {
  render() {
    return (
      <div className="spin">
        <Aspin></Aspin>
      </div>
    )
  }
}
