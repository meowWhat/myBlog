import React, { PureComponent } from 'react'
import { Comment, Form, Button, List, Input } from 'antd'
import moment from 'moment'

const { TextArea } = Input

// 文本编辑组件 未对类型约束,这个不重要 懒得写了,你当然可以新开一个tsx来撰写
const Editor: (any: any) => any = ({
  onChange,
  onSubmit,
  submitting,
  value
}) => (
  <>
    <Form.Item>
      <TextArea rows={4} onChange={onChange} value={value} />
    </Form.Item>
    <Form.Item style={{ textAlign: 'center' }}>
      <Button
        htmlType="submit"
        loading={submitting}
        onClick={onSubmit}
        type="primary"
      >
        发布 留言
      </Button>
    </Form.Item>
  </>
)

//评论表单渲染
const CommentList: (e: any) => any = ({ comments }) => (
  <List
    dataSource={comments}
    header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
    itemLayout="horizontal"
    renderItem={(props: any) => <Comment {...props} />}
    style={{ padding: '10px' }}
  />
)

interface CommentsItem {
  author: string
  content: string
  datetime: string
}
interface State {
  comments: CommentsItem[]
  submitting: boolean
  value: string
}
export default class App extends PureComponent {
  state: State = {
    comments: [],
    submitting: false,
    value: ''
  }

  render() {
    const { comments, submitting, value } = this.state

    return (
      <>
        <Comment
          content={
            <Editor
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              submitting={submitting}
              value={value}
            />
          }
        />
        {comments.length > 0 && <CommentList comments={comments} />}
      </>
    )
  }
  componentDidMount() {
    //第一次加载评论

    this.setState({
      comments: [
        {
          author: '晚来风急',
          avatar: (
            <span
              role="img"
              aria-label="https://www.baidu.com"
              style={{ fontSize: '24px', color: 'rgb(0,0,0)' }}
            >
              😷
            </span>
          ),
          content: (
            <p style={{ lineHeight: '30px' }}>
              抱歉,由于是个人博客,没有盈利性质,考虑到服务器的维护费用,如果开放评论系统
              个人很难支撑,也会影响小伙伴浏览加载的速度,所以这里只做了一个离线的样式，
              不具备线上的功能,如果有什么问题,还是欢迎大家通过我的社交方式找到我。
            </p>
          ),
          datetime: moment().fromNow()
        }
      ]
    })
  }
  handleSubmit = () => {
    //点击提交
    if (!this.state.value) {
      return
    }
    this.setState({
      submitting: true
    })
    //发送请求把数据存进数据库
    setTimeout(() => {
      this.setState({
        submitting: false,
        value: '',
        comments: [
          {
            author: '我',
            avatar: (
              <span
                role="img"
                aria-label="https://www.baidu.com"
                style={{ fontSize: '24px', color: 'rgb(0,0,0)' }}
              >
                🤷
              </span>
            ),
            content: <p>{this.state.value}</p>,
            datetime: moment().fromNow()
          },
          ...this.state.comments
        ]
      })
    }, 1000)
  }
  handleChange = (e: any) => {
    //获取输入框的内容
    this.setState({
      value: e.target.value as string
    })
  }
}
