import React, { Component } from 'react'

//@css
import './Foot.less'
export default class Foot extends Component {
  render() {
    return (
      <div id="foot">
        <div className="footCross"></div>
        Made with ❤ by <span>&nbsp;陈嘉豪</span>
      </div>
    )
  }
}
