
function postComments(state = [], action) {
  switch (action.type) {
    case 'ADD_COMMENT':
      return [...state,{
        user: action.author,
        text: action.comment
      }];
    case 'REMOVE_COMMENT':
      // return state.filter((comment, i) => {
      //   return i !== action.i;
      // })
      return [
        ...state.slice(0, action.i),
        ...state.slice(action.i + 1)
      ]

    default:
      return state;
  }
  return state;
}

function comments(state = [], action){
  if(typeof action.postid !== 'undefined'){
    return {
      // take the comment state
      ...state,
      // Overwrite this post with a new one
      [action.postid]: postComments(state[action.postid], action)
    }
  }
  return state;
}

export default comments
