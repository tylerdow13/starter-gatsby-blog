import React from 'react'

import './variables.css'
import Seo from './seo'
import Navigation from './navigation'
import Footer from './footer'
class Template extends React.Component {
  render() {
    const { children } = this.props

    return (
      <>
          <Seo />
          <div id="tst-app" class="tst-app">
            <div class="tst-menu-frame">
              <div class="tst-dynamic-menu" id="tst-dynamic-menu">
                <div class="tst-menu">
                  <img src="/img/logo-sm.svg" class="tst-logo" alt="Tastyc" />
                  <Navigation />
                  <div class="tst-menu-right">
                    <a href="#" class="tst-btn tst-res-btn" data-no-swup>Reservation</a>
                    <div class="tst-menu-button-frame">
                      <div class="tst-menu-btn">
                        <div class="tst-burger">
                          <span></span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              <main>{children}</main>
              <Footer />
        </div>
      </>
    )
  }
}

export default Template
