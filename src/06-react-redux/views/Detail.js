import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { hide, show } from '../redux/actionCreator/TabbarActionCreator'

function Detail(props) {
  let {show,hide,match}=props
  useEffect(() => {
    console.log("id:"+match.params.id)
    hide()
    return () => {
      show()
    }
  }, [match.params.id,show,hide])

  return (
    <div>Detail</div>
  )
}

export default connect(null, {
  show,
  hide
})(Detail)
