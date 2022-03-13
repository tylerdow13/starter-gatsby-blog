import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'

class BlogIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulBlogPost.nodes')

    return (
      <Layout location={this.props.location}>
        <Seo title="Recent Articles" />
        <Hero title="Recent Articles" />
        <div id="tst-dynamic-content" class="tst-dynamic-content">
          <div class="tst-content-frame">
            <div class="tst-content-box">

              <div class="container">
                <a href="#tst-dynamic-content" class="tst-scroll-hint-frame tst-anchor-scroll">
                  <div class="tst-scroll-hint"></div>
                </a>
              </div>

              <div class="container tst-p-60-60">

                <div class="row">

                  <div class="col-lg-12">
                    <div class="text-center">
                      <div class="tst-suptitle tst-suptitle-center tst-mb-15">Newsletter</div>
                      <h3 class="tst-mb-30">Latest publications</h3>
                      <p class="tst-text tst-mb-60">Porro eveniet, autem ipsam corrupti consectetur cum. <br />Repudiandae dignissimos fugiat sit nam.</p>
                    </div>
                  </div>
                  <ArticlePreview posts={posts} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      nodes {
        title
        slug
        publishDate(formatString: "MMMM Do, YYYY")
        tags
        heroImage {
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            width: 424
            height: 212
          )
        }
        description {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`
