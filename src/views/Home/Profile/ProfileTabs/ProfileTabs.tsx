import React, { Component } from 'react'
//@compents
import TabCommend from './TabCommend/TabCommend'
import TabColumn from './TabColumn/TabColumn'
import TabStudyMap from './TabStudyMap/TabStudyMap'
//@antd
import { Tabs } from 'antd'

const { TabPane } = Tabs
export default class ProfileTabs extends Component {
  render() {
    return (
      <Tabs defaultActiveKey="1">
        <TabPane tab="推荐" key="1">
          <TabCommend />
        </TabPane>
        <TabPane tab="专栏" key="2">
          <TabColumn />
        </TabPane>
        <TabPane tab="学习路线" key="3">
          <TabStudyMap />
        </TabPane>
      </Tabs>
    )
  }
}
