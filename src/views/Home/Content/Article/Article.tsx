import React, { Component } from 'react'
import { RouteComponentProps } from 'react-router-dom'

//@components
import { ArticleRender, AricleComment } from '../../../../components'
//@antd
import { Skeleton, Spin } from 'antd'
//@axios
import axios from '../../../../netWork'

interface Props extends RouteComponentProps {}
interface Content {
  title: string
  fire: number
  date: string
  article: any
  callBack: () => void
}
interface State {
  content: Content
  props: RouteComponentProps
  flag: boolean
}
export default class Article extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      content: {
        title: 'default',
        fire: 123,
        date: 'default',
        article: '/public/default.md', //后台的url地址
        callBack: this.commentGo
      },
      props: this.props,
      flag: true
    }
  }
  render() {
    return (
      <>
        {this.state.content.title === 'default' ? (
          <>
            <Skeleton active></Skeleton>
            <Skeleton active></Skeleton>
            <Skeleton active></Skeleton>
          </>
        ) : (
          <>
            {this.state.flag && <Spin></Spin>}
            <ArticleRender
              {...{
                content: this.state.content,
                props: this.state.props
              }}
            ></ArticleRender>
            {!this.state.flag && <AricleComment></AricleComment>}
          </>
        )}
      </>
    )
  }
  componentDidMount() {
    //将路由地址 拆解
    let arr = this.props.location.pathname.slice(6).split('_')
    document.title = arr[1]
    //发送请求
    let temp: Content
    axios({
      url: '/article/content',
      method: 'POST',
      data: {
        articleTitle: arr[1]
      }
    })
      .then((res: any) => {
        if (res.code === 200) {
          temp = {
            title: res.item[0].articleTitle,
            article: res.item[0].articleContent,
            fire: res.item[0].articleFire,
            date: res.item[0].articleDate,
            callBack: this.commentGo
          }
          return axios({
            url: res.item[0].articleContent,
            method: 'GET'
          })
        } else {
          this.props.history.replace('/home/notFound')
        }
      })
      .then((res: any) => {
        temp.article = res
        this.setState({
          content: temp
        })
      })
      .catch((err: any) => {
        console.log(err)
        this.props.history.replace('/home/notFound')
      })
  }
  commentGo = () => {
    this.setState({
      flag: false
    })
    //渲染评论
  }
}
