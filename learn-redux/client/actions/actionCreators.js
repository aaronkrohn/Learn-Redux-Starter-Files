// Increment likes
export function increment(index){
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

// Add comment
export function addComment(postid, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postid,
    author,
    comment
  }
}

// Remove comment
export function removeComment(postid, i) {
  return {
    type: 'REMOVE_COMMENT',
    postid,
    i
  }
}
