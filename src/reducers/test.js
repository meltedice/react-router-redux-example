const initialState = 'fufufu'

const test = (state = initialState, action) => {
  switch (action.type) {
    case 'TODO: Action name here':
      const newState = 'hahaha'
      return newState
    default:
      return state
  }
}

export default test
