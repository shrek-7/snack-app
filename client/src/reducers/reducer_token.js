/**
 * Created by Rubel on 28/01/18.
 */
import { SAVE_TOKEN } from "./../actions/token";
import { DELETE_TOKEN } from "./../actions/token";

export default function(state = null, action) {
  switch (action.type) {
    case SAVE_TOKEN:
      return action.payload;
    case DELETE_TOKEN:
      return null;
    default:
      return state;
  }
}