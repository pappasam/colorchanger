import { connect } from 'react-redux'
import { toggleBoxColor } from '../actions'
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
    }
  }
}

const ViewBoxList = connect(
  mapStateToProps,
  mapDispatchToProps
)(BoxList)

export default ViewBoxList
