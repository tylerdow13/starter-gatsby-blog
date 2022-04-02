import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

import * as styles from './hero.module.css'

const AccessHero = ({ image, title, content }) => (
  <div id="tst-dynamic-banner" class="tst-dynamic-banner sc-water-access-banner">
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
            <div class="tst-main-title text-left">
              <h1 class="tst-white-2 tst-text-shadow tst-mb-30">{title}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default AccessHero
