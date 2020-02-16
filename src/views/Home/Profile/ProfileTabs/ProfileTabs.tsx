import React, { Component } from 'react'
//@compents
import TabCommend from './TabCommend/TabCommend'
import TabColumn from './TabColumn/TabColumn'
import TabStudyMap from './TabStudyMap/TabStudyMap'
//@antd
import { Tabs, Skeleton } from 'antd'

const { TabPane } = Tabs
interface State {
  flag: boolean
  display: string
}
export default class ProfileTabs extends Component<{}, State> {
  state = {
    flag: true,
    display: 'none'
  }
  render() {
    return (
      <Tabs defaultActiveKey="1">
        <TabPane tab="推荐" key="1">
          <TabCommend />
        </TabPane>
        <TabPane tab="专栏" key="2">
          {this.state.flag ? <Skeleton active /> : null}
          <div style={{ display: this.state.display }}>
            <TabColumn columnLoading={this.columnLoading} />
          </div>
        </TabPane>
        <TabPane tab="学习路线" key="3">
          <TabStudyMap />
        </TabPane>
      </Tabs>
    )
  }
  columnLoading = () => {
    this.setState({
      flag: false,
      display: 'block'
    })
  }
}
