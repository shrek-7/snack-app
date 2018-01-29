import { SAVE_TOKEN } from "./../actions/token";


export default function(state = null, action) {
  switch (action.type) {
    case SAVE_TOKEN:
      return action.payload;
    default:
      return state;
  }
}