let nextBoxId = 0

export const addBox = () => {
  return {
    type: 'ADD_BOX',
    id: nextBoxId++
  }
}

export const toggleBoxColor = (id) => {
  return {
    type: 'TOGGLE_BOX_COLOR',
    id
  }
}

export const removeBox = (id) => {
  return {
    type: 'REMOVE_BOX',
    id
  }
}
