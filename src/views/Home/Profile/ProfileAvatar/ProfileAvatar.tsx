import React, { Component } from 'react'
//@antd
import { Tag, Divider, Avatar, Icon, Tooltip } from 'antd'
//@css
import './ProfileAvatar.less'

export default class ProfileAvatar extends Component {
  render() {
    return (
      <div id="profileAvatar">
        <div className="avatar"></div>
        <h2 className="blue">晚来风急</h2>
        <h4 className="gray"> 一位热爱前端的小白 :{')'}</h4>
        <div className="tagControl">
          <Tag color="red">开源分享</Tag>
          <Tag color="cyan">技术博客</Tag>
          <Tag color="green">被访问15969次</Tag>
          <Tag color="volcano">篮球迷</Tag>
          <Tag color="blue">努力造轮子</Tag>
          <Tag color="geekblue">尤神流弊</Tag>
        </div>
        <Divider>社交账号</Divider>
        <div className="publicMessage">
          <Tooltip title="1797793818">
            <Avatar icon={<Icon type="qq" />} className="avatarItem" />
          </Tooltip>
          <Tooltip title="GGsimida1022">
            <Avatar icon={<Icon type="wechat" />} className="avatarItem" />
          </Tooltip>
          <Tooltip title="https://github.com/meowWhat">
            <Avatar icon={<Icon type="github" />} className="avatarItem" />
          </Tooltip>
          <Tooltip title="带带大师兄">
            <Avatar icon={<Icon type="weibo" />} className="avatarItem" />
          </Tooltip>
        </div>
      </div>
    )
  }
}
