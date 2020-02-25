import React, { createRef, PureComponent } from 'react'
import { Route, Redirect, Switch, RouteComponentProps } from 'react-router-dom'

//@components
import { ContentRender, Loading, ScrollToTop } from '../../../components'
import NotFound from '../../NotFound/NotFound'
import Article from './Article/Article'
import Foot from '../Foot/Foot'
//@antd
import { Pagination } from 'antd'

//@network
import axios from '../../../netWork'

//@interface

interface Props extends RouteComponentProps {}

interface dataItem {
  // 数据单项接口
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

interface State {
  // state约束
  data: dataItem[]
  progress: {
    percent: number
    status: 'active' | 'normal' | 'success' | 'exception' | undefined
  }
}

//@class
export default class Content extends PureComponent<Props, State> {
  timeOut: any
  loading: React.RefObject<HTMLDivElement>
  constructor(props: Props) {
    super(props)
    this.timeOut = null
    this.loading = createRef()
    this.state = {
      data: [
        {
          title: 'default',
          IconTitle: {
            tag: 'default',
            tagColor: 'default',
            calendar: 'default',
            folder: 'default',
            fire: 0
          },
          content: {
            details: 'default',
            href: 'default'
          }
        }
      ],
      progress: {
        percent: 5,
        status: 'active'
      }
    }
  }
  render() {
    return (
      <>
        {/* loading */}
        <div ref={this.loading}>
          <Loading
            {...{
              percent: this.state.progress.percent,
              status: this.state.progress.status
            }}
          />
        </div>
        {/* router */}
        <ScrollToTop>
          <Switch>
            {/*首页文章渲染*/}
            <Route path="/home/index" exact>
              {/* 正文 */}
              {this.state.data.map((item, index) => {
                return (
                  <ContentRender
                    {...item}
                    key={item.title + index}
                  ></ContentRender>
                )
              })}
              {/* 分页 */}
              <Pagination
                showQuickJumper
                defaultCurrent={1}
                total={500}
                onChange={this.onChange}
                className="Pagination"
              />
              <Foot></Foot>
            </Route>
            {/*文章详情页路由分配*/}
            {this.state.data.map((item) => {
              return (
                <Route path="/home/aricle" key={item.title}>
                  <Article {...this.props}></Article>
                </Route>
              )
            })}

            {/* 默认进入首页 */}
            <Route path="/home" exact>
              <Redirect to="/home/index"></Redirect>
            </Route>
            {/*错误的url重定向*/}
            <Route>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </ScrollToTop>
      </>
    )
  }
  componentDidMount() {
    //组件挂载完成后
    document.title =
      '晚来风急|web前端-技术分享博客-javascript、vue、react、html、css'
    this.getData(1)
  }

  onChange = (pageNumber: number) => {
    this.getData(pageNumber)
  }
  //发请求渲染数据 同时处理 进度条
  getData = (page: number = 1, limit: number = 7) => {
    let loading = this.loading.current
    if (loading) {
      loading.style.display = 'block'
    }
    this.setState(
      {
        progress: {
          percent: 30,
          status: 'active'
        }
      },
      () => {
        axios({
          url: '/article/data',
          method: 'POST',
          data: {
            limit: limit,
            page: page
          }
        })
          .then((res: any) => {
            if (res.code === 200) {
              let temp: any = []
              this.setState(
                {
                  progress: {
                    percent: 80,
                    status: 'success'
                  }
                },
                () => {
                  res.item.forEach((item: any) => {
                    temp.push({
                      title: item.articleTitle,
                      IconTitle: {
                        tag: item.articleTag,
                        tagColor: item.articleTagColor,
                        calendar: item.articleDate,
                        folder: item.columns_docs[0].columnName,
                        fire: item.articleFire
                      },
                      content: {
                        details: item.articleDesp,
                        href: `/home/aricle/${item.columns_docs[0].columnName}_${item.articleTitle}`
                      }
                    })
                  })
                  this.setState(
                    {
                      data: temp
                    },
                    () => {
                      if (loading) {
                        loading.style.display = 'none'
                      }
                      if (temp.length === 0) {
                        this.props.history.replace('/home/noData')
                      }
                    }
                  )
                }
              )
            } else {
              this.setState(
                {
                  progress: {
                    percent: 70,
                    status: 'exception'
                  }
                },
                () => {
                  this.props.history.replace('/notFound')
                }
              )
            }
          })
          .catch((err: any) => {
            this.setState(
              {
                progress: {
                  percent: 70,
                  status: 'exception'
                }
              },
              () => {
                this.props.history.replace('/home/notFound')
                throw err
              }
            )
          })
      }
    )
  }
}
