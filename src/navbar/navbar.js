import React, { Component } from 'react'
import NavbarPropTypes from 'prop-types'

export default class Navbar extends Component {
  // 类属性
  static propTypes = {
    title: NavbarPropTypes.string
  }
  render() {
    // 解构
    let { title } = this.props
    return (
      // 属性从父组件得到
      <div>{title}</div>
    )
  }
}


