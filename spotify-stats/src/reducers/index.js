const initialState = {
  counter: 0,
  profile: {
    displayName: '',
    country: '',
    email: ''
  }
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
    case "SET_PROFILE":
      return { ...state, profile: { displayName: action.payload.displayName, country: action.payload.country, email: action.payload.email } };
    default:
      return state;
  }
};

export default profileReducer;