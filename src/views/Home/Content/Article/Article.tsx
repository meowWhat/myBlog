import React, { Component } from 'react'
import { RouteComponentProps } from 'react-router-dom'
//@components
import { ArticleRender } from '../../../../components'

interface Props extends RouteComponentProps {}

export default class Article extends Component<Props> {
  obj: {
    title: string
    fire: number
    date: string
    article: string
    props: RouteComponentProps
  }
  constructor(props: Props) {
    super(props)
    this.obj = {
      title: 'string',
      fire: 123,
      date: 'asdasd',
      article: 'asdasd',
      props: this.props
    }
  }
  render() {
    return <ArticleRender {...this.obj}></ArticleRender>
  }
}
