import { Component } from 'react'

import Loading from './Loading/Loading'
import Spin from './Loading/Spin'
import Loadable from 'react-loadable'
import TabRender from './TabRender/TabRender'
import ContentRender from './ContentRender/ContentRender'

const ArticleRender = Loadable({
  loader: () => import('./ArticleRender/ArticleRender'),
  loading: Spin as typeof Component
})

const AricleCommt = Loadable({
  loader: () => import('./ArticleCommt/ArticleCommt'),
  loading: Spin as typeof Component
})

const MessageBox = Loadable({
  loader: () => import('./MessageBox/MessageBox'),
  loading: Spin as typeof Component
})

export {
  Loading,
  Component,
  TabRender,
  ContentRender,
  ArticleRender,
  AricleCommt,
  MessageBox
}
