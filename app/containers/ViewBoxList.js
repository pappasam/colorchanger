import { connect } from 'react-redux'
import { toggleBoxColor, removeBox } from '../actions'
import BoxList from '../components/BoxList'

const mapStateToProps = (state) => {
  return {
    boxes: state.boxes
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onBoxClick: (id) => {
      dispatch(toggleBoxColor(id))
    },
    onButtonClick: (id) => {
      dispatch(removeBox(id))
    }
  }
}

const ViewBoxList = connect(
  mapStateToProps,
  mapDispatchToProps
)(BoxList)

export default ViewBoxList
