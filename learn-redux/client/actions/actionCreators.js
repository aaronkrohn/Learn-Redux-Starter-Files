// Increment likes
export function increment(index){
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

// Add comment
export function addComment(postid, autor, comment) {
  return {
    type: 'ADD_COMMENT',
    postid,
    autor,
    comment
  }
}

// Remove comment
export function removeComment(postid, i) {
  type: 'REMOVE_COMMENT',
  postid,
  i
}
