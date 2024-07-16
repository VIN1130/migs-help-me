// src/reducers/topartifactsreducer.js

const initialState = {
    index: 0,
  };
  
  function topArtifactsReducer(state, action) {
    switch (action.type) {
      case 'SET_INDEX':
        return {
          ...state,
          index: action.payload,
        };
      default:
        return state;
    }
  }
  
  export { initialState, topArtifactsReducer };
  