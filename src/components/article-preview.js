import React from 'react'
import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import Container from './container'
import Tags from './tags'

const ArticlePreview = ({ posts }) => {
  if (!posts) return null
  if (!Array.isArray(posts)) return null

  return (
    <Container>

        {posts.map((post) => {
          return (
            <div class="col-lg-4">
              <div class="tst-blog-card tst-mb-60">
                <Link to={`/blog/${post.slug}`} className="tst-cover-frame tst-anima-link">
                  <GatsbyImage alt="" image={post.heroImage.gatsbyImageData} />
                  <Tags tags={post.tags} />
                </Link>
                <div class="tst-descr">

                <h5 class="tst-mb-15"><Link to={`/blog/${post.slug}`} className="tst-anima-link">{post.title}</Link></h5>
                  <div class="tst-text"
                    dangerouslySetInnerHTML={{
                      __html: post.description.childMarkdownRemark.html,
                    }}
                  />
                  <div class="tst-spacer-sm"></div>
                  <div class="tst-post-bottom">
                    <div class="tst-post-author">
                      <img src="img/faces/2.jpg" alt="author" />
                      <h6>Viktoria Freeman</h6>
                    </div>
                    <div class="tst-date">{post.publishDate}</div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
    </Container>
  )
}

export default ArticlePreview
