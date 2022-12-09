import React, { useEffect, Component } from 'react'

// useEffect 数组空 只执行一次
function Child() {
  useEffect(() => {
    window.onresize = () => {
      console.log("resize")
    }
    
    // 清理工作
    return () => {
      window.onresize = null
    }
  }, [])
  return <div>child</div>
}


export default class App6 extends Component {
  state = {
    isCreated: true
  }

  render() {
    return (
      <div>
        <button onClick={() => {
          this.setState({
            isCreated: !this.state.isCreated
          })

        }}>点击</button>
        {this.state.isCreated && <Child></Child>}
      </div>
    )
  }
}
