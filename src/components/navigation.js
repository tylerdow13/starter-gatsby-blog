import React from 'react'
import { Link } from 'gatsby'

import * as styles from './navigation.module.css'

const Navigation = () => (
  <nav>
    <ul>
      <li class="menu-item-has-children">
        <Link to="/" activeClassName="active">
          Home
        </Link>
        <ul>
          <li><a href="home-slider.html">Home slider</a></li>
          <li><a href="home-image.html">Home image</a></li>
          <li><a href="home-video.html">Home video</a></li>
          <li><a data-no-swup target="_blank" href="onepage.html">Onepage</a></li>
        </ul>
      </li>
      <li>
        <Link to="/blog/" activeClassName="active">Blog</Link>
      </li>
    </ul>
  </nav>
)

export default Navigation
