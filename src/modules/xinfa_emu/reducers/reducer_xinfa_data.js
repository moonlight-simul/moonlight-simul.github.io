import { SELECT_XINFA, HANDLE_ERROR } from "../actions/index";

export default function(state = {
  name: null,
  reinforce: [],
  skills: [],
  brkthruLevels: []
}, action) {
  if(action.error) {
    action.type = HANDLE_ERROR;
  }

  switch (action.type) {
    case SELECT_XINFA:
      if(!action.type)
        ;
      return action.payload;
    case HANDLE_ERROR:
      alert("실패, 다시시작해주세요");
      return state;
  }
  return state;
}
