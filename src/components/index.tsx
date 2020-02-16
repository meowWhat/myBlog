import { Component } from 'react'

import Loading from './Loading/Loading'

import Loadable from '@loadable/component'
import TabRender from './TabRender/TabRender'
import ContentRender from './ContentRender/ContentRender'
import ScrollToTop from './ScrollToTop/ScrollToTop'

const ArticleRender = Loadable(() => import('./ArticleRender/ArticleRender'))

const AricleComment = Loadable(() => import('./ArticleComment/ArticleComment'))

const MessageBox = Loadable(() => import('./MessageBox/MessageBox'))

export {
  Loading,
  Component,
  TabRender,
  ContentRender,
  ArticleRender,
  AricleComment,
  MessageBox,
  ScrollToTop
}
