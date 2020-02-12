import React, { Component } from 'react'

//@antd
import { List } from 'antd'
//@css
import './TabRender.less'

interface Props {
  data: { title: string; desp: string; href: string }[] | []
}
export default class TabRender extends Component<Props> {
  render() {
    return (
      <List
        className="TabCommend"
        itemLayout="horizontal"
        dataSource={this.props.data}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={<a href={item.href}>{item.title}</a>}
              description={item.desp}
            />
          </List.Item>
        )}
      />
    )
  }
}
