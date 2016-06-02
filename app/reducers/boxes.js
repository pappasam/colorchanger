const box = (state, action) => {
  switch (action.type) {
    case 'ADD_BOX':
      return {
        id: action.id,
        color: 'blue'
      }
    case 'TOGGLE_BOX_COLOR':
      if (state.id !== action.id) {
        return state
      }
      return Object.assign({}, state, {
        color: state.color === 'blue' ? 'red' : 'blue'
      })
    default:
      return state
  }
}

const boxes = (state = [], action) => {
  switch (action.type) {
    case 'ADD_BOX':
      return [
        ...state,
        box(undefined, action)
      ]
    case 'TOGGLE_BOX_COLOR':
      return state.map(b =>
        box(b, action)
      )
    case 'REMOVE_BOX':
      return state.filter(b => action.id !== b.id)
    default:
      return state
  }
}

export default boxes
