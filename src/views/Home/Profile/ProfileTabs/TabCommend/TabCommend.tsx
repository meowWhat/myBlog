import React, { Component } from 'react'
//@components
import { TabRender } from '../../../../../components'
//@network
import axios from '../../../../../netWork'

interface Props {}
interface DataItem {
  title: string
  desp: string
  href: string
}
interface State {
  data: DataItem[] | []
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
        <TabRender data={this.state.data} showDrawer={() => {}}></TabRender>
      </>
    )
  }
  componentDidMount() {
    //挖个坑 发求情 然后更新state
    let tempData: DataItem[] = []
    axios({
      url: '/commend/data',
      method: 'POST',
      data: {
        page: 1,
        limit: 5
      }
    })
      .then((res: any) => {
        if (res.code === 200) {
          res.data.forEach((ele: any) => {
            tempData.push({
              title: ele[0].articleTitle,
              href: `/home/aricle/${ele[0].columns_docs[0].columnName}_${ele[0].articleTitle}`,
              desp: ele[0].articleDesp
            })
          })
          this.setState({
            data: tempData
          })
        }
      })
      .catch((err: any) => {
        throw err
      })
  }
}
