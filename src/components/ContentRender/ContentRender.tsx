import React, { Component } from 'react'

//@css
import './ContentRender.less'
//@antd
import { Tag, Icon } from 'antd'
//@router
import { Link } from 'react-router-dom'

interface Props {
  title: string
  IconTitle: {
    tag: string
    tagColor: string
    calendar: string
    folder: string
    fire: number
  }
  content: {
    details: string
    href: string
  }
}

export default class ContentRender extends Component<Props> {
  render() {
    return (
      <div className="contentArticle">
        <Link to={this.props.content.href}>
          <h1 className="articleTitle blue">{this.props.title}</h1>
        </Link>
        <div className="articleTitleIcon gray">
          <span>
            <Tag color={this.props.IconTitle.tagColor}>
              {this.props.IconTitle.tag}
            </Tag>
          </span>
          <span>
            <Icon type="calendar" />
            &nbsp; {this.props.IconTitle.calendar}
          </span>
          <span>
            <Icon type="folder" />
            &nbsp; {this.props.IconTitle.folder}
          </span>
          <span>
            <Icon type="fire" />
            &nbsp; {this.props.IconTitle.fire} &nbsp;人
          </span>
        </div>
        <p>{this.props.content.details}</p>
        <Link to={this.props.content.href} className="articleGo blue">
          <Icon type="file-add" />
          &nbsp;查看全文
        </Link>
      </div>
    )
  }
}
