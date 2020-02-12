import React, { Component } from 'react'

//@antd
import { Timeline } from 'antd'
//@less
import './tabStudyMap.less'

export default class TabStudyMap extends Component {
  render() {
    return (
      <Timeline className="tabStudyMap">
        <Timeline.Item>1:掌握基本的 HTML5 + CSS3 + PC端布局 </Timeline.Item>
        <Timeline.Item>2:补充学习HTML5和CSS3新特性</Timeline.Item>
        <Timeline.Item>
          <p> 3:学习移动端布局 =></p>
          <p>-百分比布局,rem布局,flex布局</p>
          <p>-响应式布局 + bootstrap库学习</p>
        </Timeline.Item>
        <Timeline.Item color="red">4:学习JavaScript基础语法</Timeline.Item>
        <Timeline.Item color="red">5:JavaScript实战DOM+BOM </Timeline.Item>
        <Timeline.Item color="red">6:掌握Jquery</Timeline.Item>
        <Timeline.Item color="red">
          <p> 7:JavaScript进阶高级=></p>
          <p>-ES6,堆栈内存闭包作用域核心原理</p>
          <p>-数据结构与算法(掌握基本的,工作中深入)</p>
        </Timeline.Item>
        <Timeline.Item color="green">
          8:Ajax+Http协议(Web开发基础)
        </Timeline.Item>
        <Timeline.Item color="green">
          <p>9:Node.js+MongoDB+Mysql=></p>
          -进阶全干工程师,主要利用框架写接口
        </Timeline.Item>
        <Timeline.Item color="red">
          <p>10:前端核心框架 Vue + git =></p>
          <p>-用Vue全家桶做出一个项目</p>
          <p>-然后去研究Vue源码(看个人能力)</p>
        </Timeline.Item>
        <Timeline.Item color="red">
          <p>11:React + AntD + TypeScript</p>
          <p>-弄懂redux原理,路由懒加载原理</p>
          <p>-利用React全家桶+antd+TS做项目</p>
        </Timeline.Item>
        <Timeline.Item color="red">
          <p>12:小程序学习</p>
        </Timeline.Item>
        <Timeline.Item color="red">
          <p>13:刷力扣!!,复习!!,准备面试!!</p>
        </Timeline.Item>
      </Timeline>
    )
  }
}
