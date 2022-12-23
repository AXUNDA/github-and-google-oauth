import React from 'react'
import {posts} from "../data.js"
import Card from "../components/Card"

export default function Home() {
  return (
    <div className='home'>
    {posts.map(post=>(
      <Card key={post.id} post={post}/>
))}

    </div>
  )
}
