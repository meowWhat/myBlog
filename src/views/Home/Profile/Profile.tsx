import React, { Component, createRef } from 'react'

//@css
import './Profile.less'

//@components
import ProfileAvatar from './ProfileAvatar/ProfileAvatar'
import ProfileTabs from './ProfileTabs/ProfileTabs'

export default class Profile extends Component {
  item: React.RefObject<HTMLDivElement>
  constructor(props: {}) {
    super(props)
    this.item = createRef()
  }
  render() {
    return (
      <div id="profile">
        <div className="profileItem1">
          <ProfileAvatar />
        </div>
        <div className="profileItem2" ref={this.item}>
          <ProfileTabs />
        </div>
      </div>
    )
  }
  componentDidMount() {
    window.addEventListener('scroll', this.bindScroll)
  }
  bindScroll = () => {
    //侧边栏固定定位
    let dom = this.item.current
    if (window.scrollY > 350) {
      dom && dom.classList.add('profileFixed')
    } else {
      dom && dom.classList.remove('profileFixed')
    }
  }
}
