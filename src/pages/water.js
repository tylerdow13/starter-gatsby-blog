import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import WaterList from '../components/water-list'

class WaterIndex extends React.Component {
  render() {
    const posts = get(this, 'props.data.allContentfulWaterAccess.nodes')

    return (
      <Layout location={this.props.location}>
        <Seo title="Water Access" />
        <Hero title="Water Access" />
        <WaterList posts={posts} />
      </Layout>
    )
  }
}

export default WaterIndex

export const pageQuery = graphql`
  query WaterIndexQuery {
    allContentfulWaterAccess {
      nodes {
        name
        slug
        state
        createdAt
      }
    }
  }
`
