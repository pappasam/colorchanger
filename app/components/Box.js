import React, { PropTypes } from 'react'

const Box = ({ color }) => {
  const classname = `box ${color}`
  return (
    <div className={classname}></div>
  )
}

Box.propTypes = {
  color: PropTypes.string.isRequired
}

export default Box
