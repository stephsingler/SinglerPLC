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
