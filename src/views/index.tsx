//Loading  : 载入组件
//Component  : 做类型检测用
import { Loading, Component } from '../components'

//Loadable 第三方库  解决懒加载问题

import Loadable from 'react-loadable'

const Home = Loadable({
  loader: () => import('./Home/Home'),
  loading: Loading as typeof Component
})

const NotFound = Loadable({
  loader: () => import('./NotFound/NotFound'),
  loading: Loading as typeof Component
})

const Another = Loadable({
  loader: () => import('./Another/Another'),
  loading: Loading as typeof Component
})

export { Home, NotFound, Another }
