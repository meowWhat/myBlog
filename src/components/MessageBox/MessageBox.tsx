import React, { Component } from 'react'

import { Modal, Button } from 'antd'

interface Props {
  title: string
  btnText: string
  context: any
}
export default class MessageBox extends Component<Props> {
  state = { visible: false }

  showModal = () => {
    this.setState({
      visible: true
    })
  }

  handleOk = () => {
    this.setState({
      visible: false
    })
  }

  handleCancel = () => {
    this.setState({
      visible: false
    })
  }

  render() {
    return (
      <div>
        <Button type="danger" shape="round" onClick={this.showModal}>
          {this.props.btnText}
        </Button>
        <Modal
          title={this.props.title}
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          {this.props.context}
        </Modal>
      </div>
    )
  }
}
