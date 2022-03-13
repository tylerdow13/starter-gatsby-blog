import React from 'react'

const Container = ({ children, as = 'div' }) => {
  const Tag = as

  return (
    <Tag
      className="row"
    >
      {children}
    </Tag>
  )
}

export default Container
