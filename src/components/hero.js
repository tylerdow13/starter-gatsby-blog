import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

import * as styles from './hero.module.css'

const Hero = ({ image, title, content }) => (
  <div id="tst-dynamic-banner" class="tst-dynamic-banner">
    <div class="tst-banner tst-small-banner">
      <div class="tst-cover-frame">
        {image && (
          <GatsbyImage className="tst-cover tst-parallax" alt={title} image={image} />
        )}
        <div class="tst-overlay"></div>
      </div>
      <div class="tst-banner-content-frame">
        <div class="container">
          <div class="tst-main-title-frame">
            <div class="tst-main-title text-center">
              <div class="tst-suptitle tst-suptitle-center tst-suptitle-mobile-center tst-text-shadow tst-white-2 tst-mb-15">Category</div>
              <h1 class="tst-white-2 tst-text-shadow tst-mb-30">{title}</h1>
              <div class="tst-text tst-text-shadow tst-text-lg tst-white-2 tst-mb-30">{content}</div>
              <ul class="tst-breadcrumbs">
                <li><a href="/" class="tst-anima-link">Home</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Hero
