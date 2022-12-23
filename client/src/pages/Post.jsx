import React from 'react'
import { useParams } from 'react-router-dom'
import { posts } from '../data.js'


export default function Post() {
  const id = useParams()
  // console.log(id.id)
  const post = posts.find((post) => post.id == id.id)
  console.log(post)
  // const post = posts[2]
  return (
    <div className='post'>
      <img className='postImg' alt="" src={post.img} />
      <h1 className='postTitle'>{post.title}</h1>
      <p className='postDesc'>{post.desc}</p>
      <p className='postLongDesc'>{post.longDesc}</p>

    </div>
  )
}
