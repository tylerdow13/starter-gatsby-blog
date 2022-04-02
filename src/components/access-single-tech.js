import React from 'react'
import Helmet from 'react-helmet'

const AccessTech = ({ lat, lon }) => (
  <Helmet>
    <script type='text/javascript'>
    {`
      var accessLat = "${lat}";
      var accessLon = "${lon}";
    `}
    </script>
  </Helmet>
)


export default AccessTech
