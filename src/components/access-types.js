import React from 'react'

const AccessTypes = ({ accessTypes }) =>
  accessTypes?.length > 0 && (
    <div className="tst-card-badge tst-auxiliary-color-1">
      {accessTypes.map((typeName) => (
        <div key={typeName}>
          {typeName}
        </div>
      ))}
    </div>
  )

export default AccessTypes
