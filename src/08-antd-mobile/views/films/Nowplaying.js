import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import { NavLink, withRouter } from 'react-router-dom'
import { Image, List, InfiniteScroll } from 'antd-mobile'



export default function Nowplaying(props) {

  const [filmlist, setfilmlist] = useState([])
  const [hasMore, setHasMore] = useState(true)
  const pageNum = useRef(0)


  async function loadMore() {
    pageNum.current++
    const append = await axios({
      url: `https://m.maizuo.com/gateway?cityId=110100&pageNum=${pageNum.current}&pageSize=10&type=1&k=1886067`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16395416565231270166529","bc":"110100"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    })
    console.log(append)
    setfilmlist(val => [...val, ...append.data.data.films])
    setHasMore(append.data.data.films.length > 0)
  }

  const handleChangePage = (id) => {
    // window.location.href="#/detail/"+id
    props.history.push(`/detail/${id}`)
    // props.history.push({
    //     pathname:'/detail',
    //     query:{id:id}
    // })
  }

  return (
    <div>
      <List>
        {filmlist.map(item => (
          <List.Item onClick={()=>handleChangePage(item.filmId)}
            key={item.filmId}
            prefix={
              <Image
                src={item.poster}
                // style={{ borderRadius: 20 }}
                // fit='cover'
                width={60}
              // height={40}
              />}
            description={<div>
              <div>导演：{item.actors&&item.actors[0].name}</div>
              <div>
                主演：
                {item.actors&&item.actors.map(actor => (
                  actor.role !== "导演" && <span key={actor.name}>{actor.name} </span>
                ))}

              </div>
            </div>}
          >
            {item.name}
          </List.Item>
        ))}
      </List>
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
    </div>
  )
}




