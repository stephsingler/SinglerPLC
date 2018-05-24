import { combineReducers } from 'redux';

const ourFirm = (state = [], action) => {
  if(action.type === "LOAD_FIRM") {
    return action.payload;
  }
  return state;
}

const practiceAreas = (state = [], action) => {
  if (action.type === "LOAD_PRACTICE_AREAS") {
    return action.payload;
  }
  return state;
}

const allReducers = combineReducers({
  ourFirm, practiceAreas
});

export default allReducers;
