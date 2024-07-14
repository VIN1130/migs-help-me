const homePageReducer = (state, action) => {
    switch (action.type) {
      case 'SET_TOP_ARTIFACTS':
        return { ...state, topArtifacts: action.payload };
      case 'SET_ARTIFACTS':
        return { ...state, artifacts: action.payload };
      case 'UPDATE_FORM':
        return { ...state, form: { ...state.form, ...action.payload } };
      default:
        return state;
    }
  };
  
  export default homePageReducer;