import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import AccessHero from '../components/heroaccess'

class statesTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulStates')
    const previous = get(this.props, 'data.previous')
    const next = get(this.props, 'data.next')

    return (
      <Layout location={this.props.location}>
        <Seo
          title={post.name}
          description="yep"
        />

        <AccessHero
          image={post.mainImage?.gatsbyImageData}
          title={post.name}
          content={post.description?.childMarkdownRemark?.excerpt}
        />

        <div id="tst-dynamic-content" class="tst-dynamic-content sc-water-access-container">

          <div class="tst-content-frame">
            <div class="tst-content-box">

            <div class="sc-water-access-quicklink-bg">
              <a href="#tst-dynamic-content" class="tst-scroll-hint-frame sc-quicklinks quick-link-share">
                1
              </a>
              <a href="#tst-dynamic-content" class="tst-scroll-hint-frame sc-quicklinks quick-link-second">
                2
              </a>
            </div>

              <div class="container tst-p-60-0">

                  <div class="tst-banner-sm">

                    <div class="row align-items-center">

                      <div class="col-lg-12">

                        <div class="tst-wh-frame">

                          <div class="tst-mb-30">
                            <div class="tst-label tst-mb-15">Data</div>
                            <div class="h5">Name: {post.name}</div>
                            <div class="h5">id: {post.id}</div>
                            <div class="h5">slug: {post.slug}</div>
                            <div>

                            </div>

                          </div>


                        </div>

                      </div>

                    </div>

                </div>
              </div>
              <div
                className="test"
                dangerouslySetInnerHTML={{
                  __html: post.stateNotes?.childMarkdownRemark?.html,
                }}
              />
            </div>
          </div>
        </div>


      </Layout>
    )
  }
}

export default statesTemplate

export const pageQuery = graphql`
  query statesBySlug(
    $slug: String!
  ){
    contentfulStates(slug: { eq: $slug }) {
      id
      name
      slug
      stateNotes {
        stateNotes
        childMarkdownRemark {
          html
          timeToRead
          excerpt
        }
      }
      mainImage {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED, width: 1280)
        resize(height: 630, width: 1200) {
          src
        }
      }
    }
  }
`
