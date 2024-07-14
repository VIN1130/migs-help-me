const artifactDetailReducer = (state, action) => {
    switch (action.type) {
      case 'SET_ARTIFACT':
        return { ...state, artifact: action.payload };
      case 'SET_ARTIFACTS':
        return { ...state, artifacts: action.payload };
      default:
        return state;
    }
  };
  
  export default artifactDetailReducer;