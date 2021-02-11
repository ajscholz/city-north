import React from 'react'
import PropTypes from 'prop-types'

import { GatsbyImage } from 'gatsby-plugin-image'

const GatsbyImageFocalPoint = ({ image, focalPointData, ...props }) => {
  const { focalPoint, size } = focalPointData
  const xPerc = `${(focalPoint.x / size.w) * 100}%`
  const yPerc = `${(focalPoint.y / size.h) * 100}%`

  return (
    <GatsbyImage
      image={image}
      {...props}
      objectPosition={`${xPerc} ${yPerc}`}
    />
  )
}

GatsbyImageFocalPoint.propTypes = {
  image: PropTypes.object.isRequired,
  focalPointData: PropTypes.shape({
    focalPoint: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
    }).isRequired,
    size: PropTypes.shape({
      w: PropTypes.number.isRequired,
      h: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
}

export default GatsbyImageFocalPoint
