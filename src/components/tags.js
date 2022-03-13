import React from 'react'

import * as styles from './tags.module.css'

const Tags = ({ tags }) =>
  tags?.length > 0 && (
    <div className="tst-card-badge tst-auxiliary-color-1">
      {tags.map((tag) => (
        <div key={tag}>
          {tag}
        </div>
      ))}
    </div>
  )

export default Tags
