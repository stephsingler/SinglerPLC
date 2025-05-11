import { combineReducers } from 'redux';


const practiceAreas = (state = [], action) => {
  if (action.type === "LOAD_PRACTICE_AREAS") {
    return action.payload;
  }
  return state;
};

const allReducers = combineReducers({
  practiceAreas
});

export default allReducers;
