import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink, withRouter } from 'react-router-dom'

export default function Nowplaying(props) {

    const [list, setlist] = useState([])

    useEffect(() => {
        axios({
            url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=1886067",
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16395416565231270166529","bc":"110100"}',
                'X-Host': 'mall.film-ticket.film.list'
            }
        }).then(res => {
            // console.log(res.data.data.films)
            setlist(res.data.data.films)
        })
    }, [])

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
            {
                list.map(item =>
                    <WithFilmItem key={item.filmId} {...item}></WithFilmItem>
                )
            }
        </div>
    )
}

function FilmItem(props) {
    let { name, filmId } = props
    return <li onClick={() => {
        props.history.push(`/detail/${filmId}`)
    }}>{name}</li>
}

const WithFilmItem = withRouter(FilmItem)