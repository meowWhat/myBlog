import React, { PureComponent, createRef } from 'react'

//@router
import { RouteComponentProps } from 'react-router-dom'

//@antd
import { Divider } from 'antd'
//@components
import { MessageBox } from '../index'
//@less
import './ArticleRender.less'
//@img
import airpay from '../../basic/img/airpay.jpg'
import wechat from '../../basic/img/wechat.png'

//@marked + hljs
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-dark.css'

//@init marked

marked.setOptions({
  highlight: function(code) {
    return hljs.highlightAuto(code).value
  }
})

//@interface
interface Content {
  title: string
  fire: number
  date: string
  article: any
  callBack: () => void
}
interface Props {
  content: Content
  props: RouteComponentProps
}

//@class
export default class ArticleRender extends PureComponent<Props> {
  article: React.RefObject<HTMLDivElement>
  constructor(props: Props) {
    super(props)
    this.article = createRef()
  }
  render() {
    return (
      <div className="articleContent">
        {/* context */}
        <h1 className="articleContentHead blue">{this.props.content.title}</h1>
        <div className="articleContentTag gray">
          {this.props.content.date}&nbsp;阅读&nbsp;{this.props.content.fire}
        </div>
        <div ref={this.article} className="articleContentCompiler"></div>
        {/* support */}
        <Divider className="blue">感谢您的翻阅</Divider>
        <div className="articleSupport">
          <h3>"如果你觉得文章不错,可以请作者喝一杯coffee"</h3>
          <h3>
            <MessageBox
              {...{
                title: '感谢您的支持',
                btnText: '打赏作者',
                context: (
                  <div>
                    <img src={airpay} alt="支付宝" width="50%" />
                    <img src={wechat} alt="微信" width="50%" />
                  </div>
                )
              }}
            ></MessageBox>
          </h3>
          <h3>"那样他将会更加开心"</h3>
        </div>
      </div>
    )
  }
  componentDidMount() {
    this.goMarked()
    //在这里 再去渲染 评论
    this.props.content.callBack()
  }

  goMarked = () => {
    let dom = this.article.current
    if (dom && this.props.content.article) {
      dom.innerHTML = marked(this.props.content.article)
    } else {
      this.props.props.history.replace('/home')
    }
  }
}
