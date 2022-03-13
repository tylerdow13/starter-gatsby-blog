import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Tags from '../components/tags'
import * as styles from './blog-post.module.css'

class BlogPostTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulBlogPost')
    const previous = get(this.props, 'data.previous')
    const next = get(this.props, 'data.next')

    return (
      <Layout location={this.props.location}>
        <Seo
          title={post.title}
          description={post.description.childMarkdownRemark.excerpt}
          image={`http:${post.heroImage.resize.src}`}
        />
        <Hero
          image={post.heroImage?.gatsbyImageData}
          title={post.title}
          content={post.description?.childMarkdownRemark?.excerpt}
        />
        <div id="tst-dynamic-content" class="tst-dynamic-content">

          <div class="tst-content-frame">
            <div class="tst-content-box">

              <div class="container">
                <a href="#tst-dynamic-content" class="tst-scroll-hint-frame tst-anchor-scroll">
                  <div class="tst-scroll-hint"></div>
                </a>
              </div>

              <div class="container tst-p-60-60">

                <div class="row justify-content-center">

                  <div class="col-lg-8">

                    <div class="tst-post-bottom tst-mb-30">
                      <div class="tst-post-author">
                        <img src="img/faces/2.jpg" alt="author" />
                        <h6>
                        <span className={styles.meta}>
                          {post.author?.name} &middot;{' '}
                        </span>
                        </h6>
                      </div>
                      <div class="tst-date">02.02.21</div>
                    </div>

                    <div
                      className={styles.body}
                      dangerouslySetInnerHTML={{
                        __html: post.body?.childMarkdownRemark?.html,
                      }}
                    />

                    <div class="tst-spacer"></div>

                    <Tags tags={post.tags} />
                    {(previous || next) && (
                      <nav>
                        <ul className={styles.articleNavigation}>
                          {previous && (
                            <li>
                              <Link to={`/blog/${previous.slug}`} rel="prev">
                                ← {previous.title}
                              </Link>
                            </li>
                          )}
                          {next && (
                            <li>
                              <Link to={`/blog/${next.slug}`} rel="next">
                                {next.title} →
                              </Link>
                            </li>
                          )}
                        </ul>
                      </nav>
                    )}

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $slug: String!
    $previousPostSlug: String
    $nextPostSlug: String
  ) {
    contentfulBlogPost(slug: { eq: $slug }) {
      slug
      title
      author {
        name
      }
      publishDate(formatString: "MMMM Do, YYYY")
      rawDate: publishDate
      heroImage {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, width: 1280)
        resize(height: 630, width: 1200) {
          src
        }
      }
      body {
        childMarkdownRemark {
          html
          timeToRead
        }
      }
      tags
      description {
        childMarkdownRemark {
          excerpt
        }
      }
    }
    previous: contentfulBlogPost(slug: { eq: $previousPostSlug }) {
      slug
      title
    }
    next: contentfulBlogPost(slug: { eq: $nextPostSlug }) {
      slug
      title
    }
  }
`
