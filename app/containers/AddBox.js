import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { addBox } from '../actions'

let AddBox = ({ dispatch }) => (
  <button
    type="submit"
    onClick={() => {
    dispatch(addBox())
    }} >
    Add Box
  </button>
)

AddBox = connect()(AddBox)

AddBox.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default AddBox
