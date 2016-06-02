import React, { PropTypes } from 'react'

const Box = ({ color, onClickDiv, onClickButton }) => {
  const classname = `box ${color}`
  return (
    <div>
      <div className={classname} onClick={onClickDiv}>
        <button onClick={onClickButton}>Remove</button>
      </div>
      <p>------------------</p>
    </div>
  )
}

Box.propTypes = {
  color: PropTypes.string.isRequired,
  onClickDiv: PropTypes.func.isRequired,
  onClickButton: PropTypes.func.isRequired
}

export default Box
