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

const ourAttorneys = (state = [], action) => {
  if (action.type === "LOAD_ATTORNEYS") {
    return action.payload;
  }
  return state;
}

const testimonials = (state = [], action) => {
  if (action.type === "LOAD_TESTIMONIALS") {
    return action.payload;
  }
  return state;
}

const franchises = (state = [], action) => {
  if (action.type === "LOAD_FRANCHISES") {
    return action.payload;
  }
  return state;
}

const government = (state = [], action) => {
  if (action.type === "LOAD_GOVERNMENT") {
    return action.payload;
  }
  return state;
}

const legal = (state = [], action) => {
  if (action.type === "LOAD_LEGAL") {
    return action.payload;
  }
  return state;
}

const records = (state = [], action) => {
  if (action.type === "LOAD_RECORDS") {
    return action.payload;
  }
  return state;
}

const allReducers = combineReducers({
  ourFirm, practiceAreas
});

export default allReducers;
