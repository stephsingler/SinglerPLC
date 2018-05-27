export const loadFirm = (ourFirm) => {
  return {
    type: "LOAD_FIRM",
    payload: ourFirm
  }
};

export const loadPracticeAreas = (practiceAreas) => {
  return {
    type: "LOAD__PRACTICE_AREAS",
    payload: practiceAreas
  }
};

export const loadAttorneys = (ourAttorneys) => {
  return {
    type: "LOAD_ATTORNEYS",
    payload: ourAttorneys
  }
};
