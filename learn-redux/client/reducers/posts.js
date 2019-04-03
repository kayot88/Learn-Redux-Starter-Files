//1. the action (info about what happened)

//2. copy of current state

function posts(state = [], action) {
  console.log('The posts reducers was lounched');
  console.log(state, action);
  return state;
}
export default posts;
