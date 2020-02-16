//Loading  : 载入组件
//Component  : 做类型检测用

//Loadable 第三方库  解决懒加载问题

import Loadable from '@loadable/component'

const Home = Loadable(() => import('./Home/Home'))

const NotFound = Loadable(() => import('./NotFound/NotFound'))

const Another = Loadable(() => import('./Another/Another'))

export { Home, NotFound, Another }
