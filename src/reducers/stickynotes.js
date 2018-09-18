const stickynotes = ( state =[] , action ) => {
  switch(action.type){
    case 'STICKYNOTES':
      return action.stickynotes
    case 'ADD_STICKY':
      return [action.stickynotes, ...state]
    default:
      return state
  }
}

export default stickynotes
