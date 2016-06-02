import React, { PropTypes } from 'react'

const Box = ({ color, onClick }) => {
  const classname = `box ${color}`
  return (
    <div>
      <div className={classname} onClick={onClick}></div>
      <p>Box above!</p>
    </div>
  )
}

Box.propTypes = {
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Box
