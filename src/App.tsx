//@React  react库引入
import React, { Component } from 'react'

//@router 路由处理
import { Switch, Route, Redirect } from 'react-router-dom'

//@views 引入视图组件
import { Home, NotFound, Another } from './views'

//@basic  引入初始化操作
import './basic/normalize.css'
import './basic/theme.less'

export default class App extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route component={Home} path="/home"></Route>
          <Route component={NotFound} path="/notFound"></Route>
          <Route component={Another} path="/another"></Route>
          <Route path="/" exact>
            <Redirect to="/home"></Redirect>
          </Route>
          <Route path="/">
            <Redirect to="/notFound"></Redirect>
          </Route>
        </Switch>
      </>
    )
  }
}
