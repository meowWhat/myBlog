import React, { Component } from 'react'
//@components
import { TabRender } from '../../../../../components'

interface Props {}
interface State {
  data: { title: string; desp: string; href: string }[] | []
}
export default class TabCommend extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      data: []
    }
  }
  render() {
    return (
      <>
        <TabRender data={this.state.data}></TabRender>
      </>
    )
  }
  componentDidMount() {
    //挖个坑 发求情 然后更新state
  }
}
