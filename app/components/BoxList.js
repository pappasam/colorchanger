import React, { PropTypes } from 'react'
import Box from './Box'

const BoxList = ({ boxes, onBoxClick, onButtonClick }) => (
  <div>
    {boxes.map(box =>
      <Box
        key={box.id}
        {...box}
        onClickDiv={() => onBoxClick(box.id)}
        onClickButton={() => onButtonClick(box.id)}
      />
      )}
  </div>
)

BoxList.propTypes = {
  boxes: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired
  })),
  onBoxClick: PropTypes.func.isRequired,
  onButtonClick: PropTypes.func.isRequired
}

export default BoxList
