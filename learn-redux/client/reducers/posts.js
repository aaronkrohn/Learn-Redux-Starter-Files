function posts(state = [], action){
  console.log(state, action);
  switch (action.type) {
    case 'INCREMENT_LIKES':
      // return state.map((post, i) => {
      //   if(action.index !== i){
      //     return post;
      //   }
      //   post.likes++
      //   return post;
      // });
      const i = action.index;
      return [
        ...state.slice(0, i), // Get copy of everything before;
        {...state[i], likes: state[i].likes + 1},
        ...state.slice(i + 1) // Get copy of everything after
      ];
      break;
    default:
      return state;
  }

}

export default posts
