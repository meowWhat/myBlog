import React, { Component, createRef } from 'react'
import { Link } from 'react-router-dom'
//@components
import { TabRender } from '../../../../../components'
//@network
import axios from '../../../../../netWork'
//@antd
import { Drawer, Skeleton, Empty } from 'antd'
interface Props {
  columnLoading: () => void
}
interface DataItem {
  //专栏单条数据
  title: string
  desp: string
  href: string
}
interface drowerListItem {
  //抽屉单条数据
  articleTitle: string
  articleTagColor: string
  href: string
}
interface State {
  data: DataItem[] | [] //抽屉数据汇总
  visible: boolean //抽屉是否显示
  drowerList: {
    //抽屉数据汇总
    title: string
    contents: drowerListItem[]
  }
  SkeletonShow: boolean //骨架屏是否显示
}
export default class TanColumn extends Component<Props, State> {
  empty: React.RefObject<HTMLDivElement>
  constructor(props: Props) {
    super(props)
    this.state = {
      data: [],
      visible: false,
      drowerList: {
        title: 'default',
        contents: []
      },
      SkeletonShow: true
    }
    this.empty = createRef()
  }
  render() {
    return (
      <>
        {/* 专栏列表渲染 */}
        <TabRender data={this.state.data} showDrawer={this.showDrawer} />
        {/* 抽屉组件 */}
        <Drawer
          title={this.state.drowerList.title}
          placement="right"
          closable={true}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <>
            {this.state.SkeletonShow ? <Skeleton active></Skeleton> : null}
            <div ref={this.empty} style={{ display: 'none' }}>
              <Empty></Empty>
            </div>
            {this.state.drowerList.contents.map((item, index) => {
              return (
                <p key={item.articleTitle + index} onClick={this.onClose}>
                  <Link to={item.href}>
                    {index + 1} &nbsp;:&nbsp; {item.articleTitle}
                  </Link>
                </p>
              )
            })}
          </>
        </Drawer>
      </>
    )
  }
  componentDidMount() {
    //组件加载完成 请求专栏数据并渲染 渲染完成后出发回调函数 this.props.columnLoading()
    let tempData: DataItem[] = []
    axios({
      url: '/column/data',
      method: 'POST',
      data: {
        page: 1,
        limit: 8
      }
    })
      .then((res: any) => {
        if (res.code === 200) {
          res.item.forEach((ele: any) => {
            tempData.push({
              title: ele.columnName,
              href: `#`,
              desp: ele.columnDesp
            })
          })
          this.setState({
            data: tempData
          })
          this.props.columnLoading()
        }
      })
      .catch((err: any) => {
        throw err
      })
  }
  showDrawer = (title: string) => {
    //点击专栏显示抽屉,初始化抽屉列表数据
    if (this.empty.current) {
      this.empty.current.style.display = 'none'
    }
    this.setState({
      SkeletonShow: true,
      visible: true,
      drowerList: {
        title,
        contents: []
      }
    })
    this.getDrawerData(title)
  }
  onClose = () => {
    this.setState({
      visible: false
    })
  }
  getDrawerData = (title: string) => {
    //发送抽屉列表请求
    //当请求数据长度大于一 ,渲染数据 隐藏骨架屏
    //else 隐藏骨架屏  , 展示 empty组件
    axios({
      url: '/column/drawerData',
      method: 'POST',
      data: {
        columnName: title
      }
    })
      .then((res: any) => {
        let temp: drowerListItem[] = []
        if (res.code === 200) {
          if (res.item[0].articles_docs.length > 0) {
            res.item[0].articles_docs.forEach((ele: drowerListItem) => {
              temp.push({
                articleTitle: ele.articleTitle,
                articleTagColor: ele.articleTagColor,
                href: `/home/${res.item[0].columnName}_${ele.articleTitle}`
              })
            })
            this.setState({
              SkeletonShow: false,
              drowerList: {
                title: title,
                contents: temp
              }
            })
          } else {
            //这里很多余 只是练习ref  完全不必用ref来做
            if (this.empty.current) {
              this.setState({
                SkeletonShow: false
              })
              this.empty.current.style.display = 'block'
            }
          }
        }
      })
      .catch((err: any) => {
        throw err
      })
  }
}
