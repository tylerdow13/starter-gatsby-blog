import React from 'react'


import * as styles from './hero.module.css'

const AccessMap = ({ image, title, content, state }) => (
  <div class="tst-call-to-action">
    <div class="tst-cover-frame">
      <div class="tst-map-frame">
        <div id="map" class="tst-map"></div>
      </div>
      <div class="tst-overlay tst-with-map"></div>
      <div class="tst-lock"><i class="fas fa-lock"></i></div>
    </div>
    <div class="container">

      <div class="row align-items-center">
        <div class="col-lg-6">

          <div class="tst-cta-frame">
            <div class="tst-cta">
              <div class="">
                <div class="tst-suptitle tst-suptitle-mobile-center tst-text-shadow tst-white-2 tst-mb-15">{state}</div>
              </div>
              <h1 class="tst-white-2 tst-text-shadow tst-mb-30">{title}</h1>
              <div class="">
                <div class="tst-text tst-text-lg tst-text-shadow tst-white-2 tst-mb-30">Quaerat debitis, vel, sapiente dicta sequi <br />labore porro pariatur harum expedita.</div>
              </div>
              <a href="#." class="tst-lock tst-btn tst-btn-lg tst-btn-shadow tst-res-btn tst-mr-30">reservation</a>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>

)

export default AccessMap
