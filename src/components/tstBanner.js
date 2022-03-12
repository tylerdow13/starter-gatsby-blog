import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'


const TstBanner = ({ image, title, content }) => (
  <div id="tst-dynamic-banner" class="tst-dynamic-banner">
    <div class="tst-banner">
      <div class="tst-cover-frame">

        {image && (
          <GatsbyImage className="tst-cover tst-parallax" alt={title} image={image} />
        )}
        <div class="tst-overlay"></div>
      </div>
      <div class="tst-banner-content-frame">
        <div class="container">
          <div class="tst-main-title-frame">
            <div class="tst-main-title">
              <div class="tst-suptitle tst-suptitle-mobile-center tst-text-shadow tst-white-2 tst-mb-15">Hello, new friend!</div>
              <h1 class="tst-white-2 tst-text-shadow tst-mb-30">{title}</h1>
              <div class="tst-text tst-text-shadow tst-text-lg tst-white-2 tst-mb-30">{content}</div>
              <a href="#." class="tst-btn tst-btn-lg tst-btn-shadow tst-res-btn tst-mr-30">Reservation</a>
              <a href="menu-1.html" class="tst-label tst-white-2">Open Menu</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default TstBanner
