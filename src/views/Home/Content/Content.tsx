import React, { Component, createRef } from 'react'
import { Route, Redirect, Switch, RouteComponentProps } from 'react-router-dom'

//@components
import { ContentRender } from '../../../components'
import Article from './Article/Article'
//@antd
import { Empty } from 'antd'

//@interface
interface Props extends RouteComponentProps {}
interface State {}

const obj = {
  title: '文章标题',
  IconTitle: {
    tag: '小编推荐',
    calendar: '2020/02/10',
    folder: 'JavaScript',
    fire: 15000
  },
  content: {
    details:
      '跟着我学一年，掌握程序的学习方法。 也许你刚步入IT行业，也许你遇到了成长瓶颈，也许你不知道该学习什么知识，也许你不会融入团队，也许...........有些时候你陷入彷徨。 你需要一个强力的队友，你需要一个资深老手，你需要一个随时可以帮助你的人，你更需要一个陪你加速前行的。 我在这个行业走了12年，从后端、前端到移动端都从事过，从中走了很多坑，但我有一套适合程序员的学习方法。 如果你愿意，我将带着你在这个程序行业加速奔跑。分享我学习的方法，所学的内容和一切我的资料。 你遇到的职业问题，我也会第一时间给你解答',
    href: '/home/article'
  }
}
//@class
export default class Content extends Component<Props, State> {
  empty: React.RefObject<HTMLDivElement>
  constructor(props: Props) {
    super(props)
    this.empty = createRef()
  }
  render() {
    return (
      <>
        <Switch>
          <Route path="/home/index">
            <ContentRender {...obj}></ContentRender>
            <ContentRender {...obj}></ContentRender>
            <ContentRender {...obj}></ContentRender>
            <ContentRender {...obj}></ContentRender>
            <ContentRender {...obj}></ContentRender>
          </Route>
          <Route path="/home/article">
            <Article {...this.props}></Article>
          </Route>
          <Route path="/home" exact>
            <Redirect to="/home/index"></Redirect>
          </Route>
          <Route path="/home">
            <div ref={this.empty}>
              <Empty description="您所访问的页面不存在,将在3s内返回"></Empty>
            </div>
          </Route>
        </Switch>
      </>
    )
  }
  componentDidMount() {
    let empty = this.empty.current
    if (empty) {
      setTimeout(() => {
        this.props.history.replace('/home')
      }, 3000)
    }
  }
}
