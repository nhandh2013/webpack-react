const initialState = {} ;
function simpleReducer(state = initialState, action ) {
  console.log(state, 'state')
  switch (action.type) {
    case 'SIMPLE_ACTION':
      return {
        result: action.payload
      }
    default:
      return state
  }
}
export default simpleReducer;