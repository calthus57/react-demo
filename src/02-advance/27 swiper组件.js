import React, { Component } from 'react'
import DSwiper from './swiper/Swiper'
import DSwiperItem from './swiper/Swiper-item'

export default class App27 extends Component {
  state = {
    list: []
  }

  componentDidMount() {
    setTimeout(()=>{
      this.setState({
        list: ["321", "31231", "daadad", "dadaaa"]
      })
    },1000)
  }

  render() {
    return (
      <div>
        <DSwiper>
          {this.state.list.map(item=><DSwiperItem key={item}>
            <img src={require('./swiper/1200.jpg')} style={{
              width:"100%"
            }}></img>
          </DSwiperItem>)}
        </DSwiper>
      </div>
    )
  }
}
