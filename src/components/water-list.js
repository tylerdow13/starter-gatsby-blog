import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Container from './container'
import Tags from './tags'

const WaterList = ({ posts }) => {
  //if (!posts) return null
  //if (!Array.isArray(posts)) return null

  return (
    <Container>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.slug}>
              <Link to={`/water-access/${post.slug}`}>
                <h2>{post.name}</h2>
              </Link>
              <div>
                <small className="meta">{post.createdAt}</small>
              </div>
            </li>
          )
        })}
      </ul>
    </Container>
  )
}

export default WaterList
