import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Tags from '../components/tags'

class WaterAccessTemplate extends React.Component {
  render() {
    const post = get(this.props, 'data.contentfulWaterAccess')
    const previous = get(this.props, 'data.previous')
    const next = get(this.props, 'data.next')

    return (
      <Layout location={this.props.location}>
        <Seo
          title={post.name}
          description="yep"
        />

        <div id="tst-dynamic-content" class="tst-dynamic-content sc-water-access-container">

          <div class="tst-content-frame">
            <div class="tst-content-box">

              <div class="container tst-p-60-0">

                  <div class="tst-banner-sm">

                    <div class="tst-cover-frame">
                      <img src="img/menu/4.jpg" alt="cover" class="tst-cover" />
                      <div class="tst-overlay"></div>
                    </div>

                    <div class="row align-items-center">

                      <div class="col-lg-8">

                        <div class="tst-text-frame">
                          <div class="tst-suptitle tst-suptitle-mobile-center tst-white-2 tst-mb-15">About us</div>
                          <h2 class="tst-white-2 tst-mb-30">Working hours</h2>
                          <p class="tst-text tst-white-2 tst-mb-30">Rolorem, beatae dolorum, praesentium itaque et quam quaerat.</p>
                          <div class="tst-btn-mobile">
                            <a href="#." class="tst-btn tst-res-btn tst-mr-30">Reservation</a>
                            <a href="contact.html" class="tst-label tst-white-2">Contact us</a>
                          </div>
                        </div>

                      </div>
                      <div class="col-lg-4">

                        <div class="tst-wh-frame">

                          <div class="tst-mb-30">
                            <div class="tst-label tst-mb-15">Sunday to Tuesday</div>
                            <div class="h5">09 <span class="tst-color">:</span> 00</div>
                            <div class="h5">22 <span class="tst-color">:</span> 00</div>
                          </div>

                          <div>
                            <div class="tst-label tst-mb-15">Friday to Saturday</div>
                            <div class="h5">11 <span class="tst-color">:</span> 00</div>
                            <div class="h5">19 <span class="tst-color">:</span> 00</div>
                          </div>

                        </div>

                      </div>
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

export default WaterAccessTemplate

export const pageQuery = graphql`
  query WaterAccessBySlug {
    contentfulWaterAccess {
      id
      name
      slug
    }
  }
`
