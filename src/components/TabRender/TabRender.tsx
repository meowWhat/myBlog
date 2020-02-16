import React, { Component } from 'react'
//@router
import { Link } from 'react-router-dom'
//@antd
import { List } from 'antd'
//@css
import './TabRender.less'

interface Props {
  data: { title: string; desp: string; href: string }[] | []
  showDrawer: (a: string) => void | undefined
}
export default class TabRender extends Component<Props> {
  render() {
    return (
      <List
        className="TabCommend"
        itemLayout="horizontal"
        dataSource={this.props.data}
        renderItem={(item) => (
          <List.Item
            onClick={this.props.showDrawer.bind(this, item.title)}
            style={{ cursor: 'pointer' }}
          >
            <List.Item.Meta
              title={<Link to={item.href}> {item.title} </Link>}
              description={item.desp}
            />
          </List.Item>
        )}
      />
    )
  }
}
